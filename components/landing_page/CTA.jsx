import Button from "./Button";

const CTA = () => (
  <section className="flex justify-center items-center sm:px-16 px-6 sm:py-12 py-4 sm:my-16 my-6 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow">
    <div className="flex flex-1 flex-col">
      <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-gradient xs:leading-[76.8px] leading-[66.8px] w-full">Try our service now!</h1>
      <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
      Join our community of satisfied users today and experience 
      the peace of mind that comes with having comprehensive health 
      insurance coverage.
      </p>
    </div>

    <div className="flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10">
      <Button />
    </div>
  </section>
)

export default CTA