import React, { Component } from "react";
import AccountContext from "../../Layout/AccountContext";
import { ADDRESS, ABI } from "../../utils/globals";
import Router from "next/router";

class ManualLogin extends Component {
  static contextType = AccountContext;

  async loadBlockchainData() {
    try {
      let contract = await tronWeb.contract(ABI, ADDRESS);
      this.setState({ contract });
      if (this.state.account[0] === "T") {
        const isExists = await contract.methods
          .isUserExists(this.state.account)
          .call();
        this.setState({ isExist: isExists });
      } else {
        const id = this.state.account;
        const _account = await contract.methods.idToAddress(id).call();
        const isExists = await contract.methods.isUserExists(_account).call();
        this.setState({ isExist: isExists, account: _account });
      }
    } catch (e) {
      window.alert("Trouble Connecting please try again!" + e);
      this.setState({ loading: false });
    }
  }

  async login() {
    this.setState({ loading: true });
    try {
      // await loadTronWeb();
      await this.loadBlockchainData();
    } catch (err) {
      window.alert("Invalid TRX ADDRESS, Checksum doesnt match");
      this.setState({ loading: false });
    }
  }

  redirect() {
    if (this.state.isExist) {
      Router.push("/dashboard");
    } else {
      window.alert(
        "The user you are looking for doesn't exist. Try another one!"
      );
      this.setState({ loading: false });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      isExist: false,
      loading: false,
    };
  }
  render() {
    const { account, setAccount } = this.context;
    const isLoading = this.state.loading;
    return (
      <>
        <form
          className="manual"
          onSubmit={async (event) => {
            event.preventDefault();

            await this.login();
            const newUser = this.state.account;
            setAccount(newUser);
            // this.redirect();
          }}
        >
          <input
            type="text"
            onChange={(event) => {
              const address = this.input.value.toString();
              this.setState({
                account: address,
              });
            }}
            ref={(input) => {
              this.input = input;
            }}
            placeholder="Wallet Address or ID..."
          />

          {!isLoading ? (
            <button className="manual-btn">
              <b>View</b>
            </button>
          ) : (
            <div className="manual-load">
              <b>Loading</b>
            </div>
          )}
        </form>
        <style jsx>{`
          .manual-btn {
            background: rgb(55, 214, 255);
            background: linear-gradient(
              223deg,
              rgba(55, 214, 255, 1) 0%,
              rgba(16, 83, 245, 1) 46%
            );
            box-shadow: none;
            outline: none;
            border: none;
          }
          .manual-load {
            background: rgb(55, 214, 255);
            background: linear-gradient(
              223deg,
              rgba(55, 214, 255, 1) 0%,
              rgba(16, 83, 245, 1) 46%
            );
            box-shadow: none;
            outline: none;
            border: none;
            width: 100%;
            text-align: center;
            padding: 20px 0;
            border-radius: 30px;
            color: white;
            font-size: 1.2em;
          }
          input {
            width: 100%;
            background: #1d2026;
            border-radius: 23px;
            background: #1d2026;
            box-shadow: inset 5px 5px 8px #131418, inset -5px -5px 8px #272c34;

            outline: none;
            border: none;
            padding: 20px 20px;

            font-size: 1.2em;
            margin: 30px 0;
            color: grey;
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

export default ManualLogin;
