import React, { Component } from "react";

const AccountContext = React.createContext();

// export const AccountProvider = AccountContext.Provider;
// export const AccountConsumer = AccountContext.Consumer;

class AccountProvider extends Component {
  // context state
  state = {
    account: "",
    detailViewAccount: "",
    matrixView: "",
  };

  //Method to update
  setAccount = (account) => {
    this.setState((prevState) => ({ account }));
  };

  setDetailViewAccount = (detailViewAccount) => {
    this.setState((prevState) => ({ detailViewAccount }));
  };

  setMatrixView = (matrixView) => {
    this.setState((prevState) => ({ matrixView }));
  };

  render() {
    const { children } = this.props;
    const { account, matrixView, detailViewAccount } = this.state;
    const { setAccount, setMatrixView, setDetailViewAccount } = this;

    return (
      <AccountContext.Provider
        value={{
          detailViewAccount,
          setDetailViewAccount,
          account,
          setAccount,
          matrixView,
          setMatrixView,
        }}
      >
        {children}
      </AccountContext.Provider>
    );
  }
}

export { AccountProvider };

export default AccountContext;
