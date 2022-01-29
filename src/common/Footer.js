import React, { Component } from 'react'
import logo from '../assets/images/synrise.png'
export class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className="container">
                    <div className="row pt-60">
                        <div className='col-lg-4 col-md-4'>
                            <div className="footer-desc">
                                <a class="navbar-brand logo" href="/">
                                    <img src={logo} alt="logo" />&nbsp;&nbsp;
                                    <span className='logoname'>Synvise</span>
                                </a>
                                <p className='para'>Leading Software Solutions Provider <br></br> Company in India. <a href='#about_us' className='text-color'>Read more</a> </p>
                                <div className="social_icon">
                                    <ul>
                                        <li><a href="https://www.facebook.com/Synvise-Infotech-105839175337384"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://www.instagram.com/synviseinfotech/"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="https://www.linkedin.com/company/synvise-infotech/"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="https://twitter.com/synvise"><i class="fab fa-twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-4'>
                            <div className="links">
                                <h5>Quick Links</h5>
                                <ul>
                                    <li><a href="#about_us"> About Us</a></li>
                                    <li><a href="#services"> Services</a></li>
                                    <li><a href="#team"> Team</a></li>
                                    <li><a href="#contact"> Contact</a></li>
                                    <li><a href="#blog"> Blog</a></li>
                                </ul>
                            </div>
                        </div>


                        <div className='col-lg-4 col-md-4'>
                            <div className="address">
                                <h5>Our Address</h5>
                                <p><span><i class="fas fa-phone-alt"></i></span>&nbsp; 8909433333, +447393679043 (UK)</p>
                                <p><span><i class="fas fa-map-marker-alt"></i></span>&nbsp;G-4 sukhmani plaza Amitesh nagar A.B road Indore</p>
                                <p><span><i class="far fa-envelope"></i></span>&nbsp; Synviseinfotech@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className='col-md-12 col-sm-12'>
                            <p className='text-center'>© 2022 Synvise. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
