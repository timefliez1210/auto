import AutoLogin from "../components/login/AutoLogin";
import ManualLogin from "../components/login/ManualLogin";

const Login = () => {
  return (
    <>
      <>
        <div className="header">
          <div className="hero-image">
            <div className="picture-holder"></div>
          </div>
          <div className="form-part">
            <h1>To view account ID or enter ETH purse</h1>
            <ManualLogin />
            <h1>The entrance to the office</h1>
            <p>
              For access to all the functions of your personal account, use
              Login:
            </p>
            <AutoLogin />
            <p>Telegram Channel @cryptoofficial</p>
          </div>
        </div>
        <style jsx>{`
          .header {
            width: 100vw;
            min-height: 100vh;
            overflow-x: hidden;
            background: rgba(16, 1, 62, 1);
            display: flex;
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
          input {
            width: 100%;
            background: rgba(16, 1, 62, 1);
            box-shadow: none;
            outline: none;
            border: none;
            padding: 20px 20px;
            border-radius: 30px;
            font-size: 1.2em;
            margin: 30px 0;
            color: grey;
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
            .header {
              height: auto;
            }
            .form-part {
              height: auto;
            }
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
        `}</style>
      </>
    </>
  );
};

export default Login;
