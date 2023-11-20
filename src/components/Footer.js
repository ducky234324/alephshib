import React from 'react'
import { Container } from 'react-bootstrap'
import telegram from '../images/icons/telegram.svg'
import twitter from '../images/icons/twitter.svg'

const Footer = () => {
    return (
        <div>
            <div className='text-center'>
                <Container>
                    <div className="d-flex justify-content-center mt-5 mb-3">
                        
                            <div className="circle">
                                <img src={telegram}
                                    alt="dusties telegram"
                                />
                            </div>
                        
                        <a href="http://twitter.com/dusties_coin" target="_blank" rel="noreferrer">
                            <div className="circle">
                                <img
                                    src={twitter}
                                    alt="dusties twitter"
                                />
                            </div>
                        </a>
                    </div>
                    <div className='mb-5'>
                        <a href='mailto:help@dusties.com' className='mail'>help@dusties.com</a>
                    </div>
                </Container>
            </div>
            <footer>
                <p className='mb-0'>Copyright © 2023 Dusties Coin. All Rights Reserved</p>
            </footer>
        </div>
    )
}

export default Footer
