import Image from 'next/image';
import styles, { layout } from '../../style';

const DealOffer = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <Image src="/undraw_launching_re_tomg.svg" alt="launch" fill className='relative z-[5]' />
    </div>

    <div className={`md:ml-5 ${layout.sectionInfo}`}>
      <h2 className={styles.heading2}>
        Enjoy Our Top <br className="sm:block hidden" /> Deals &
        Offer
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       We offer health and wellness programs that provide resources and 
       support to help customers achieve their health goals.
      </p>
      
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We offer remote medical consultations through telemedicine 
      services, we use live chat app to converse with our clients.
     </p>

    </div>
  </section>

)

export default DealOffer