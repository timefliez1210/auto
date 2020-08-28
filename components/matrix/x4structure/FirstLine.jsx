import CircleX4 from "./CircleX4";
const FirstLine = (props) => {
  return (
    <>
      <div className="items">
        <div className="lines"></div>
        <div className="lines"></div>
      </div>
      <div className="downlines">
        <CircleX4 exist={props.exist1} />
        <CircleX4 exist={props.exist2} />
      </div>
      <div className="items">
        <div className="lines"></div>
        <div className="lines"></div>
      </div>
      <style jsx>{`
        .lines {
          height: 25px;
          width: 2px;
          background: #9865ec;
          margin: auto auto;
        }
        .items {
          display: grid;
          grid-template-columns: 100px 100px;
          text-align: center;
          align-items: center;
        }
        .downlines {
          display: grid;
          grid-template-columns: 100px 100px;
        }
      `}</style>
    </>
  );
};

export default FirstLine;
