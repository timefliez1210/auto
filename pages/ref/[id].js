import React, { Component } from "react";
import Router from "next/router";
import Web3 from "web3";
import { ABI, ADDRESS, OWNER } from "../../utils/globals";
import { loadWeb3 } from "../../utils/utility";

class RefLink extends Component {
  async loadBlockchainData() {
    this.setState({ id: Router.query.id });
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const contract = new web3.eth.Contract(ABI, ADDRESS);
    this.setState({ contract });
    const isExists = await contract.methods
      .isUserExists(this.state.account)
      .call();
    this.setState({ isExist: isExists });
    const costs = await contract.methods.registrationCost().call();
    this.setState({ cost: costs });
    const refererAddress = await contract.methods.userIds(this.state.id).call();
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
          value: this.state.cost,
          from: this.state.account,
        })
        .then(function (receipt) {
          Router.push("/dashboard");
        });
    }
  }

  render() {
    return (
      <>
        <div className="header">
          <div className="hero-image">
            <div className="picture-holder"></div>
          </div>
          <div className="form-part">
            <h1>Register</h1>
            <p>Your inviter is ID {this.state.id}</p>
            <form
              className="automatic"
              onSubmit={async (event) => {
                event.preventDefault();
                await loadWeb3();
                await this.loadBlockchainData();
                await this.register(this.state.refererAddress);
              }}
            >
              <button className="auto">Register</button>
            </form>

            <p>Telegram Channel @cryptoofficial</p>
          </div>
        </div>
        <style jsx>{`
          .header {
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            background: rgba(16, 1, 62, 1);
            display: flex;
          }
          @media only screen and (max-width: 1000px) {
            .header {
              height: auto;
            }
          }
          .hero-image {
            width: 70vw;
            height: 100vw;
          }
          .picture-holder {
            width: 100%;
            height: 100vh;
            background-image: url("/assets/img/hero-picture.jpg");
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
          }
          .hero {
            width: 100%;
          }
          .form-part {
            background: rgba(28, 22, 85, 1);
            width: 30vw;
            padding: 60px;
            color: white;
            height: 100vh;
            text-align: center;
          }

          p {
            color: grey;
          }
          h1 {
            margin-top: 15vh;
            margin-bottom: 5vh;
            font-size: 1.5em;
          }
          button {
            width: 100%;
            text-align: center;
            padding: 20px 0;
            border-radius: 30px;
            color: white;
            font-size: 1.2em;
          }

          @media only screen and (max-width: 1000px) {
            .hero-image {
              display: none;
            }
            .form-part {
              width: 95vw;
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
        `}</style>
      </>
    );
  }
}

export default RefLink;
