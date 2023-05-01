import styles from "../../style";
import { arrowUp } from '../../assets';
import Image from "next/image";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer animate-bounce`}>
    <div className={`${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full bg-primary`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px] mr-2">
          <span className="text-gradient">Get</span>
        </p>
        <Image src={arrowUp} alt="arrow" width={23} className="object-contain" />
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
)

export default GetStarted