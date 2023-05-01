import Image from 'next/image';
import { discount, robot, welcoming } from '../../assets';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section className='flex md:flex-row flex-col sm:py-16 py-6'>
      <div className='flex flex-1 items-start justify-center flex-col xl:px-0 sm:px-16 px-6'>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image src={discount} alt='discont' width={32} height={32}/>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2">
            <span className='text-white'>100%</span> Insurance for {' '}
            <span className='text-white'>Your Annual</span> Premium
          </p>
        </div>
                
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Reliable <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Insurance</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          For Your Health.
        </h1>
        <p className= "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
            Our experienced team of professionals is committed to delivering personalized
            service and expert guidance to help you navigate the complex world 
            of healthcare insurance.
        </p>
      </div>

      <div className='flex-1 flex items-center justify-center md:my-0 my-10 relative'>
        <Image src="/undraw_welcoming_re_x0qo.svg" alt='welcoming' fill className='relative z-[5]'/>
      </div>

      <div className='ss:hidden flex justify-center items-center'>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero