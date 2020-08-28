import Link from "next/link";
import { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="holder">
      <nav>
        <div className="logo-small">
          <Link href="/">
            <a title="Startseite">
              <img src="/assets/img/logo.png" height="90px" />
            </a>
          </Link>
        </div>
        <figure
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <RiMenu4Line fontSize="40px" />
        </figure>
        <ul className={navOpen ? "active" : ""}>
          <li>
            <Link href="/">
              <a title="Startseite">
                <img src="/assets/img/logo.png" className="logo-big" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <a
                title=""
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
              >
                Main
              </a>
            </Link>
          </li>
          <li>
            <Link href="/partners">
              <a
                title=""
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
              >
                Partners
              </a>
            </Link>
          </li>
          {/* <li>
          <Link href="">
            <a title=""onClick={() => {
                    setNavOpen(!navOpen);
                  }}>Partners</a>
          </Link>
        </li> */}
          <li>
            <Link href="/statistics">
              <a
                title=""
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
              >
                Statistics
              </a>
            </Link>
          </li>
          {/* <li>
          <Link href="">
            <a title=""
            onClick={() => {
                    setNavOpen(!navOpen);
                  }}>Goal</a>
          </Link>
        </li> */}
          <li>
            <Link href="/instructions">
              <a
                title=""
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
              >
                Instructions
              </a>
            </Link>
          </li>
        </ul>
        <style jsx>{`


      .logo-big {
          width 100px;
      }
      .logo-small {
          width 80px;
          margin: 0px auto;
          display: none;
          position: fixed;
          top: 2;
          left: 40%;
      }
      nav {
        background: #242830;
        height: auto;
        width: 100vw;
        position: fixed;
        top: 0px;
        padding: 5px 0;
        z-index: 999;
        font-size: 20px;
      }



      nav ul {
        background: #242830;
        width: 100vw;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-margin-before: 0;
        margin-block-start: 0;
        -webkit-margin-after: 0;
        margin-block-end: 0;
        -webkit-padding-start: 0;
        padding-inline-start: 0;
        height: 100%;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
          max-width: 950px;
          margin: 0 auto;
      }

      nav  figure {
        display: none;
        cursor: pointer;
        color: grey;
      }

      nav ul li {
        list-style-type: none;
        padding: 10px 20px;
      }

      nav ul li .active {
        background: #999;
      }

      nav ul .button {

        color: white;


      }

      nav ul a {
        color: grey;
        text-decoration: none;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: reverse;
        -ms-flex-direction: row-reverse;
        flex-direction: row-reverse;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      nav ul i {
        margin-right: 5px;
        font-size: 20px;
      }

      @media screen and (max-width: 949px) {

        nav ul .button {
          width: 180px;
          color: white;
          font-size: 18px;


        }

          .logo-small {
              width 80px;
              margin: 0px auto;
              display: block;
          }

      nav {
        background: #242830;
          height: 100px;
          
      }
      nav figure {
        display: block;
        cursor: pointer;


      }

      .logo-big {
          display: none;
      }

        nav ul {
          height: 100%;
          width: 300px;
          left: -300px;
          position: fixed;
          top: 90px;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-transition: 300ms ease all;
          transition: 300ms ease all;
        }
        nav ul.active {
          left: 0px;
        }
        nav figure {
          -webkit-margin-start: 2px;
          margin-inline-start: 2px;
          position: fixed;
          left: 15px;
          top: 20px;
          cursor: pointer;
        }
        nav ul li {
          width: 100%;
          padding-left: 0;
          padding-right: 0;
        }
        nav ul a {
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: row;
          flex-direction: row;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          margin-left: 20px;
          margin-right: 16px;
        }
      }
      `}</style>
      </nav>
    </div>
  );
};

export default Navigation;
