import CircleX4 from "./CircleX4";
const SecondLine = (props) => {
  return (
    <>
      <div className="items4">
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
      </div>
      <div className="downlines4">
        <CircleX4 exist={props.exist3} />
        <CircleX4 exist={props.exist4} />
        <CircleX4 exist={props.exist5} />
        <CircleX4 exist={props.exist6} />
      </div>
      <style jsx>{`
        .lines {
          height: 25px;
          width: 2px;
          background: #9865ec;
          margin: auto auto;
        }
        .items4 {
          display: grid;
          grid-template-columns: 50px 50px 50px 50px;
        }
        .downlines4 {
          display: grid;
          grid-template-columns: 50px 50px 50px 50px;
        }
      `}</style>
    </>
  );
};

export default SecondLine;
