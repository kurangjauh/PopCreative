import React from 'react'

//asset
import anchorlogo from './assets/anchor round.png'
import iground from './assets/Instagram round.png'

const popular = () => {
  return (
    <div className="popular">
        <p class="pt-3">#Our Popular Categories</p>
        <p class="pt-3">Desain Grafis</p>
        <img src={anchorlogo}></img>
        <img src={iground}></img>
        <p class="pt-3">Social Media</p>
    </div>
  )
}

export default popular