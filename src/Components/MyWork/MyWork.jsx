import React from 'react'
import './MyWork.css'

import myworkData from "../../assets/mywork_data.js";
const MyWork = () => {
  console.log("myworkData",myworkData)
  return (
    <div id='work' className="mywork">
        <div className="mywork-title">
            <h1>My latest work</h1>
         
        </div>
        <div className="mywork-container">
             {myworkData.map((work,index) => (
       
          <img key={index} src={work.w_img} alt={work.w_name} />
       
      ))}
        </div>
        <div className="mywork-showmore">
          <p>Show More</p>
           <span style={{ fontSize: "24px" }}>→</span> {/* Right arrow */}
        </div>
    </div>
  )
}

export default MyWork