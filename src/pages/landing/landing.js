import React,{useState, useEffect} from 'react';
import SethAnimation from '../../components/lottie/seth-animation';
import awardee from '../../assets/svg/awardee.jpg'
import play from '../../assets/svg/play.svg'
import './styles.scss'
import partner1 from '../../assets/svg/1.png'
import partner2 from '../../assets/svg/2.png'
import partner3 from '../../assets/svg/3.png'
import partner4 from '../../assets/svg/4.png'
import partner5 from '../../assets/svg/5.png'
import flame from '../../assets/svg/flame.svg'
import web from '../../assets/svg/globe.svg'
import suitcase from '../../assets/svg/briefcase.svg'
import taxi from '../../assets/svg/taxi.svg'
import doctor from '../../assets/svg/doctor.svg'
import music from '../../assets/svg/music.svg'
import secure from '../../assets/svg/secure.svg'
import gradCap from '../../assets/svg/gradCap.svg'
import chart from '../../assets/svg/chart.svg'
import webinar from '../../assets/svg/lasric-live.jpeg'
import { getCMSData } from '../../api/firebase/admin/cms';

import mark from '../../assets/svg/mark.png'
import luther from '../../assets/comments/luther.png'

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';

import { Link, useNavigate } from "react-router-dom";
import Marquee from '../../components/marquee/Marquee';
import SectionHeading from '../../components/layout/SectionHeading';
import Container from '../../components/container/container';
import Offers from './offers/Offers';

import evaluation from '../../assets/offer/evaluation.jpg'
import venture from '../../assets/offer/venture.jpg'
import network from '../../assets/offer/network.jpg'
import business from '../../assets/offer/business.jpg'
import Portfolio__summary from './summary/Portfolio__summary';
import { ArrowUpRight } from 'iconoir-react';
import People from './people/People';


const Landing = () => {

    return (


        <div className="landing">

            {/* hero section */}

            <div className="homearea darkMode">

                <Container>

                    <div className="hero">

                        <div className="textArea">

                            <div className="main-text">
                                Fueling dreams, unlocking potentials & funding the <span>future of Lagos</span>
                            </div>

                            <div className="sub-text">
                                Empowering visionary entrepreneurs with the resources to transform ideas into groundbreaking businesses.
                            </div>

                        </div>
                        
                    </div>

                </Container>

                <Marquee/>

            </div>

            {/* our numbersx */}

            <section className='lasric__section'>

                <Container>

                    <SectionHeading title = "Shaping the Future of Lagos: Empowering Transformative Ideas for Lasting Impact" subtitle = "Building a resilient Lagos by empowering innovative startups with support, connections, and investment for sustainable growth." subtag = "Our Numbers" style = "light" />

                    <div className="cards__group">

                        <div className="card">
                            <p>189+</p>
                            <span> Total Number of  Funded Individuals </span>
                        </div>

                        <div className="card">
                            <p> N250m+ </p>
                            <span> Total amount funded so far combined </span>
                        </div>

                        <div className="card">
                            <p> N4.76m+ </p>
                            <span> Average amount  funded per company / idea </span>
                        </div>

                    </div>

                </Container>

            </section>

            {/* what we offer / services */}

            <section className='brand__section'>

                <Container>

                    <SectionHeading title = "Unlocking Opportunities for Startups, Innovators and Entrepreneurs Across Lagos" subtitle = "Fueling growth, innovation, and success with tailored resources, funding, and support for Lagos-based entrepreneurs." subtag = "What we offer" style = "dark" />

                   <div className="offers">

                        <Offers photo = {venture} title = "Venture Capital Funding" subtitle = "Empowering Lagos State startups and entrepreneurs with strategic venture capital funding to drive innovation, create jobs, and boost economic growth." />
                        
                        <Offers photo = {evaluation} title = "Investment Potential Evaluation" subtitle = "Providing a source of funding for companies or startups that have a high growth and social impact potential. LASRIC will invest in a no-equity interest." />

                        <Offers photo = {business} title = "Business Development and Strategy" subtitle = "Accelerating Lagos State's growth by fostering innovative business strategies, empowering entrepreneurs, and driving sustainable development through strategic initiatives." />
                        
                        <Offers photo = {network} title = "Network of Contacts and Connections" subtitle = "Fostering collaboration and innovation by connecting entrepreneurs, startups, and investors across Lagos State to accelerate growth and opportunities." />

                   </div>

                </Container>

            </section>

            {/* Portfolio Summary */}

            <div className="portfolio__summary">

                <Container>

                    <Portfolio__summary/>

                    <Link to = '/portfolio' className='sectionLinks'> View More Beneficiaries <div className="arrow__go"><ArrowUpRight/></div> </Link>

                </Container>

            </div>


            {/* Our People */}

            <div className="people">

                <Container>
                
                    <SectionHeading title = "Work with the best specialists who have the functional experience, industry knowledge and technicals expertise your project needs" subtitle = "" subtag = "Our People" style = "light extendTitle" showNavArrows = {true} link = { {status : true, url : "/people"} } target = "arrowNavScroll" />


                    {/* people 6 */}
                
                    <People/>

                </Container>
                 

            </div>

            {/* reviews */}

            <div className="lasric__section mint">

                <Container>
                
                    <SectionHeading title = "Founders Success Stories : What They Say About Us" subtitle = "" subtag = "What our founders are saying" style = "flow" showNavArrows = {true} target = "reviews" />
                
                    <div className="review__group" id = "reviews" >

                        <div className="review__card">
                            
                            <div className="quotes"><img src={mark} alt="marks" /></div>

                            <div className="comment">LASRIC believes in growing modern startups to scale, pricepally benefits from this belief...</div>

                            <div className="author">

                                <div className="author__name">
                                    <p>Luther Lawoyin</p>
                                    <span>CEO, Pricepally</span>
                                </div>

                                <div className="author__photo">
                                    <img src={luther} alt="" />
                                </div>

                            </div>

                        </div>

                        <div className="review__card">
                            
                            <div className="quotes"><img src={mark} alt="marks" /></div>

                            <div className="comment">LASRIC believes in growing modern startups to scale, pricepally benefits from this belief...</div>

                            <div className="author">

                                <div className="author__name">
                                    <p>Luther Lawoyin</p>
                                    <span>CEO, Pricepally</span>
                                </div>

                                <div className="author__photo">
                                    <img src={luther} alt="" />
                                </div>

                            </div>

                        </div>

                        <div className="review__card">
                            
                            <div className="quotes"><img src={mark} alt="marks" /></div>

                            <div className="comment">LASRIC believes in growing modern startups to scale, pricepally benefits from this belief...</div>

                            <div className="author">

                                <div className="author__name">
                                    <p>Luther Lawoyin</p>
                                    <span>CEO, Pricepally</span>
                                </div>

                                <div className="author__photo">
                                    <img src={luther} alt="" />
                                </div>

                            </div>

                        </div>

                        <div className="review__card">
                            
                            <div className="quotes"><img src={mark} alt="marks" /></div>

                            <div className="comment">LASRIC believes in growing modern startups to scale, pricepally benefits from this belief...</div>

                            <div className="author">

                                <div className="author__name">
                                    <p>Luther Lawoyin</p>
                                    <span>CEO, Pricepally</span>
                                </div>

                                <div className="author__photo">
                                    <img src={luther} alt="" />
                                </div>

                            </div>

                        </div>

                        <div className="review__card">
                            
                            <div className="quotes"><img src={mark} alt="marks" /></div>

                            <div className="comment">LASRIC believes in growing modern startups to scale, pricepally benefits from this belief...</div>

                            <div className="author">

                                <div className="author__name">
                                    <p>Luther Lawoyin</p>
                                    <span>CEO, Pricepally</span>
                                </div>

                                <div className="author__photo">
                                    <img src={luther} alt="" />
                                </div>

                            </div>

                        </div>

                    </div>

                </Container>


            </div>
            
            

        </div>


    );
}

export default Landing;
