import { ABI, ADDRESS } from "../../utils/globals";

import AccountContext from "../../Layout/AccountContext";
import React, { useContext, useState, useEffect } from "react";
import ReferalLine from "./x3structure/ReferalLine";
import { IoIosCart } from "react-icons/io";

const X3matrix = (props) => {
  const [exist1, setExist1] = useState(false);
  const [exist2, setExist2] = useState(false);

  const [downline1, setDownline1] = useState();
  const { matrixView, setMatrixView } = useContext(AccountContext);

  const cost = props.cost;
  const id = props.id;
  useEffect(() => {
    if (props.downlineIds.length != 0) {
      if (props.downlineIds.length === 1) {
        setExist1(true);
        addressToId(props.downlineIds[0]);
      } else if (props.downlineIds.length === 2) {
        setExist2(true);
      }
    }
  });

  const buyLevel = async (_id, _level, _cost, _account) => {
    try {
      const contract = await tronWeb.contract().at(ADDRESS);

      await contract.methods
        .buyNewLevel(_id, _level)
        .send({
          callValue: _cost * 1000000,
          from: _account,
        })
        .then(function (receipt) {
          window.alert("Succes!");
        });
    } catch (err) {
      window.alert("Something went wrong.. Check: " + err);
    }
  };

  const addressToId = async (_address) => {
    const contract = await tronWeb.contract().at(ADDRESS);
    const res = await contract.methods.users(_address).call();
    const userId = res[0];
    setDownline1(userId);
  };

  if (props.bought) {
    return (
      <>
        <div
          className="holder"
          onClick={() => {
            setMatrixView("x3");
          }}
        >
          <div className="matrix-head">
            <div className="level">
              <b>{props.id}</b>
            </div>
            <div className="id">{props.cost} TRX</div>
          </div>
          <ReferalLine exist1={exist1} exist2={exist2} exist3={false} />
        </div>
        <style jsx>{`
          .holder {
            width: auto;
            width: 200px;
            margin: auto auto;
          }
          .matrix-head {
            background: #1d2026;
            box-shadow: 5px 5px 10px #15171b, -5px -5px 10px #252931;
            display: grid;
            grid-template-columns: 50px 150px;
            border-radius: 20px;
            font-style: bold;
            font-size: 1.2em;
            height: 80px;
            overflow: hidden;
            cursor: pointer;
          }
          .level {
            background: #9865ec;
            padding: 20px 20px;
            border-radius: 20px;
            color: black;
          }
          .id {
            padding: 20px 20px;
          }
          .items {
            display: grid;
            grid-template-columns: 30px 30px 30px;
            grid-gap: 43px;
          }
          .lines {
            height: 25px;
            width: 2px;
            background: lightblue;
            margin: auto auto;
          }
          .downlines {
            display: grid;
            grid-template-columns: 30px 30px 30px;
            grid-gap: 43px;
          }
        `}</style>
      </>
    );
  } else {
    return (
      <>
        <div className="holder">
          <div className="matrix-head">
            <div className="level">{props.id}</div>
            <button className="buy-level">{props.cost} TRX</button>
          </div>
          <ReferalLine exist1={exist1} exist2={exist2} exist3={false} />
        </div>
        <style jsx>{`
          .buy-level {
            border: none;
            background: none;
            color: white;
            font-size: 1em;
            padding: 5px 0;
          }
          .holder {
            width: auto;
            width: 200px;
            margin: auto auto;
          }
          .matrix-head {
            background: #1d2026;
            box-shadow: 5px 5px 10px #15171b, -5px -5px 10px #252931;
            display: grid;
            grid-template-columns: 50px 150px;
            border-radius: 20px;
            font-style: bold;
            font-size: 1.2em;
            height: 80px;
            overflow: hidden;
            cursor: pointer;
          }
          .level {
            background: #1d2026;
            padding: 20px 20px;
            border-radius: 20px;
          }
          .id {
            padding: 20px 0;
          }
          .items {
            display: grid;
            grid-template-columns: 30px 30px 30px;
            grid-gap: 43px;
          }
          .lines {
            height: 25px;
            width: 2px;
            background: lightblue;
            margin: auto auto;
          }
          .downlines {
            display: grid;
            grid-template-columns: 30px 30px 30px;
            grid-gap: 43px;
          }
        `}</style>
      </>
    );
  }
};

export default X3matrix;
