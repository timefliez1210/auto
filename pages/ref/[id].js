import React, { Component } from "react";
import Router from "next/router";
import AccountContext from "../../Layout/AccountContext";

import { ABI, ADDRESS, OWNER } from "../../utils/globals";

class RefLink extends Component {
  static contextType = AccountContext;
  async componentDidMount() {
    this.setState({ id: Router.query.id });
  }
  async loadBlockchainData() {
    this.setState({ id: Router.query.id });
    let contract = await tronWeb.contract(ABI, ADDRESS);
    const accounts = await tronWeb.defaultAddress.base58;
    this.setState({ account: accounts });
    this.setState({ contract });
    const isExists = await contract.isUserExists(this.state.account).call();
    this.setState({ isExist: isExists });
    const _costs = await contract.levelPrice(1).call();
    const costs = _costs * 5;
    this.setState({ cost: costs });
    const refererAddress = await contract.userIds(this.state.id).call();
    this.setState({ refererAddress });

    this.setState({ isLoading: false });
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      isExist: false,
      cost: "",
      loading: false,
      id: "",
    };
  }

  async register(_refererAddress) {
    if (this.state.isExist) {
      Router.push("/dashboard");
    } else {
      await this.state.contract.methods
        .registrationExt(_refererAddress)
        .send({
          callValue: this.state.cost,
          from: this.state.account,
        })
        .then(function (receipt) {
          Router.push("/dashboard");
        });
    }
  }

  render() {
    const { account, setAccount } = this.context;
    return (
      <>
        <div className="header">
          <div className="form-part">
            <img src="/assets/img/logo.png" height="100px" />
            <h1>Register</h1>
            <p>
              <b>Your Inviter Is ID {this.state.id}</b>
              <br />
              <br />
            </p>
            <form
              className="automatic"
              onSubmit={async (event) => {
                event.preventDefault();

                await this.loadBlockchainData();
                await this.register(this.state.refererAddress);
                const newUser = this.state.account;
                setAccount(newUser);
              }}
            >
              <button className="auto">Register</button>
              <br />
              <br />
            </form>
          </div>
        </div>
        <style jsx>{`
          .header {
            width: 100vw;
            min-height: 100vh;
            overflow-x: hidden;
            background: #242830;
            display: flex;
          }

          .hero {
            width: 100%;
          }
          .form-part {
            border-radius: 50px;
            background: #1d2026;
            box-shadow: 11px 11px 22px #101215, -11px -11px 22px #2a2e37;
            width: 30vw;
            padding: 20px;
            color: white;
            height: auto;
            text-align: center;
            margin: auto auto;
          }

          p {
            color: grey;
          }
          h1 {
            margin-top: 5vh;
            margin-bottom: 5vh;
            font-size: 1.5em;
          }

          @media only screen and (max-width: 1000px) {
            .header {
              height: auto;
            }
            .form-part {
              height: auto;
              width: 90vw;
              margin: auto auto;
            }
          }
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

export default RefLink;
