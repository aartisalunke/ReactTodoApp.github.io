import React from 'react'

const Subsidebar = () => {
  return (
    <>
    <div>    <div className='profile'>
        <div className='img'>
           <image src=""  alt="photo"/>
        </div>
        <h3 className='name'>Diane Cooper</h3>
        <p className='email'>dianacooper@example.com</p>
        <div className='followers'>
        <div>
            <span>15</span>
            <div className='info'>past</div>
        </div>
        <div>
            <span>02</span>
            <div className='info'>upcoming</div>
        </div>
       </div>
       <div className='btn'>
                  <button>Send Message</button>
         </div>

        

      <div>
        <h6>File/Document</h6>

        <ui className="list-group">
        <li className="list-group-item"><i class="fa-regular fa-file-lines"></i>
        Check up result.pdf</li>
        <li className="list-group-item"><i class="fa-regular fa-file-lines"></i>
        Check up result.pdf</li>
        <li className="list-group-item"><i class="fa-regular fa-file-lines"></i>
        Medical Prescription.pdf</li>
        <li className="list-group-item"><i class="fa-regular fa-file-lines"></i>
        Dental X-ray result.pdf</li>

        </ui>
        </div>   

        
    </div>
    </div>

    </>
  );
};

export default Subsidebar;