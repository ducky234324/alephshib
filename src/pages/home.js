import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Ignition from '../components/Ignition'
import Roadmap from '../components/Roadmap'
import StakingRewards from '../components/StakingRewards'
import Tokenomics from '../components/Tokenomics'
import Vision from '../components/Vision'

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Tokenomics />
            <Vision />
            <Ignition />
            <StakingRewards />
            <Roadmap />
            <Footer />
        </div>
    )
}

export default Home
