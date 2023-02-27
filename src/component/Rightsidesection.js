import React from 'react'
import Cardbottom from './Cardbottom';
import Cardtop from './Cardtop';
const Rightsidesection = () => {
  return (
    <>
           {/* right top card section */}
           <div className='right'>
    <div className='topCard'>
    <Cardtop title={'gender'}  value={'female'}/>
      <Cardtop title={'Birthday'}  value={'Feb 24th 1997'}/>
      <Cardtop title={'Phone Number'}  value={'(239)555-0108'}/>
      <Cardtop title={'Register Date'}  value={'Feb 24 1997'}/>
      <Cardtop title={'Street Address'}  value={'JL. Dipongoro No.21'}/>
      <Cardtop title={'City'}  value={'Cilacap'}/>
      <Cardtop title={'Zip Code'}  value={'655849'}/>
      <Cardtop title={'Member Status'}  value={'Active Member'}/>
    </div>
   
           {/* middle small single line card */}
    <div className='middleSmallCard'>
        <div className='active'>Upcoming Appoinment</div>
        <div>Past Appoinment</div>
        <div>Medical Record</div>
    </div>

    {/* bottom card section */}
    <div>
        <Cardbottom/>
    </div>
    </div>
    </>
  )
};

export default Rightsidesection;