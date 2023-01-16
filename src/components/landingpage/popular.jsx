import React from 'react'
import { useMediaQuery } from 'react-responsive'

//assets
import anchorlogo from '../../assets/anchor round.png'
import iground from '../../assets/Instagram round.png'

const popular = () => {
  return (
    <div style={{backgroundColor:"#fff9ea"}} className="max-h-fit whitespace-normal pb-32">
      <div className="flex justify-center text-6xl pt-20">
        <p style={{color:"#0e34b0 "}}>#Our<span style={{color:"#ed6a55"}}> Popular </span>Categories</p>
      </div>
      <div className="flex justify-center pt-20 space-x-10 w-auto h-80">
        <p style={{color:"#0e34b0"}} className="pt-32 text-4xl">Desain Grafis</p>
        <img src={anchorlogo} />
        <img src={iground} />
        <p style={{color:"#0e34b0"}} className="pt-32 text-4xl">Social Media</p>
      </div>
    </div>
  )
}

export default popular