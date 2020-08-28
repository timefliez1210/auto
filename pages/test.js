import React, { Component } from "react";
import { ADDRESS } from "../utils/globals";

export default class Test extends Component {
  async componentDidMount() {
    const loadWatcher = setInterval(() => {
      if (window.tronWeb && window.tronWeb.ready) {
        this.setState({
          tronWeb: window.tronWeb,
        });

        clearInterval(loadWatcher);
      }
    }, 500);
  }
  async triggercontract() {
    try {
      const contract = await tronWeb.contract().at(ADDRESS);
      this.setState({ contract });
      let res = await contract.lastUserId().call().base58;
      this.setState(res);
      let res2 = await contract.levelPrice(1).call();
      this.setState({ res2 });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={async () => {
            const account = await tronWeb.defaultAddress.base58;
            await this.triggercontract();
            this.setState({ account });
            console.log(this.state);
          }}
        ></button>
      </div>
    );
  }
}
