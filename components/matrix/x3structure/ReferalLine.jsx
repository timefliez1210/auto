import React from "react";
import CircleX3 from "./CircleX3";
import { FaRecycle } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
const ReferalLine = (props) => {
  return (
    <>
      <div className="items">
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
      </div>
      <div className="downlines">
        <CircleX3 exist={props.exist1} />
        <CircleX3 exist={props.exist2} />
        <CircleX3 exist={props.exist3} />
      </div>
      <div className="icons">
        <IoIosPeople />
        <FaRecycle />
      </div>

      <style jsx>{`
        .icons {
          padding: 5px 10px;
          display: flex;
          justify-content: space-between;
        }
        .lines {
          height: 25px;
          width: 2px;
          background: #9865ec;
          margin: auto auto;
        }
        .items {
          display: grid;
          grid-template-columns: 30px 30px 30px;
          grid-gap: 43px;
          text-align: center;
          align-items: center;
        }
        .downlines {
          display: grid;
          grid-template-columns: 30px 30px 30px;
          grid-gap: 43px;
        }
      `}</style>
    </>
  );
};

export default ReferalLine;
