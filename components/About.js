import abtus from '../components/image/abt-us.webp'
import Image from 'next/image'
export const About = () => {
  return (
    <div className='abt-main max-w-7xl mx-auto '>
        <div id='abts-us' className='flex items-center'> 


         <div className="w-1/2">
         <Image className="" src={abtus.src} alt="Avatar" width={700} height={447} />
            
            </div>       



            <div className='w-1/2'>
            <h2 className='text-4xl font-extrabold font-Mulish mb-6'>About Us </h2>
            <p className='font-Mulish mb-2'> TUROG Technologies is a digital transformation company that helps companies navigate the ever-evolving digital landscape and create successful strategies for their businesses. </p>
            <p className='font-Mulish'>Our team of experts specialize in helping organizations maximize their digital capabilities and optimize their digital investments. We provide digital strategy consulting, custom software development, web application and mobile development, digital marketing, and cloud solutions to help companies quickly and cost-effectively realize their business objectives.</p>

            </div>

        </div>












    </div>







  )
}
