import ItemHolder from "./infoheader/ItemHolder";
import { IoIosPeople, IoMdClock, IoLogoUsd, IoMdHeart } from "react-icons/io";

const InfoHeader = (props) => {
  return (
    <div className="info-margin">
      <ItemHolder
        icon={<IoIosPeople />}
        title="All Participants"
        amount={props.totalUsers}
      />
      <ItemHolder
        icon={<IoMdClock />}
        title="Joined in 24 hours"
        amount={props.totalUsers}
      />
      <ItemHolder
        icon={<IoMdHeart />}
        title="Participant TRX"
        amount={props.totalUsers * 300}
      />
      <ItemHolder
        icon={<IoLogoUsd />}
        title="Participant USD"
        amount={props.totalUsers * 300 * 130}
      />
      <style jsx>{`
        .info-margin {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          grid-gap: 50px;
          margin: 30px auto;
        }
      `}</style>
    </div>
  );
};

export default InfoHeader;
