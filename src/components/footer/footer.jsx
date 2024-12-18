import React from 'react';
import './footer.scss'
import { Link, useLocation } from 'react-router-dom';

import LasricLogo from '../../assets/svg/logo__lasric.svg'
import Container from '../container/container';import FaqSection from '../faq/FaqSection';
import GetStartedSection from '../started/GetStartedSection';
import BlogSection from '../blog/BlogSection';
import NewsletterSection from '../newsletter/NewsletterSection';


const Footer = () => {

    const {pathname} = useLocation();
    let dir = pathname.split('/')[1];

    return (

        <div className={`footer__prime client_${pathname.split('/')[1]}`}>

            {
                dir !== 'contact' ?

                (
                    <>

                        <FaqSection/>
                        <GetStartedSection/>
                        <BlogSection/>
                        <NewsletterSection/>
                    
                    </>

                ) : null

            }

            <Container>

                <div className='footer'>

                    <div className="top__footer border__below">

                        <div className="links-footer">

                            <Link to = '/about'> About Us </Link>
                            <Link to = '/people'> Portfolio </Link>
                            <Link to='/apply'> Blog </Link>
                            <Link to = '/login'> Support </Link>
                            <Link to = '/register' className='active__footer' > Register </Link>

                        </div>

                        <div className="links-footer social">

                            <Link to = '/about'> <i className="fi fi-brands-linkedin"></i> </Link>
                            <Link to = '/people'> <i className="fi fi-brands-facebook"></i> </Link>
                            <Link to='/apply'> <i className="fi fi-brands-twitter-alt-circle"></i> </Link>

                        </div>

                    </div>

                    <div className="top__footer bottom__padding bottom__fix">

                        <p>© 2024 Powered by <strong>MIST</strong> </p>

                        <a href = '/' className="logo-foot"> <img src={LasricLogo} alt="lasric-logo" /></a>

                        <div className="links-footer">

                            <Link to = '/login'> <strong>Login</strong> </Link>
                            <Link to = '/contact'> Contact Us </Link>

                        </div>

                    </div>
                    
                </div>

            </Container>

        </div>

    );
}

export default Footer;
