import React from 'react'
import { Container } from 'react-bootstrap'

const About = () => {
    return (
        <div id='about' className='about-section text-center' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <Container>
                <div className='content-section'>
                    <h2 className='section-title'>Mission Statement</h2>
                    <p>$DUSTIES is a pioneering SPL (Solana Program Library) token project designed to revolutionize passive income in decentralized finance. </p>
                    <p>The project introduces an innovative distribution mechanism, utilizing transaction taxes to purchase DUST tokens from the market, </p>
                    <p>which are then distributed to holders on a weekly basis.</p>
                </div>
            </Container>
        </div>
    )
}

export default About
