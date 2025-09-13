import React from 'react'
import './Services.css'
import service_data from '../../assets/services-data.js'


const Services = () => {
  console.log(service_data)
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        {/* <img src={theme_pattern} alt="theme_pattern" /> */}

      </div>
      <div className="services-container">
        {service_data.map((service,index)=>{
          return <div key={index} className='services-format'>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore">
              <p>Read More</p>
               <span style={{ fontSize: "24px" }}>→</span> {/* Right arrow */}
              {/* <img src={right_arrow} alt="right_arrow" /> */}
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services