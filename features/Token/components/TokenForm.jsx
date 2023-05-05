import React from "react";

const TokenForm = () => {
  let dropOptions = [
    { id: 1, name: "Naira", symbol: "NGN" },
    { id: 2, name: "Dollar", symbol: "USD" },
    { id: 3, name: "Pounds", symbol: "GPB" },
    { id: 4, name: "Yen", symbol: "JPY" },
    { id: 5, name: "Euro", symbol: "EUR" },
  ];

  return (
    <div className="flex flex-1 items-start justify-start flex-col px-6 w-full h-full ">
      <div className="flex flex-col flex-1 h-full ">
        <form>
          <div className=" flex flex-col">
            <span className=" ml-3 font-semibold font-poppins text-[#19192E] text-xl">
              Buy
            </span>
            <div className="border-b-2 border-[#19192E] w-2/5 mt-1" />
          </div>

          <div className="mt-6 w-full h-full p-6">
            <div className="bg-[#f9f9f9] w-full h-full mt-6 cursor-pointer p-4 rounded-3xl border-[1px] border-[#e5e5e5] outline-[#1a1941]">
              <div className="flex flex-col items-center justify-center">
                <span className="text-[#19192E] font-semibold text-left">
                  Spend
                </span>
                <div className="flex flex-row items-center justify-between mt-2">
                  <div>
                    <input
                      placeholder="0.00"
                      type="text"
                      className="border-none outline-none p-1 bg-[#F9F9F9] text-[#19192E]"
                    />
                  </div>

                  <div>
                    <div>
                      <label htmlFor="option"></label>
                      <select
                        name="currency"
                        id="currency-select"
                        className="relative border-none outline-none cursor-pointer bg-[#F9F9F9] text-[#19192E]"
                      >
                        {dropOptions.map(({ id, name, symbol }) => {
                          return (
                            <option key={id} value={name}>
                              {symbol}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f9f9f9] w-full h-full mt-6 cursor-pointer p-4 rounded-3xl  border-[1px] border-[#e5e5e5] outline-[#1a1941]">
              <div className="flex flex-col items-center justify-center">
                <span className="text-[#19192E] font-semibold text-left">
                  Receive
                </span>
                <div className="flex flex-row items-center justify-between mt-2">
                  <div>
                    <input
                      placeholder="0.00"
                      type="text"
                      className="border-none outline-none p-1 bg-[#F9F9F9] text-[#19192E]"
                    />
                  </div>
                  <div>
                    <div>
                      <label htmlFor="option"></label>
                      <select
                        name="currency"
                        id="currency-select"
                        className="relative border-none outline-none cursor-pointer bg-[#F9F9F9] text-[#19192E]"
                      >
                        <option value="neon-cover">NCT</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer w-2/5 bg-[#19192E] text-white rounded-xl p-2 mt-9">
              Buy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TokenForm;
