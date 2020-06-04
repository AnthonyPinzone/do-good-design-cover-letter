import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faPhoneAlt, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faLinkedinIn, faCodepen } from '@fortawesome/free-brands-svg-icons';

const PageFooter = () => (
    <footer id="footer" className="page-footer">
        <div className="container">
            <section className="thank-you">
                <h3>Thank you!</h3>
                <p>I really appreciate you taking the time to read through my responses. I look forward to chatting more about the role.</p>
            </section>
            <section className="contact-info">
                <h3>Let's chat</h3>
                <ul className="contact-info-list">
                    <li className="contact-info-list--portfolio">
                        <a href="http://www.anthonypinzone.online">
                            <FontAwesomeIcon icon={faBriefcase} />{" "}
                            Portfolio
                        </a>
                    </li>
                    <li className="contact-info-list--phone">
                        <a href="tel:2019824517">
                            <FontAwesomeIcon icon={faPhoneAlt} />{" "}
                            201.982.4517
                        </a>
                    </li>
                    <li className="contact-info-list--email">
                        <a href="mailto:anthonyjpinzone@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} />{" "}
                            anthonyjpinzone@gmail.com
                        </a>
                    </li>
                </ul>
            </section>
            <section className="external-links">
                <h3>On the web</h3>
                <ul className="external-links-list">
                    <li className="external-links-list--linked-in">
                        <a href="https://www.linkedin.com/in/anthonyjpinzone/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} />{" "}
                            LinkedIn
                        </a>
                    </li>
                    <li className="external-links-list--github">
                        <a href="https://github.com/AnthonyPinzone" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithubAlt} />{" "}
                            Github
                        </a>
                    </li>
                    <li className="external-links-list--codepen">
                        <a href="https://codepen.io/the1andonlypz" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faCodepen} />{" "}
                            Codepen
                        </a>
                    </li>
                    <li className="external-links-list--codesandbox">
                        <a href="https://codesandbox.io/u/AnthonyPinzone" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGlobe} />{" "}
                            Codesandbox
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    </footer>
);

export default PageFooter;