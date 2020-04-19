import React from 'react'
import '../Landing/Landing.css'



var sectionStyle = {
    backgroundPosition: 'center',
    height: "600px",
    marginTop: "0",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: "url(" + "/sawgrass-e1552519748368.jpg" + ")"
  };


export default function LandingPage() {
    return (
        
            <section style={ sectionStyle }>
                <h1>Welcome to FORE!-card</h1>
            </section>
        
    )
}
