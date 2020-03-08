import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';


export default function Footer() {
    return (
        <div>
            <div className="pFooter">
                <div className="centerPFooter">
                    <div className="startPFooter" />
                    <div className="newsletter">
                        <form>
                            <div className="emailFill">
                                <label>Subscribe to our Newsletter!</label><br></br>
                                <input type="email" className="enterEmail" placeholder="Enter email" name="Email"/><br></br>
                                <p>We'll never share your email with anyone else.</p>
                            </div>
                        </form>
                        <button className="btn">Subscribe</button>
                    </div>
                    <div className="midPFooter" />
                    <div className="desContainer">
                        <div className="innerDesContainer">
                                <span>Follow Us On:</span>
                                <a className="delink" href="https://www.facebook.com/spaceboat.in/" target="blank"><FaFacebook /></a>
                                <a className="delink" href="https://www.instagram.com/humansofspaceboat/" target="blank"><FaInstagram /></a>
                                <a className="delink" href="https://www.linkedin.com/company/spaceboatin/" target="blank"><FaLinkedin /></a>
                        </div>
                        <div className="location">
                            <h6>
                                <TiLocation/>
                                &nbsp; S-347, Block S, Panchsheel Park South, Panchsheel Park, New Delhi, Delhi 110017
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="centerFooter">
                    <div className="footerRow">
                        <div className="rooms">
                            <p className="roomHead">Classrooms</p>
                            <ul className="listStyle">
                                <li><p className="footDetails">Classrooms in Delhi</p></li>
                                <li><p className="footDetails">Classrooms in Noida, Gurgaon</p></li>
                            </ul>
                        </div>
                        <div className="rooms">
                            <p className="roomHead">Event Rooms</p>
                            <ul className="listStyle">
                                <li><p className="footDetails">Seminar Halls in Delhi NCR</p></li>
                                <li><p className="footDetails">Auditoriums Halls in Delhi NCR</p></li>
                            </ul>
                        </div>
                        <div className="rooms">
                            <p className="roomHead">Meeting Rooms</p>
                            <ul className="listStyle">
                                <li><p className="footDetails">Meeting Rooms in Delhi NCR</p></li>
                                <li><p className="footDetails">Boardrooms in Delhi NCR</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>Copyright © 2020 Spaceboat &nbsp; &nbsp; | &nbsp;&nbsp; Terms &amp; Conditions&nbsp;&nbsp;| &nbsp;&nbsp;Privacy Policy</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
