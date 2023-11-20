import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import longetivity from '../images/dusties_balance.png'
import banner from '../images/dusties_mechanics.png'
import fun from '../images/dusties_chart.png'
import community from '../images/dusties_community.png'
// import fun from '../images/fun.jpg'

const Vision = () => {
    return (
        <div id='vision' className='about-section'>
            <Container>
                <div className='text-center'>
                    <h3 className='section-title'>Vision & Values - Why you should join us</h3>
                </div>
                <Row>
                    <Col md={6} className='mb-4'>
                        <div className='section-inner' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <div>
                                <h4>Mechanics</h4>
                                <p>Dusties employs a unique distribution mechanism where transaction taxes are utilized to acquire $DUST tokens on Solana.</p>
                                <p> The acquired DUST tokens are subsequently distributed to $Dusties holders weekly, creating a continuous and predictable income stream for the community.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className='mb-4'>
                        <div className='token-image' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <img src={banner} alt='alephshib' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className='order-sm-first order-md-last order-lg-last ms-auto mb-4'>
                        <div className='section-inner' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <div>
                                <h4>Passive income</h4>
                                <p>Dusties (DUST) is the native utility token on the Solana blockchain, providing holders with a seamless and passive income generation experience. </p>
                                <p>The tokenomics of Dusties are designed to incentivize liquidity provision, community engagement, and sustainable project development.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className='mb-4'>
                        <div className='token-image' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <img src={longetivity} alt='alephshib' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className='mb-4'>
                        <div className='section-inner' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <div>
                                <h4>Tokenomics</h4>
                                <p>Liquidity Pool (LP): 70%</p>
                                <p>Airdrops: 15%</p>
                                <p>Team: 5% (subject to a vesting schedule)</p>
                                <p>Marketing: 10%</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className='mb-4'>
                        <div className='token-image' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <img src={fun} alt='alephshib' />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className='order-sm-first order-md-last order-lg-last ms-auto mb-4'>
                        <div className='section-inner' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <div>
                                <h4>Open Community</h4>
                                <p>Dusties is committed to providing tangible benefits to its community members, ensuring an inclusive and rewarding experience.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className='mb-4'>
                        <div className='token-image' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <img src={community} alt='alephshib' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Vision
