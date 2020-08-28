import { loadTronWeb } from "../../utils/utility";
import { ABI, ADDRESS } from "../../utils/globals";
import TronWeb from "tronweb";
import AccountContext from "../../Layout/AccountContext";
import React, { useContext, useState, useEffect } from "react";
import ReferalLineDetail from "./x3structure/ReferalLineDetail";

const X3matrixDetail = (props) => {
  const [exist1, setExist1] = useState(false);
  const [exist2, setExist2] = useState(false);
  const [downlineId1, setDownlineId1] = useState();
  const [downlineAddress1, setDownlineAddress1] = useState();
  const [downlineId2, setDownlineId2] = useState();
  const [downlineAddress2, setDownlineAddress2] = useState();
  const { matrixView, setMatrixView } = useContext(AccountContext);
  const cost = props.cost;
  const id = props.id;
  useEffect(() => {
    if (props.downlineIds.length != 0) {
      if (props.downlineIds.length === 1) {
        setExist1(true);
        setDownlineAddress1(props.downlineIds[0]);
        addressToId(props.downlineIds[0], 0);
      } else if (props.downlineIds.length === 2) {
        setExist2(true);
        setDownlineAddress1(props.downlineIds[1]);
        addressToId(props.downlineIds[1], 1);
      }
    }
  });

  const buyLevel = async (_id, _level, _cost, _account) => {
    try {
      const contract = await tronWeb.contract().at(ADDRESS);

      await contract.methods
        .buyNewLevel(_id, _level)
        .send({
          value: _cost,
          from: _account,
        })
        .then(function (receipt) {
          window.alert("Succes!");
        });
    } catch (err) {
      window.alert("Something went wrong.. Check: " + err);
    }
  };

  const addressToId = async (_address, _iterable) => {
    const contract = await tronWeb.contract().at(ADDRESS);
    const res = await contract.methods.users(_address).call();
    if (_iterable === 0) {
      const userId = res[0];
      setDownlineId1(userId);
    } else if (_iterable === 1) {
      const userId1 = res[0];
      const userId2 = res[1];
      setDownlineId1(userId1);
      setDownlineId2(userId2);
    }
  };

  if (props.bought) {
    return (
      <>
        <div className="holder">
          <div className="upline"></div>
          <div
            className="matrix-head"
            onClick={() => {
              setMatrixView("");
            }}
          >
            <div className="level">{props.id}</div>
            <div className="id">{props.cost}</div>
          </div>
          <ReferalLineDetail
            exist1={exist1}
            exist2={exist2}
            exist3={false}
            downlineId1={downlineId1}
            downlineAddress1={downlineAddress1}
            downlineId2={downlineId2}
            downlineAddress2={downlineAddress2}
          />
        </div>
        <style jsx>{`
          .holder {
            width: auto;
            width: 600px;
            margin: auto auto;
          }
          .matrix-head {
            background: rgb(31, 169, 255);
            background: linear-gradient(
              270deg,
              rgba(31, 169, 255, 1) 31%,
              rgba(21, 117, 251, 1) 77%
            );
            display: grid;
            grid-template-columns: 50px 150px;
            border-radius: 20px;
            font-style: bold;
            font-size: 1.2em;
            height: 210px;
            overflow: hidden;
            cursor: pointer;
          }
          .level {
            background: #338eff;
            padding: 20px 20px;
            border-radius: 20px;
          }
          .id {
            padding: 20px 20px;
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
            <button
              className="buy-level"
              onClick={async () => {
                await buyLevel(1, id, cost, props.account);
              }}
            >
              Buy for {props.cost}
            </button>
          </div>
          <ReferalLineDetail exist1={exist1} exist2={exist2} exist3={false} />
        </div>
        <style jsx>{`
          .buy-level {
            border: none;
            background: none;
            color: white;
            font-size: 1em;
          }
          .holder {
            width: auto;
            width: 600px;
            margin: auto auto;
          }
          .matrix-head {
            background: rgba(16, 1, 62, 1);
            display: grid;
            grid-template-columns: 50px 150px;
            border-radius: 20px;
            font-style: bold;
            font-size: 1.2em;
            height: 210px;
            overflow: hidden;
            cursor: pointer;
          }
          .level {
            background: #338eff;
            padding: 20px 20px;
            border-radius: 20px;
          }
          .id {
            padding: 20px 20px;
          }
        `}</style>
      </>
    );
  }
};

export default X3matrixDetail;
