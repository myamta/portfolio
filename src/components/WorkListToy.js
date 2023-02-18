import React from "react";
import "./workList.scss";
import { Link } from "react-router-dom";

const WorkListToy = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <>
      <section className="workList">
        <div className="workListwrapper">
          <h1>WorkList</h1>
          <div className="ListMenu">
            <ul>
              <li>
                <Link to="/project">All</Link>
              </li>
              <li>
                <Link to="/web">WEBSITE</Link>
              </li>
              <li>
                <Link
                  to="/toy"
                  style={{
                    fontWeight: "bold",
                    background: "teal",
                    color: "white",
                    borderRadius: 20,
                  }}
                >
                  Toy Project
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="gridContainer">
          <ul>
            <li>
              <figure className="effect">
                <img src={path + "/title.png"} alt="title1" />
                <figcaption>
                  <p>Toy Project</p>
                  <h2>title</h2>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure className="effect">
                <img src={path + "/title.png"} alt="title1" />
                <figcaption>
                  <p>Toy Project</p>
                  <h2>title</h2>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure className="effect">
                <img src={path + "/title.png"} alt="title1" />
                <figcaption>
                  <p>Toy Project</p>
                  <h2>title</h2>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure className="effect">
                <img src={path + "/title.png"} alt="title1" />
                <figcaption>
                  <p>Toy Project</p>
                  <h2>title</h2>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default WorkListToy;
