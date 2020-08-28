const Spinner = () => {
  return (
    <div className="holder">
      <div className="heart-holder">
        <div className="lds-circle">
          <div></div>
        </div>
        <h1>Connecting to the Contract and getting your Dashboard</h1>
      </div>

      <style jsx>{`
        .holder {
          background: none;
          padding-top: 10%;
        }
        .heart-holder {
          color: white;
          text-align: center;
          max-width: 600px;
          max-height: 200px;
          margin: auto auto;
        }
        .lds-circle {
          display: inline-block;
          transform: translateZ(1px);
        }
        .lds-circle > div {
          display: inline-block;
          width: 64px;
          height: 64px;
          margin: 8px;
          border-radius: 50%;
          background: #fff;
          animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
        @keyframes lds-circle {
          0%,
          100% {
            animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
          }
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(1800deg);
            animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
          }
          100% {
            transform: rotateY(3600deg);
          }
        }
      `}</style>
    </div>
  );
};
export default Spinner;
