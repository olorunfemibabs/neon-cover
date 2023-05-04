import Image from "next/image";
import React from "react";

const TokenDesc = () => {
  return (
    <div className="relative flex flex-1 items-start justify-start flex-col px-6 h-full w-full">
      <h4 className="font-poppins font-semibold text-[25px] text-[#19192E] leading-[23px] mb-3 w-full">
        Get our token in simple steps
      </h4>
      <p className="font-poppins font-normal text-[20px] mb-3 text-[#19192E] leading-[24px]">
        Get NCT to insure yourself and stay protected.
      </p>
      <div className="flex flex-col items-center">
        <div className="flex flex-col flex-1 items-start justify-start text-[#19192E]">
          <div className="w-full h-full">
            <Image
              src="/undraw_crypto_flowers_re_dyqo.svg"
              alt="Crypto flowers"
              width={500}
              height={800}
            />
          </div>
          <Image
            src="/credit-card.png"
            alt="credit card"
            width={100}
            height={70}
          />
        </div>
      </div>
    </div>
  );
};

export default TokenDesc;
