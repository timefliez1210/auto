import SidebarContent from "./SidebarContent";
import Divider from "./Divider";
import UserContent from "./UserContent";
import { BASE_URL } from "../../utils/globals";
import { IoIosPeople, IoIosPerson } from "react-icons/io";
import InfoHeader from "../InfoHeader";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="profile">
        <div>
          <h1>
            <IoIosPerson />
            {"      "}
            ID: {props.userIds}
          </h1>
          <br />
          <br />
          <h2 className="partners">
            <IoIosPeople />
            {"      "}
            {props.partnersCount}
          </h2>
          <br />
          <br />
        </div>
        <img src="/assets/img/cube.png" width="100%" />
      </div>
      <div className="earnings">Hi ich bin</div>
      <Divider />
      <UserContent
        title="Affiliate Link"
        placeholder={BASE_URL + "ref/" + props.userIds}
      />
      <UserContent title="Your Ethereum Wallet" placeholder={props.account} />
      <UserContent title="Smart Contract Address" placeholder={props.address} />
      <Divider />
      <InfoHeader totalUsers={props.totalUsers} />
      <style jsx>{`
        .sidebar {
          height: 100%;
          border-radius: 50px;
          background: #1d2026;
          box-shadow: 11px 11px 22px #101215, -11px -11px 22px #2a2e37;
          padding: 10px;
        }
        .earnings {
          width: 90%;
          margin: 10px auto;
          background: rgb(4, 255, 255);
          background: linear-gradient(
            239deg,
            rgba(4, 255, 255, 1) 9%,
            rgba(77, 131, 255, 1) 47%,
            rgba(251, 66, 209, 1) 81%
          );
          border: none;
          color: white;
          border-radius: 10px;
          padding: 15px 20px;
          text-align: center;
          font-size: 1.3em;
        }
        .profile {
          width: 90%;
          margin: auto auto;
          display: grid;
          grid-template-columns: 150px auto;
        }
        .profile p {
          font-size: 25px;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
