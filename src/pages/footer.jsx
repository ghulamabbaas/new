import React from 'react'
import './style.css';

function footer() {
  return (
    <div className='footer'>
        <div className='xl:container mx-5 md:mx-auto'>
            <div className='grid grid-cols-12 gap-y-5 justify-start'>
                <div className='col-span-12 md:col-span-6 font-bold text-xl md:order-1 order-2'>
                    <p>Copyright reserved 2022</p>
                </div>
                <div className='col-span-12 md:col-span-6 md:text-right text-lg font-normal md:order-2 order-1'>
                    <ul>
                    <li><span>E-Mail:</span> ghulam.abbas09988@gmail.com</li>
                        <li><span>Cell #:</span> 0311-4012217 || 0320-8412641</li>
                        <li><a href='https://pk.linkedin.com/in/ghulam-abbas-b405981ab' className='text-deco'><span>Linkedin:</span> ghulamabbas</a></li>
                        <li><span>City:</span> LAHORE</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer