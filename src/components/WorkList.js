import { Link } from "react-router-dom";
import "./workList.scss";

const WorkList = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="workList">
      <div className="workListwrapper">
        <h1>WorkList</h1>
        <div className="ListMenu">
          <ul>
            <li>
              <Link to="/">All</Link>
            </li>
            <li>
              <Link to="/">WEBSITE</Link>
            </li>
            <li>
              <Link to="/">OTHERS</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="gridContainer">
        <ul>
          <li>
            <Link to="/projectInfo">
              <figure className="effect">
                <img src={path + "./images/drModoo.png"} alt="title1" />
                <figcaption>
                  <p>
                    WEBSITE
                    <br />
                    #HTML #CSS #JS
                  </p>
                  <h2>닥터모두</h2>
                </figcaption>
              </figure>
            </Link>
          </li>
          <li>
            <Link to="/projectInfo2">
              <figure className="effect">
                <img src={path + "./tittle.png"} alt="title1" />
                <figcaption>
                  <p>
                    WEBSITE
                    <br />
                    #HTML #CSS
                  </p>
                  <h2>웹사이트 클론코딩</h2>
                </figcaption>
              </figure>
            </Link>
          </li>
          <li>
            <figure className="effect">
              <img src={path + "./tittle.png"} alt="title1" />
              <figcaption>
                <p>WEBSITE</p>
                <h2>title</h2>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure className="effect">
              <img src={path + "./tittle.png"} alt="title1" />
              <figcaption>
                <p>WEBSITE</p>
                <h2>title</h2>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure className="effect">
              <img src={path + "./tittle.png"} alt="title1" />
              <figcaption>
                <p>WEBSITE</p>
                <h2>title</h2>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure className="effect">
              <img src={path + "./tittle.png"} alt="title1" />
              <figcaption>
                <p>WEBSITE</p>
                <h2>title</h2>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WorkList;
