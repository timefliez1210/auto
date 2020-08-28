const ItemHolder = (props) => {
  return (
    <div className="upper">
      <div className="holder">
        <h1 className="display">{props.icon}</h1>
        <div>
          <h3>{props.title}</h3>
          <h3>{props.amount}</h3>
        </div>
      </div>
      <style jsx>{`
        .upper {
          width: 90%;
          margin: auto auto;
          border-radius: 30px;
          background: #1d2026;
          box-shadow: 5px 5px 10px #15171b, -5px -5px 10px #252931;
        }
        .holder {
          width: 90%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 80px auto;
        }
        .display {
          margin-top: 20px;
          width: 60px;
          border-radius: 5px;
        }
        h1 {
          font-size: 3.7em;
          margin: auto auto;
          color: #9865ec;
        }
      `}</style>
    </div>
  );
};

export default ItemHolder;
