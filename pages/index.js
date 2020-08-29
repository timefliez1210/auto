import AutoLogin from "../components/login/AutoLogin";
import ManualLogin from "../components/login/ManualLogin";

const Login = () => {
  return (
    <>
      <>
        <div className="header">
          <div className="form-part">
            <img src="assets/img/logo.png" height="100px" />
            {/* <h1>To View Accounts Enter ID Or TRX Wallet Address</h1>
            <ManualLogin /> */}
            <h1>The entrance to the office</h1>
            <p>
              For access to all the functions of your personal account, use
              Login:
            </p>
            <AutoLogin />
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
            padding: 60px;
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
        `}</style>
      </>
    </>
  );
};

export default Login;
