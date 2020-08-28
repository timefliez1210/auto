import React, { useRef, useState } from "react";

const UserContent = (props) => {
  const [copySuccess, setCopySuccess] = useState("");
  const inputRef = useRef(null);
  function copyToClipboard(e) {
    inputRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
  }

  return (
    <>
      <div className="content-user">
        <h4>{props.title}</h4>
        <form>
          <input ref={inputRef} value={props.placeholder} readOnly />
        </form>
        <br />
        {
          /* Logical shortcut for only displaying the 
          button if the copy command exists */
          document.queryCommandSupported("copy") && (
            <div>
              <button className="copy" onClick={copyToClipboard}>
                <b>Copy</b>
              </button>
            </div>
          )
        }
        <div className="success">
          <b>{copySuccess}</b>
        </div>
      </div>

      <style jsx>{`
        h4 {
          margin-top: 5px;
        }
        .content-user {
          background: #1d2026;
          box-shadow: 5px 5px 10px #15171b, -5px -5px 10px #252931;
          width: 90%;
          padding: 10px 10px;
          margin: 20px auto;
          border-radius: 50px;
          text-align: center;
        }
        input {
          width: auto;
          margin: 10px auto;
          text-align: center;
          padding: 5px 10px;
          overflow: auto;
          border-radius: 10px;
          background: #2c3039;
          border: none;
          color: white;
        }
        input::placeholder {
        }
        .success {
          background: #34eb98;
          color: black;
          width: 50%;

          margin: 20px auto;
          font-style: bold;
          border-radius: 30px;
        }
        button {
          margin: 10px 15px;
          border: none;
          color: white;
          border-radius: 10px;
          padding: 10px 25px;
        }
        .copy {
          background: #9865ec;
          color: white;
        }
        .etherscan {
          background: #2c3039;
        }
      `}</style>
    </>
  );
};

export default UserContent;

{
  /* <div>
{
  document.queryCommandSupported("copy") && (
    <div>
      <button onClick={copyToClipboard}>Copy</button>
      {copySuccess}
    </div>
  )
}
<form>
  <textarea ref={inputRef} value="Some text to copy" />
</form>
</div> */
}

// type="text"
// disabled="disabled"
// placeholder={props.placeholder}
