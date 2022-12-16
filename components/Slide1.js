import React from 'react'
import slide1 from '../components/image/i1.png'
import Image from 'next/image';

export default function Carousel() {
    return (
      <>
        <div className='max-w-7xl mx-auto flex-row'>
    
            <div class="w-1/2">
                <h3>TUROG Technologies is a digital transformation company</h3>
                  <p>TUROG Technologies is a digital transformation company that<br/>
                  helps companies navigate the ever-evolving digital landscape and<br/> 
                  create successful strategies for their businesses.</p>  
                  <a
                  href="#"
                  className="flex w-full hovs items-center justify-center rounded-md border bg-gradient-to-r from-red-500 to-orange-500  px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Get Started Today
                </a>

            </div>
            <div class="w-1/2">
                <Image className="" src={slide1.src} alt="" width={100} height={100}/>
            </div>
    
    </div>
      </>
    );
  }