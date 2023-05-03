import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import ABI from "../../../utils/ABI/ABI.json";
import Loading from "@/components/Loading";

const BuyCoverForm = (props) => {
  const policyContract = "0x2fdfAe4285260160d2FdFC114a00Bcd61a25760A";
  const _insureId = props.getData;
  const [age, setAge] = useState([]);
  const [insureId, setInsureId] = useState(0);
  const [percentageToCover, setPercentageToCover] = useState(0);
  const [familyNo, setFamilyNo] = useState(0);
  const [familyHealthStatus, setFamilyHealthStatus] = useState(false);
  const [smoke, setSmoke] = useState(false);
  const [familyName, setFamilyName] = useState("");

  const { config: config1 } = usePrepareContractWrite({
    address: policyContract,
    abi: ABI,
    functionName: "registerPolicy",
    args: [
      _insureId,
      percentageToCover,
      familyNo,
      age,
      familyHealthStatus,
      smoke,
      familyName,
    ],
  });

  const {
    data: registerPolicyData,
    isLoading: registerPolicyIsLoading,
    write: register,
  } = useContractWrite(config1);

  const { data: registerWaitData, isLoading: registerWaitIsLoading } =
    useWaitForTransaction({
      data: registerPolicyData?.hash,

      onSuccess(data) {
        console.log("Insurance registration successful: ", data);
      },

      onError(error) {
        console.log("Error: ", error);
      },
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    register?.();
  };

  const addFields = (e) => {
    e.preventDefault();
    let newfield = { age: "" };

    setAge([...age, newfield]);
  };

  const handleFormChange = (index, event) => {
    let data = [...age];
    data[index][event.target.name] = event.target.value;
    setAge(data);
  }

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
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between mt-5">
              <div className="w-[48%]">
                <label className="text-[16px] font-[400] leading-5">
                  Family Name
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2"
                  onChange={(e) => setFamilyName(e.target.value)}
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
                  Do any of you smoke?
                </label>{" "}
                <br />
                <select
                  name=""
                  id=""
                  className="h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2"
                  onChange={(e) => setSmoke(e.target.value)}
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
                  onChange={(e) => setFamilyHealthStatus(e.target.value)}
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
                  onChange={(e) => setPercentageToCover(e.target.value)}
                >
                  <option value="">40</option>
                  <option value="">60</option>
                  <option value="">80</option>
                  <option value="">100</option>
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
                  onChange={(e) => setFamilyNo(e.target.value)}
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
              <div className="w-[20%]">
                <label className="text-[16px] font-[400] leading-5">Ages</label>{" "}
                <br />
                <input
                  type="text"
                  className="h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2"
                />
              </div>
              
              {age.map((input, index) => {
                return (
                  <div className="flex items-center gap-1 ">
                    <div key={index} className="w-[100px]">
                      <label className="text-[16px] font-[400] leading-5">
                        Ages
                      </label>{" "}
                      <br />
                      <input
                        type="text"
                        className="h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2"
                        onChange={(event) => handleFormChange(index,event)}
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
                );
              })}
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
