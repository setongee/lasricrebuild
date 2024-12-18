import React, { useState , useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './blogView.scss'
import Container from '../../components/container/container';
import { ArrowLeft } from 'iconoir-react';
import blog1 from '../../assets/blog/blog1.jpg'
import blog2 from '../../assets/blog/blog2.jpg'
import blog3 from '../../assets/blog/blog3.jpg'
import blog4 from '../../assets/blog/blog4.jpg'

export default function BlogView() {

    const {id} = useParams();
    const navigate = useNavigate();

    const [sub_data, setSub_data] = useState([])
    
    const navigateBack = () => {

        navigate(-1);

    }


  return (
    
    <div className="view_news">

        <Container>

            <div className="overhold flex">

                <div className="news_container">

                    <div className="back_to_news" onClick = { () => navigateBack() } > <ArrowLeft/> </div>

                    <div className="current_news">

                        <div className="dateNow"> 
                            
                            <div className="firstPart flex">

                                Mon. 16th Dec. 2024

                                <p>-</p>

                                <div className="readtime"> 
                                   3 Mins Read  
                                </div>

                            </div>
                        
                        </div>

                        <div className="current_news_title">
                            Unpacking Venture Economics: Insights into Startup Funding and Growth
                        </div>    

                        <div className="current_news_image">
                            <img src={blog1} alt="" />
                        </div>                

                        <div className="current_news_body" id='text'>

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, unde et. Quae suscipit tempore inventore alias nobis. Obcaecati asperiores rerum nisi commodi provident. Sint rerum beatae aspernatur eligendi maxime cumque, optio quod dolorum doloribus officiis. 
                            
                            {<br></br>}{<br></br>}

                            Tempore earum necessitatibus quis similique. Maxime, neque in dolor voluptates error facilis suscipit culpa libero nesciunt natus sequi blanditiis, sapiente doloremque itaque numquam dolorum possimus, cupiditate mollitia inventore corporis dicta saepe fuga consequatur quibusdam? Atque pariatur in veritatis, ratione dolorem, ducimus facere ipsam fuga nisi reiciendis officiis, iste impedit perferendis sequi sed! Qui atque ad dolorem odio sed natus expedita, assumenda accusantium libero esse quod?

                            {<br></br>}{<br></br>}

                            Tempore earum necessitatibus quis similique. Maxime, neque in dolor voluptates error facilis suscipit culpa libero nesciunt natus sequi blanditiis, sapiente doloremque itaque numquam dolorum possimus, cupiditate mollitia inventore corporis dicta saepe fuga consequatur quibusdam? Atque pariatur in veritatis, ratione dolorem, ducimus facere ipsam fuga nisi reiciendis officiis.

                            {<br></br>}{<br></br>}

                            Tempore earum necessitatibus quis similique. Maxime, neque in dolord, cupiditate mollitia inventore corporis dicta saepe fuga consequatur quibusdam? Atque pariatur in veritatis, ratione dolorem, ducimus facere ipsam fuga nisi reiciendis officiis.
                            
                        </div>

                    </div>

                </div>

                <div className="sub_news_container">

                    <div className="title__sub__news">
                        <p>Other Related Topics </p>
                    </div>

                    <div className="sub__news__data">

                        <a className="subs_news" href="">

                            <div className="sub__image"><img src = {blog2} alt="" /></div>
                            <div className="sub__title flex"> 
                                The Role of LASRIC in Advancing Digital Transformation Across Sectors
                                <div className="date">Mon. 13th Dec. 2024</div>
                            </div>

                        </a>

                        <a className="subs_news" href="">

                            <div className="sub__image"><img src = {blog3} alt="" /></div>
                            <div className="sub__title flex"> 
                                The Role of LASRIC in Advancing Digital Transformation Across Sectors
                                <div className="date">Mon. 13th Dec. 2024</div>
                            </div>

                        </a>

                        <a className="subs_news" href="">

                            <div className="sub__image"><img src = {blog4} alt="" /></div>
                            <div className="sub__title flex"> 
                                The Role of LASRIC in Advancing Digital Transformation Across Sectors
                                <div className="date">Mon. 13th Dec. 2024</div>
                            </div>

                        </a>

                        <a className="subs_news" href="">

                            <div className="sub__image"><img src = {blog1} alt="" /></div>
                            <div className="sub__title flex"> 
                                The Role of LASRIC in Advancing Digital Transformation Across Sectors
                                <div className="date">Mon. 13th Dec. 2024</div>
                            </div>

                        </a>

                        <a className="subs_news" href="">

                            <div className="sub__image"><img src = {blog3} alt="" /></div>
                            <div className="sub__title flex"> 
                                The Role of LASRIC in Advancing Digital Transformation Across Sectors
                                <div className="date">Mon. 13th Dec. 2024</div>
                            </div>

                        </a>

                        <a className="subs_news" href="">

                            <div className="sub__image"><img src = {blog4} alt="" /></div>
                            <div className="sub__title flex"> 
                                The Role of LASRIC in Advancing Digital Transformation Across Sectors
                                <div className="date">Mon. 13th Dec. 2024</div>
                            </div>

                        </a>

                    </div>

                </div>

            </div>

        </Container>

    </div>

  )
}
