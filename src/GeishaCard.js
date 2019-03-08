import React from 'react'

export default function GeishaCard(props) {
  return (
    <div 
        style={{backgroundColor: props.color}}
    >
        <p className="charm-points">{props.charmPoints}</p>
        <p className="vp-status">{props.vpStatus}</p>
    </div>
  )
}
