import React from 'react';


const Sidebar = () => {
  return (
      <div className='iconbar'>
        <div className='logo'><i class="fa-duotone fa-m"></i></div>

        <div>
          <div >
            <div className='icons'>
            <i class="fa-sharp fa-solid fa-plus"></i>
              <div className='label'>NEW</div>
            </div>
            <div className='icons'>
            <i class="fa-regular fa-user"></i>
              <div className='label'>PATIENT</div>
            </div>
            <div className='icons'>
            <i class="fa-regular fa-folder-open"></i>
              <div className='label'>FOLDER</div>
            </div>
            <div className='icons'>
            <i class="fa-solid fa-file-arrow-up"></i>
              <div className='label'>UPLOAD</div>
            </div>
            <div className='icons' >
           
              <div className='label'>REPORT</div>
            </div>
            <div className='icons'>
            <i class="fa-solid fa-gear"></i>
             <div className='label'> SETTING</div>
            </div>
            <div className='icons' >
            <i class="fa-solid fa-right-from-bracket"></i>
             <div className='label'> LOGOUT</div>
            </div>
            
            
          </div>
          
            </div>
          </div>
       
  )
};

export default Sidebar;