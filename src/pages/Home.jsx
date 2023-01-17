import React from 'react'
import Landing from '../components/Landing'
import HighLights from '../components/HighLights'
import Featured from '../components/Featured'
import Discounted from '../components/Discounted'
import Explore from '../components/Explore'

const Home = () => {
    return (
        <>
        <Landing />
        <HighLights />
        <Featured />
        <Discounted />
        <Explore />
        </>
    )
}

export default Home

