import styles from "../../style";
import { footerLinks, socialMedia } from "../../constants";
import Image from "next/image";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-[#06080D] ${styles.paddingX}`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex flex-1 flex-col justify-start mr-10">
          <Image src="/neon.png" alt='hoobank' width={266} height={72.14} className="object-contain" />
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            We give you peace.
          </p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {
            footerLinks.map((footerlink) => (
              <div key={footerlink.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                  {footerlink.title}
                </h4>
                <ul className="list-none mt-4">
                  {footerlink.links.map((link, index) => (
                    <li
                      key={link.name}
                      className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite 
                      hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          }
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
          <p className="font-poppins font-normal text-[18px] text-center text-white leading-[27px]">
            Copyright Ⓒ 2023 Neon Insurance. All Rights Reserved.
          </p>

          <div className="flex flex-row md:mt-0 mt-6">
            {socialMedia.map((media, index) => (
              <Image key={media.id} src={media.icon} alt={media.id} width={24} height={24}
                  className={`object-contain cursor-pointer
                  ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`}
                  onClick = {() => window.open(media.link)}
              />
            ))}
          </div>
      </div>
    </section>
  )
}

export default Footer