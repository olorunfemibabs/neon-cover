import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const BuyCoverForm = (props) => {
  const [age, setAge] = useState([]);

  const addFields = (e) => {
    e.preventDefault();
    let newfield = { age: "" };

    setAge([...age, newfield]);
  };
  console.log(`it is: ${props.getData}`);
  const handleFormChange = (index, event) => {
    let data = [...age];
    data[index][event.target.name] = event.target.value;
    setAge(data);
  };
  const removeFields = (index) => {
    // e.preventDefault()
    let data = [...age];
    data.splice(index, 1);
    setAge(data);
  };
  return (
    <div className="fixed top-0 w-[100%] ">
      <div className="w-[60%] ml-14 bg-white mt-10 rounded-lg">
        <div className="w-[90%] mx-auto pt-[54px] pb-[54px]">
          <div className="flex justify-between items-center">
            <div className="">
              <h2 className="font-bold text-[24px] leading-7 text-[#1A1941]">
                Register Insurance
              </h2>
              <p className="font-normal text-[14px] leading-4 text-[#959595] mt-[14px] ">
                Fill the Form to register Insurance
              </p>
            </div>
            <AiOutlineCloseCircle
              size={20}
              className="text-[#7C7B7B] cursor-pointer"
              onClick={props.close}
            />
          </div>
          <form>
            <div className="flex justify-between mt-5">
              <div className="w-[48%]">
                <label className="text-[16px] font-[400] leading-5">
                  Family Name
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2"
                />
              </div>
              <div className="w-[48%]">
                <label className="text-[16px] font-[400] leading-5">
                  Package Type
                </label>{" "}
                <br />
                {/* <input type="text" className='h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2' /> */}
                <select
                  name=""
                  id=""
                  className="h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2"
                >
                  <option value="">Single</option>
                  <option value="">Nuclear Family</option>
                  <option value="">Extended Family</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="w-[48%]">
                <label className="text-[16px] font-[400] leading-5">
                  Do any of you smoke
                </label>{" "}
                <br />
                <select
                  name=""
                  id=""
                  className="h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2"
                >
                  <option value="">Yes</option>
                  <option value="">No</option>
                </select>
              </div>
              <div className="w-[48%]">
                <label className="text-[16px] font-[400] leading-5">
                  Any Family Disease
                </label>{" "}
                <br />
                <select
                  name=""
                  id=""
                  className="h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2"
                >
                  <option value="">Yes</option>
                  <option value="">No</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="w-[48%]">
                <label className="text-[16px] font-[400] leading-5">
                  Cover To buy
                </label>{" "}
                <br />
                <select
                  name=""
                  id=""
                  className="h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2"
                >
                  <option value="">40%</option>
                  <option value="">60%</option>
                  <option value="">80%</option>
                  <option value="">100%</option>
                </select>
              </div>
              <div className="w-[48%]">
                <label className="text-[16px] font-[400] leading-5">
                  Family Number
                </label>{" "}
                <br />
                <select
                  name=""
                  id=""
                  className="h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2"
                >
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              {age.length > 0 && (
                <>
                  {age.map((input, index) => (
                    <div key={index} className="flex items-center gap-1 ">
                      <div className="w-[100px]">
                        <label className="text-[16px] font-[400] leading-5">
                          Ages
                        </label>{" "}
                        <br />
                        <input
                          type="text"
                          onChange={(event) => handleFormChange(index, event)}
                          className="h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2"
                        />
                      </div>
                      <button
                        className="text-[32px] h-[50px] pt-4 font-bold"
                        onClick={(e) => {
                          e.preventDefault();
                          removeFields(index);
                        }}
                      >
                        -
                      </button>
                    </div>
                  ))}
                </>
              )}
            </div>
            <button
              className="text-[16px] font-semibold mt-2"
              onClick={addFields}
            >
              + Ages..
            </button>

            <button className="text-[16px] font-bold w-[100%] h-[50px] bg-[#1A1941] text-[#FFFFFF] rounded-lg mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyCoverForm;
