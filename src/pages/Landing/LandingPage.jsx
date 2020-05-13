import React from 'react'
import styled from 'styled-components'
import '../Landing/Landing.css'



const Section = styled.section`
    backgroundPosition: center;
    height: 100vh;
    background: url(https://images.unsplash.com/photo-1589399517461-e1950832ad70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80);
    background-size: cover;
  `;


export default function LandingPage() {
    return (
        
            <Section>
                <h1>Welcome to FORE!-card</h1>
            </Section>
        
    )
}
