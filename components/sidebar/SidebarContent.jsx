const SidebarContent = (props) => {
  return (
    <>
      <div className="content-goals">
        <h4>
          {props.title} {props.matrix}
        </h4>

        <p>{props.balance_usd}</p>

        <p className="light-blue">
          <b>{props.balance_eth}</b>
        </p>
      </div>
      <style jsx>{`
        p {
          padding: 0 20px;
        }
        .content-goals {
          border-radius: 50px;
          background: #1d2026;
          box-shadow: 5px 5px 10px #15171b, -5px -5px 10px #252931;
          width: 90%;
          margin: 30px 0;
          text-align: left;
          margin: 20px auto;

          padding-top: 5px;
        }
        .light-blue {
          width: 100%;
          background: #34eb98;
          border-radius: 0 0 50px 50px;
          padding: 20px 20px;
          color: #1d2026;
          font-style: bold;
        }
        h4 {
          padding: 0 20px;
          font-size: 1.3em;
        }
      `}</style>
    </>
  );
};

export default SidebarContent;
