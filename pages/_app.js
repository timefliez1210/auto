import "../styles/globals.css";
import { AccountProvider } from "../Layout/AccountContext";

function MyApp({ Component, pageProps }) {
  const account = {
    address: "",
  };
  const detailViewAccount = {
    detailViewAccount: "",
  };
  const matrixView = {
    matrixView: "",
  };
  return (
    <AccountProvider value={(account, matrixView, detailViewAccount)}>
      <Component {...pageProps} />
    </AccountProvider>
  );
}

export default MyApp;
