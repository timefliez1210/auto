const CircleX4 = (props) => {
  if (props.exist === true) {
    return (
      <>
        <div className="circle"></div>
        <style jsx>{`
      .circle {
        height: 30px;
              width: 30px;
              border-radius: 50%;
              border: 1.5px solid #9865ec;
              background: #9865ec;
              margin: auto auto;
      `}</style>
      </>
    );
  } else {
    return (
      <div className="circle-empty">
        <style jsx>{`
          .circle-empty {
            height: 30px;
            width: 30px;
            border-radius: 50%;
            border: 1.5px solid #9865ec;
            background: none;
            margin: auto auto;
          }
        `}</style>
      </div>
    );
  }
};

export default CircleX4;

// #fd8576
