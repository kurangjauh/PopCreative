import React from 'react'
import { Helmet } from 'react-helmet'

//Asset
import headbar from './assets/Header(Mirror).png'
import poplogo from './assets/Logo Pop White.png'
import teampop from './assets/Team.png'

const home = () => {
  return (
    <div className="home">
        <Helmet>
            <title>Pop Creative</title>
        </Helmet>
            <img src={headbar} className="image-border"/>
            <p class="text-left pl-4">Home | We're Project | Package | Service | Clients | About Us</p>
            <img src={poplogo} className="logo"/>
            <img src={teampop} class="w-1/2 h-full"/>
            <p>Hi,</p>
            <p>We are friends now</p>
            <p>@popcreativelabs</p>
    </div>
  )
}

export default home