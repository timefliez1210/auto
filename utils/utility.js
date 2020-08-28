import Web3 from "web3";

// Fetching WEB3 Provider

export const loadWeb3 = async () => {
  try {
    if (typeof window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (typeof window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  } catch (err) {
    window.alert("Trouble connecting to you web3 browser...");
  }
};

// Instantiate Contract Object
