import React from 'react'
import './blog.scss'

// temp

import blog1 from '../../assets/blog/blog1.jpg'
import blog2 from '../../assets/blog/blog2.jpg'
import blog3 from '../../assets/blog/blog3.jpg'
import blog4 from '../../assets/blog/blog4.jpg'

export default function Blog() {

  return (
  
    <div className="blogSection" id = 'blog'>

        <div className="blog__card">

            <div className="photo"><img src={blog4} alt="" /></div>
            <p> The Role of LASRIC in Advancing Digital Transformation Across Sectors </p>
            
        </div>

        <div className="blog__card">

            <div className="photo"><img src={blog2} alt="" /></div>
            <p> Building a Winning Team: Strategies for Hiring Top Talent in Startups </p>
            
        </div>

        <div className="blog__card">

            <div className="photo"><img src={blog3} alt="" /></div>
            <p> Cracking the Code: How to Achieve and Validate Product-Market Fit </p>
            
        </div>

        <div className="blog__card">

            <div className="photo"><img src={blog1} alt="" /></div>
            <p> Unpacking Venture Economics: Insights into Startup Funding and Growth </p>
            
        </div>

    </div>

  )

}
