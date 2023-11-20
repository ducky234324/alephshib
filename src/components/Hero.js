import React from 'react'
import Navigation from './Navigation'
import { Container, Row, Col } from 'react-bootstrap'
import dusties from '../images/dusties.png'
import dustiessmall from '../images/dusties_small.png'
// import artzero from '../images/alephshib-artzero.svg'
// import dextools from '../images/dextools.webp'
// import cmc from '../images/cmc.webp'
// import coingecko from '../images/coingecko.webp'

const Hero = () => {
    return (
        <div className='hero-section'>
            <Navigation />
            <div className='hero-inner'>
                <Container>
                    <Row>
                        <Col md={7} id='first'>
                            <div className="hero-left" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                                <div className="">
                                    <div className="mb-3">
                                        <h1 className="hero-title">DUSTIES</h1>
                                    </div>
                                    <Row>
                                        <Col md={9}>
                                            <p className="hero-text">Redefining Passive Income in DeFi</p>
                                            <div className='d-flex pt-3 btns-mobile-center'>
                                                <a href='https://jup.ag' target='_blank' rel="noreferrer" className="buy-now-btn hvr-back-pulse me-3">
                                                    Buy Dusties
                                                </a>
                                                <div className="buy-now-btn hvr-back-pulse">
                                                <a href='https://birdeye.so' target='_blank' rel="noreferrer" className="buy-now-btn hvr-back-pulse me-3">
                                                    Chart
                                                </a>    
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>

                        </Col>
                        <Col md={5} id='second'>
                            <div className="landing-hero-img" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                                <img src={dusties} alt='logo' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='d-flex justify-content-center brands mb-3'>
                <img src={dustiessmall} className='' alt='dusties' />
                {/* <img src={artzero} className='' alt='artzero' /> */}
                {/* <img src={dextools} className='' alt='logo' /> */}
                {/* <img src={cmc} className='' alt='logo' /> */}
                {/* <img src={coingecko} className='' alt='logo' /> */}
            </div>
        </div>
    )
}

export default Hero
