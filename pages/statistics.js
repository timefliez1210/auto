import React, { Component } from "react";

import { ABI, ADDRESS } from "../utils/globals";

import Router from "next/router";
import Spinner from "../components/Spinner";
import Navigation from "../components/Navigation";
import InfoHeader from "../components/InfoHeader";
import Sidebar from "../components/sidebar/Sidebar";

// Context API
import AccountContext from "../Layout/AccountContext";

class Statistics extends Component {
  static contextType = AccountContext;

  async componentDidMount() {
    try {
      this.setState({ account: this.context.account });
      await this.loadBlockchainData();
      this.setState({ loading: false });
      console.log(this.state);
    } catch (err) {
      console.log("Something went wrong.. Check: " + err);
    }
  }

  async loadBlockchainData() {
    try {
      let contract = await tronWeb.contract(ABI, ADDRESS);
      this.setState({ contract });
      const address = ADDRESS;
      this.setState({ address });

      const userId = await this.state.contract.methods
        .users(this.state.account)
        .call();

      this.setState({
        userIds: parseInt(userId.id),
        parnterCount: parseInt(userId.partnersCount),
      });
      const userCount = await this.state.contract.methods.lastUserId().call();
      this.setState({ totalUsers: parseInt(userCount) });
      const balance = await parseInt(
        this.state.contract.methods.balances(this.state.account).call()
      );
      this.setState({ balance });

      // Matrix Calls
      const costs = await contract.methods.levelPrice(1).call();
      this.setState({ cost: parseInt(costs) / 1000000 });

      // Error Catch -> Fetch the new Data directly from web3 provider after reload
    } catch (err) {
      try {
        let contract = await tronWeb.contract(ABI, ADDRESS);
        const accounts = await tronWeb.defaultAddress.base58;
        this.setState({ account: accounts });
        const address = ADDRESS;
        this.setState({ address });
        const isExists = await contract.methods
          .isUserExists(this.state.account)
          .call();
        this.setState({ isExist: isExists });
        // Bundled Promises
        const userId = await this.state.contract.methods
          .users(this.state.account)
          .call();
        this.setState({
          userIds: parseInt(userId.id),
          parnterCount: parseInt(userId.partnersCount),
        });
        const userCount = await this.state.contract.methods.lastUserId().call();
        this.setState({ totalUsers: parseInt(userCount) });
        const _balance = await this.state.contract.methods
          .balances(this.state.account)
          .call();
        const balance = parseInt(_balance);
        this.setState({ balance });
      } catch (err) {
        window.alert(
          "We really cant connect you, are you connected to the MATIC Chain?  " +
            err
        );
      }
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      isExist: true,
      userIds: "",
      loading: true,
      totalUsers: "",
      parnterCount: "",
    };
  }

  render() {
    if (this.state.loading === true) {
      return <Spinner />;
    } else {
      return (
        <>
          <Navigation />
          <div className="dashboard">
            <InfoHeader totalUsers={this.state.totalUsers} />
            <div className="pagination">
              <div className="small-box">
                <Sidebar
                  userIds={this.state.userIds}
                  partnersCount={this.state.parnterCount}
                  account={this.state.account}
                  address={this.state.address}
                  balance={this.state.balance}
                />
              </div>
              <div className="big-box">
                <h1>Statistic</h1>
                <p>Search by Hash</p>
                <form>
                  <input placeholder="Search.." />
                  <button>Submit</button>
                </form>
                <h2>The last Transactions</h2>
                <div className="header">
                  <p>Hash</p>
                  <p>ID</p>
                  <p>Type</p>
                  <p>ETH</p>
                  <p>Platform</p>
                  <p>Program</p>
                  <p>Date</p>
                </div>
              </div>
            </div>

            <style jsx>{`
              .header {
                display: grid;
                grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr 1fr;
                background: rgba(28, 22, 85, 1);
                border-radius: 20px;
                padding: 10px 20px;
              }
              form {
                width: 100%;
              }
              .big-box {
                border-radius: 50px;
                background: #1d2026;
                box-shadow: 11px 11px 22px #101215, -11px -11px 22px #2a2e37;
                padding: 30px 30px;
              }
              input {
                border: none;
                outline: none;
                background: rgba(28, 22, 85, 1);
                width: 70vw;
                max-width: 400px;
                border-radius: 20px;
                line-height: 3em;
                padding: 0 20px;
                color: white;
                font-style: bold;
                font-size: 1.2em;
              }
              button {
                border: none;
                outline: none;
                background: rgba(28, 22, 85, 1);
                color: white;
                font-style: bold;
                font-size: 1.2em;
                padding: 18px 30px;
                margin-left: 20px;
                border-radius: 20px;
              }
              .dashboard {
                background: none;
                width: 100vw;
                max-width: 1420px;
                margin: 3.5vh auto;
                padding: 5px;
              }
              .pagination {
                margin-top: 2vh;
                display: grid;
                grid-template-columns: 30% 65%;
                grid-gap: 5%;
              }
              @media only screen and (max-width: 900px) {
                .pagination {
                  grid-template-columns: 1fr;
                  grid-gap: 5%;
                }
              }
            `}</style>
          </div>
        </>
      );
    }
  }
}
export default Statistics;
