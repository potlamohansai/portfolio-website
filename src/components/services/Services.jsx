import React, {useState} from 'react'
import "./services.css"

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>

        <div className="services__container container grid">
            {/*=====FIRST=====*/}

            <div className="services__content">
                <div>
                    <i className='uil uil-web-grid services__icon'></i>
                    <h3 className='services__title'>
                        Frontend <br /> Development
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>View More
                <i className='uil uil-arrow-right services__button-icon'></i></span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

                        <h3 className='services__modal-title'>Frontend Development</h3>
                        <p className='services__modal-description'>
                            Having more than 2+ years of experience in Frontend Development
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    I can develop scalable and high performance applications.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    I can able to work on Javascript and React seamlessly.
                                </p>
                            </li>                           

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    I can develop and implement highly responsive user interface components.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    I can build reusable components and frontend libraries for future use.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    I can translate designs and wireframes into high quality code.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    I can optimise components for maximum performance across web-capable devices and browsers.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*====SECOND=====*/}

            <div className="services__content">
                <div>
                    <i className='uil uil-server services__icon'></i>
                    <h3 className='services__title'>
                        Backend <br /> Development
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>View More
                <i className='uil uil-arrow-right services__button-icon'></i></span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

                        <h3 className='services__modal-title'>Backend Development</h3>
                        <p className='services__modal-description'>
                            Having more than 1+ years of experience in Backend Development
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    I can able to work on NodeJs, ExpressJs and MongoDB.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    I can create servers and databases for functionality.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    I can write high performance, reliable and maintainable code.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    I can write technical documentation using Swagger UI.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    I have working knowledge of Git and GitHub.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    I can able to experiment with new technologies and learn new skills on fly.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>   

            {/*=======THIRD======*/}

            <div className="services__content">
                <div>
                    <i className='uil uil-cube services__icon'></i>
                    <h3 className='services__title'>
                        Blockchain <br /> Development
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>View More
                <i className='uil uil-arrow-right services__button-icon'></i></span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

                        <h3 className='services__modal-title'>Blockchain Development</h3>
                        <p className='services__modal-description'>
                            Currently I am developing skills in blockchain technology and I am very enthusiastic to work in Blockchain domain. 
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    I have basic blockchain knowledge and its technical parameters.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    I can understand blockchain architecture and its working as a consensus, hash functioning etc.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    I have basic knowledge on Solidity and I can able to create Smart Contracts in the Ethereum blockchain.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    I have basic knowledge on NFTs, DApps, DeFi and DAOs.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    I have basic knowledge on Cryptography and P2P Networks.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>
                                    I have strong passion for blockchain technologies and willing to develop my skills.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Services