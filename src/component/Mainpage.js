import React from 'react'
import Sidebar from './Sidebar';
import Subsidebar from './Subsidebar';
import Rightsidesection from './Rightsidesection';
const Mainpage = () => {
  return (
    <>
     <div className="container">
  <div className="row">
               {/* left side bar */}
    <div className="col-md-4">
      <div className='row'>
          <div className='col-md-2'><Sidebar/></div>
         
          <div className='col-md-10'><Subsidebar/></div>
      </div>
    </div>
               {/* right side section */}
    <div className="col-md-8">
      
     < Rightsidesection/>
     
    </div>

</div>
</div>
    </>
  );
};

export default Mainpage;