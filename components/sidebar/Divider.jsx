import React from "react";

export default function Divider() {
  return (
    <>
      <div className="divider"></div>
      <style jsx>{`
        .divider {
          width: 90%;
          margin: 20px auto;
          background: grey;
          height: 1px;
        }
      `}</style>
    </>
  );
}
