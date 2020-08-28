import React, { useState, useEffect } from "react";
import Spinner from "../Spinner.jsx";
import X4Matrix from "./X4matrix";

const X4MatrixHolder = (props) => {
  const [reload, setReload] = useState(0);
  useEffect(() => {
    if (props.struc != undefined) {
      setReload(1);
    }
  });

  if (props.struc === undefined) {
    return (
      <div className="upper-holder">
        <div className="top-part">
          <h1>Forsage x4</h1>
        </div>
        <div className="bottom-part">
          <Spinner />
        </div>

        <style jsx>{`
          .upper-holder {
            margin-bottom: 20px;
            text-align: left;
          }
          .top-part {
            width: 100%;
            background: #1d2026;
            border-radius: 20px 20px 0 0;
            padding: 10px 10px;
          }
          .bottom-part {
            width: 100%;
            background: #1d2026;
            border-radius: 0 0 20px 20px;
            padding: 10px 10px;
            border-top: 2px solid black;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-gap: 30px;
          }
        `}</style>
      </div>
    );
  } else {
    return (
      <>
        <div className="upper-holder">
          <div className="top-part">
            <h1>Autoxify Manual X4</h1>
          </div>
          <div className="bottom-part">
            {props.struc.map((matrix, index) => (
              <X4Matrix
                id={matrix.id}
                key={matrix.key}
                cost={matrix.cost}
                bought={matrix.userX4Exist}
                structure={matrix.userX6}
                account={props.account}
              />
            ))}
          </div>
        </div>
        <style jsx>{`
          .upper-holder {
            margin-top: 50px;
            margin-bottom: 20px;
            text-align: left;
          }
          .top-part {
            width: 100%;
            border-radius: 50px 50px 0 0;
            background: #1d2026;
            box-shadow: 11px 11px 22px #101215, -11px -11px 22px #2a2e37;

            padding: 30px 30px;
          }
          .bottom-part {
            width: 100%;
            background: #1d2026;
            box-shadow: 11px 11px 22px #101215, -11px -11px 22px #2a2e37;
            border-radius: 0 0 50px 50px;
            padding: 30px 30px;
            border-top: 2px solid black;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-gap: 30px;
          }
        `}</style>
      </>
    );
  }
};
export default X4MatrixHolder;
