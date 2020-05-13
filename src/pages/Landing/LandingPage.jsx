import React from 'react'
import styled from 'styled-components'
import '../Landing/Landing.css'
    
const Page = styled.div`
    height: 95vh;
    width: 100vw;
    background: url(https://images.unsplash.com/photo-1546085879-f751cef230ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60);
    background-size: cover;
`;

export default function LandingPage() {
    return ( 
        <Page>   
            <section>
                <h1>Welcome to FORE!-card</h1>
            </section>
        </Page>
    )
}
