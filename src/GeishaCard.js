import React from 'react'
import './App.css'

export default function GeishaCard(props) {
  return (
    <div 
        style={{backgroundColor: props.color}}
    >
        <span>{props.charmPoints}</span>
        <span>{props.vpStatus}</span>
    </div>
  )
}
