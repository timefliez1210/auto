import React, { Component } from "react";

import { ABI, ADDRESS, OWNER } from "../../utils/globals";

import Router from "next/router";
import AccountContext from "../../Layout/AccountContext";

class AutoLogin extends Component {
  static contextType = AccountContext;

  async loadBlockchainData() {
    try {
      let contract = await tronWeb.contract(ABI, ADDRESS);
      this.setState({ contract });
      const accounts = await tronWeb.defaultAddress.base58;
      this.setState({ account: accounts });

      const isExists = await contract.methods
        .isUserExists(this.state.account)
        .call();
      this.setState({ isExist: isExists });
      const costs = await contract.methods.levelPrice(1).call();
      const _cost = costs * 2;
      this.setState({ cost: _cost });
      this.setState({ isLoading: false });
    } catch (err) {
      window.alert(err);
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      isExist: false,
      cost: "",
      loading: false,
      refererAddress: OWNER,
    };
  }

  async register(_refererAddress) {
    this.setState({ loading: true });

    await this.loadBlockchainData();
    console.log(this.state);
    if (this.state.isExist) {
      Router.push("/dashboard");
      this.setState({ loading: false });
    } else {
      console.log(this.state);
      await this.state.contract
        .registrationExt(_refererAddress)
        .send({
          callValue: this.state.cost,
          from: this.state.account,
        })
        .then(function (receipt) {
          Router.push("/dashboard");
          this.setState({ loading: false });
        });
    }
  }
  render() {
    const { account, setAccount } = this.context;
    const isLoading = this.state.loading;
    return (
      <>
        <form
          className="automatic"
          onSubmit={async (event) => {
            event.preventDefault();
            await this.register(this.state.refererAddress);
            const newUser = this.state.account;
            setAccount(newUser);
          }}
        >
          <button className="auto">
            {!isLoading ? <b>Authorization</b> : <b>Loading</b>}
          </button>
        </form>
        <style jsx>{`
          .auto {
            background: rgb(0, 237, 47);
            background: linear-gradient(
              306deg,
              rgba(0, 237, 47, 1) 29%,
              rgba(0, 179, 35, 1) 64%,
              rgba(0, 179, 35, 1) 83%
            );
            box-shadow: none;
            outline: none;
            border: none;
          }
          button {
            width: 100%;
            text-align: center;
            padding: 20px 0;
            border-radius: 30px;
            color: white;
            font-size: 1.2em;
          }
        `}</style>
      </>
    );
  }
}

export default AutoLogin;
