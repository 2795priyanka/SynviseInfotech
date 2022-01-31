import React, { Component } from 'react'
import logo from '../assets/images/synrise.png'
import { HashLink as Link } from 'react-router-hash-link';
export class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className="container">
                    <div className="row pt-60">
                        <div className='col-lg-3 col-md-3'>
                            <div className="footer-desc">
                                <a class="navbar-brand logo" href="/">
                                    <img src={logo} alt="logo" />&nbsp;&nbsp;
                                    <span className='logoname'>Synvise</span>
                                </a>
                                <p className='para'>Leading Software Solutions Provider <br></br> Company in India. <Link smooth to='#about_us' className='text-color'>Read more</Link> </p>
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

                        <div className='col-lg-2 col-md-2'>
                            <div className="links">
                                <h5>Quick Links</h5>
                                {/* <ul>
                                    <li><Link smooth to="#about_us"> About Us</Link></li>
                                    <li><Link smooth to="#services"> Services</Link></li>
                                    <li><Link smooth to="#team"> Team</Link></li>
                                    <li><Link smooth to="#contact"> Contact</Link></li>
                                    <li><Link smooth to="#blog"> Blog</Link></li>
                                </ul> */}

                                <p><Link smooth to="#about_us"> About Us</Link></p>
                                <p><Link smooth to="#services"> Services</Link></p>
                                <p><Link smooth to="#team"> Team</Link></p>
                                <p><Link smooth to="#contact"> Contact</Link></p>
                                <p><Link smooth to="#blog"> Blog</Link></p>

                            </div>
                        </div>


                        {/* <div className='col-lg-5 col-md-4'>
                            <div className="address">
                                <h5 className=''>Our Address</h5>
                                <p><span><i class="fas fa-phone-alt"></i></span>&nbsp; 8909433333(India) , +447393679043 (UK)</p>
                                <p><span><i class="fas fa-map-marker-alt"></i></span>&nbsp;G-4 sukhmani plaza Amitesh nagar A.B road Indore (India) <br/>
                               <span className=''> 25.20 A, Chapters Spitalfields, 9 Frying Pan Alley, London, United Kingdom, E17HS (UK)</span>
                                </p>
                                <p><span><i class="far fa-envelope"></i></span>&nbsp; Synviseinfotech@gmail.com</p>
                            </div>
                        </div> */}
                        <div className='col-lg-7 col-md-7'>
                            <div className="address">
                                <h5 className=''>Our Address</h5>
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <h6>(India)</h6>
                                  
                                       <p><span><i class="fas fa-phone-alt"></i></span>&nbsp; 8909433333</p>
                                        <p><span><i class="fas fa-map-marker-alt"></i></span>&nbsp;G-4 sukhmani plaza Amitesh nagar A.B road Indore </p>
                                        <p><span><i class="far fa-envelope"></i></span>&nbsp; Synviseinfotech@gmail.com</p>
                                     
                                    </div>
                                    <div className="col-md-6">
                                        <h6>(UK)</h6>
                                        <p><span><i class="fas fa-phone-alt"></i></span>&nbsp; +447393679043 </p>
                                        <p><span><i class="fas fa-map-marker-alt"></i></span>&nbsp;
                                            25.20 A, Chapters Spitalfields, 9 Frying Pan Alley, London, United Kingdom, E17HS </p>
                                        <p><span><i class="far fa-envelope"></i></span>&nbsp; Synviseinfotech@gmail.com</p>
                                    </div>
                                </div>
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
