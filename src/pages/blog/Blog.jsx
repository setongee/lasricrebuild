import React from 'react'
import './blog.scss'

import Container from '../../components/container/container'
import blog1 from '../../assets/blog/blog1.jpg'
import blog4 from '../../assets/blog/blog4.jpg'
import blog2 from '../../assets/blog/blog3.jpg'
import { useNavigate } from 'react-router-dom'

export default function Blog() {

let navigate = useNavigate()

  return (
    
    <div className="blog pageBrief">

        <Container>

            <div className="blog__heading headers">
                <p>Discover Trends, Expert Tips, and Strategies for Growth</p>
            </div>

            <div className="blogBody">

                <div className="blog__item" onClick={ () => navigate('/blog/dhf92ahchbcyeyefq') }>

                    <div className="text__content">

                        <div className="author"> 
                            <p>AP</p> 
                            <span>Adedeji Popoola</span>
                        </div>

                        <div className="blog__title"> Unpacking Venture Economics: Insights into Startup Funding and Growth </div>
                        <div className="blog__subtitle"> Explore venture economics: funding strategies, investor dynamics, scaling businesses, and insights for startup... </div>

                    </div>

                    <div className="blog__photo"> 
                        <img src={blog1} alt="" /> 
                    </div>

                </div>

                <div className="blog__item" onClick={ () => navigate('/blog/dhf92ahchbcyeyefq') }>

                    <div className="text__content">

                        <div className="author"> 
                            <p> EA </p> 
                            <span> Eniola Amosu </span>
                        </div>

                        <div className="blog__title"> The Role of LASRIC in Advancing Digital Transformation Across Sectors </div>
                        <div className="blog__subtitle"> Explore venture economics: funding strategies, investor dynamics, scaling businesses, and insights for startup... </div>

                    </div>

                    <div className="blog__photo"> 
                        <img src={blog4} alt="" /> 
                    </div>

                </div>

                <div className="blog__item" onClick={ () => navigate('/blog/dhf92ahchbcyeyefq') }>

                    <div className="text__content">

                        <div className="author"> 
                            <p> GY </p> 
                            <span> Ganiu Yusuff </span>
                        </div>

                        <div className="blog__title"> Cracking the Code: How to Achieve and Validate Product-Market Fit </div>
                        
                        <div className="blog__subtitle"> Explore venture economics: funding strategies, investor dynamics, scaling businesses, and insights for startup... </div>

                    </div>

                    <div className="blog__photo"> 
                        <img src={blog2} alt="" /> 
                    </div>

                </div>

                <div className="blog__item" onClick={ () => navigate('/blog/dhf92ahchbcyeyefq') }>

                    <div className="text__content">

                        <div className="author"> 
                            <p> GY </p> 
                            <span> Ganiu Yusuff </span>
                        </div>

                        <div className="blog__title"> Cracking the Code: How to Achieve and Validate Product-Market Fit </div>
                        
                        <div className="blog__subtitle"> Explore venture economics: funding strategies, investor dynamics, scaling businesses, and insights for startup... </div>

                    </div>

                    <div className="blog__photo"> 
                        <img src={blog2} alt="" /> 
                    </div>

                </div>

                <div className="blog__item" onClick={ () => navigate('/blog/dhf92ahchbcyeyefq') }>

                    <div className="text__content">

                        <div className="author"> 
                            <p> GY </p> 
                            <span> Ganiu Yusuff </span>
                        </div>

                        <div className="blog__title"> Cracking the Code: How to Achieve and Validate Product-Market Fit </div>
                        
                        <div className="blog__subtitle"> Explore venture economics: funding strategies, investor dynamics, scaling businesses, and insights for startup... </div>

                    </div>

                    <div className="blog__photo"> 
                        <img src={blog2} alt="" /> 
                    </div>

                </div>

                <div className="blog__item" onClick={ () => navigate('/blog/dhf92ahchbcyeyefq') }>

                    <div className="text__content">

                        <div className="author"> 
                            <p> GY </p> 
                            <span> Ganiu Yusuff </span>
                        </div>

                        <div className="blog__title"> Cracking the Code: How to Achieve and Validate Product-Market Fit </div>
                        
                        <div className="blog__subtitle"> Explore venture economics: funding strategies, investor dynamics, scaling businesses, and insights for startup... </div>

                    </div>

                    <div className="blog__photo"> 
                        <img src={blog2} alt="" /> 
                    </div>

                </div>

            </div>

        </Container>

    </div>

  )

}
