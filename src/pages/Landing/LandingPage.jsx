import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import '../Landing/Landing.css'
    
const Page = styled.div`
    height: 100vh;
    width: 100vw;
    background: url(https://images.unsplash.com/photo-1546085879-f751cef230ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60);
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Button = styled(Link)`
  margin: 1rem;
  padding: 0.5rem 2rem 0.5rem 2rem;
  font-size: 1.3rem;
  background: white;
  border: 1px solid blue;
  border-radius: 100px;
  text-decoration: none;
  color: green;
`;

export default function LandingPage() {
    return ( 
        <Page>   
            <h1>Welcome to FORE!-card</h1>
            <section>
                <div className="btn-container">
                    <Button to="/signup">Sign up</Button>
                    <Button to="/login">Log in</Button>
                </div>
            </section>
        </Page>
    )
}
