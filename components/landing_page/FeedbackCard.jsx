import Image from 'next/image'
import { quotes } from '../../assets'

const FeedbackCard = ({ content, title, name, img }) => (
  <div className='flex flex-col justify-between py-12 px-10 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
    <Image src={quotes} alt="double_quotes" width={42} height={27} className='object-contain' />
    <p className='font-poppins font-normal text-[18px] text-white leading-[32px] my-10'>
      {content}
    </p>

    <div className='flex flex-row'>
      <Image src={img} alt="name" width={48} height={48} className='rounded-full' />
      <div className='flex flex-col ml-4'>
        <h4 className='font-poppins font-semibold text-white text-[20px] leading-[32px]'>
          {name}
        </h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
          {title}
        </p>
      </div>
    </div>
  </div>
)

export default FeedbackCard