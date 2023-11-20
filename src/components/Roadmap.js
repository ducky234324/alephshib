import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Roadmap = () => {
    

    return (
        <div id='roadmap' className='about-section dark_bg' >
            <Container data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <div className='text-center'>
                    <h3 className='section-title text-white'>Roadmap</h3>
                </div>
                <Row>
                    <Col md={4} className='mb-4'>
                        <div className='section-inner section-card' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <div className='w-100'>
                                <h4 className='text-white'>Phase 1</h4>
                                <ul type='disc'>
                                    <li className='text-white'>Website Launch</li>
                                    <li className='text-white'>Create social media</li>
                                    <li className='text-white'>Token launch</li>
                                    <li className='text-white'>Vesting teamtoken</li>
                                    <li className='text-white'>Start marketing campaigns</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <div className='section-inner section-card' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <div className='w-100'>
                                <h4 className='text-white'>Phase 2</h4>
                                <ul type='circle'>
                                    <li className='text-white'>200 Holders</li>
                                    <li className='text-white'>Social Media competitions &amp; rewards</li>
                                    <li className='text-white'>Project Collaborations</li>
                                    <li className='text-white'>Token Airdrops</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <div className='section-inner section-card' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                            <div className='w-100'>
                                <h4 className='text-white'>Phase 3</h4>
                                <ul type='circle'>
                                    <li className='text-white'>Rewards activation</li>
                                    <li className='text-white'>Social media expansion</li>
                                    <li className='text-white'>Coinmarketcap Listing </li>
                                    <li className='text-white'>Coingecko Listing</li>
                                    <li className='text-white'>Big surprise</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default Roadmap
