import React from 'react'

const Cardtop = (props) => {
  return (
    <>
    <div className='card'>
     
        <p className='types'>{props.title}</p>
        <p className='details'>{props.value}</p>
        
    </div>
    </>
  )
};

export default Cardtop;