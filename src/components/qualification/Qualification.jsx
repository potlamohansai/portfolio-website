import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/* QUALIFICATION SECTION */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Software Development & Problem Solving
                </h3>
                <span className="qualification__subtitle">Scaler Academy</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2023 - Dec 2025
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">M.Tech</h3>
                <span className="qualification__subtitle">
                  JNTU - Anantapur
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Dec 2021 - May 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">B.Tech</h3>
                <span className="qualification__subtitle">
                  S.V University - Tirupati
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jun 2017 - Sep 2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Diploma</h3>
                <span className="qualification__subtitle">
                  Govt. Polytechnic - Nellore
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jul 2014 - Apr 2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">10th Standard</h3>
                <span className="qualification__subtitle">
                  Sri Chaitanya - North Mopur
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jun 2013 - Apr 2014
                </div>
              </div>
            </div>
          </div>

          {/* EXPERIENCE SECTION */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">Gnani.ai</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Aug 2024 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Junior Frontend Developer
                </h3>
                <span className="qualification__subtitle">TCS - Bangalore</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Oct 2022 - Aug 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Assistant System Engineer
                </h3>
                <span className="qualification__subtitle">TCS - Bangalore</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Mar 2022 - Sep 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Assistant System Engineer Trainee
                </h3>
                <span className="qualification__subtitle">TCS - Bangalore</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Dec 2021 - Feb 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UI Developer</h3>
                <span className="qualification__subtitle">
                  BSW Soft Pvt Ltd - Bangalore
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Sep 2020 - Nov 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
