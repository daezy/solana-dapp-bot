import FunctionComponent from "../components/FunctionComponent";

const SolanaDappBot = () => {
  return (
    <div className="bg-[rgb(255,255,255,0.04)] p-3 my-5">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-[#090B1C] rounded-md p-4 w-full">
            <div className="p-1 bg-[#C0CFE73B] rounded-md flex items-center justify-between ">
              <div className=" flex items-center  gap-2 p-3">
                <img src={"./sol 1.png"} alt="" className="w-4" />
                <div>
                  <p className="text-[#26DDFF] sm:text-[18px] text-[13px]">
                    SOLANA
                  </p>
                  <p className="text-[10px] text-white">Balance: 0</p>
                </div>
              </div>
              <div className="bg-[#090B1C] rounded-md p-3 w-[70%] text-[13px]">
                <input
                  type="text"
                  placeholder="Set Buy Amount"
                  className="bg-transparent w-full outline-none text-[#fff] placeholder-custom"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className=" flex items-center  gap-2 p-3">
                <img src={"./grommet-icons_money.png"} alt="" className="w-4" />
                <div>
                  <p className="text-[#fff] sm:text-[13px] text-[9px]">
                    DAILY LIMIT
                  </p>
                  <p className="text-[10px] text-white">$200/DAY</p>
                </div>
              </div>
              <div className="rounded-md border border-[#0D47A180] p-2 sm:w-[33%] w-[30%] ">
                <input
                  type="text"
                  placeholder="Set Daily Limit"
                  className="bg-transparent w-full outline-none text-[#fff] placeholder-custom sm:text-lg text-[10px]"
                />
              </div>
              <div className="bg-gradient-to-r from-[#00ADFD] to-[#0284E2] rounded-md flex items-center justify-center p-3 sm:w-[33%] w-[30%] ">
                <button className="w-full">
                  <p className="sm:text-lg text-[9px]">START BUYING</p>
                </button>
              </div>
            </div>
            <form action="">
              <div className="flex items-center justify-between mt-2">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <input
                      type="radio"
                      name="option"
                      id=""
                      className="radio-container"
                    />
                    <label
                      className="text-white sm:text-[12px] text-[9px] font-light"
                      htmlFor=""
                    >
                      $100
                    </label>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <input
                      type="radio"
                      name="option"
                      id=""
                      className="radio-container"
                    />
                    <label
                      className="text-white sm:text-[12px] text-[9px] font-light"
                      htmlFor=""
                    >
                      $400
                    </label>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <input
                      type="radio"
                      name="option"
                      id=""
                      className="radio-container"
                    />
                    <label
                      className="text-white sm:text-[12px] text-[9px] font-light"
                      htmlFor=""
                    >
                      $200
                    </label>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <input
                      type="radio"
                      name="option"
                      id=""
                      className="radio-container"
                    />
                    <label
                      className="text-white sm:text-[12px] text-[9px] font-light"
                      htmlFor=""
                    >
                      $500
                    </label>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <input
                      type="radio"
                      name="option"
                      id=""
                      className="radio-container"
                    />
                    <label
                      className="text-white sm:text-[12px] text-[9px] font-light"
                      htmlFor=""
                    >
                      $300
                    </label>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <input
                      type="radio"
                      name="option"
                      id=""
                      className="radio-container"
                    />
                    <label
                      className="text-white sm:text-[12px] text-[9px] font-light"
                      htmlFor=""
                    >
                      $1000
                    </label>
                  </div>
                </div>
              </div>
            </form>

            <div className="bg-gradient-to-r from-[#00ADFD] to-[#0284E2] mt-4 rounded-md flex items-center justify-center sm:p-3 p-2  ">
              <button>
                <p className="sm:text-lg text-[11px] sm:font-light font-semibold">
                  TAKE PROFIT
                </p>
              </button>
            </div>
          </div>
          <div className="bg-[#090B1C] rounded-md p-4 w-full mt-3">
            <div className="flex items-center justify-between mt-2">
              <div className="rounded-md border border-[#0D47A180] p-3 w-[36%] ">
                <select className="outline-none select-options w-full bg-transparent sm:text-lg text-[11px] text-[#fff]">
                  <option>Set Buy Delay</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div className="rounded-md border border-[#0D47A180] p-3 w-[62%]">
                <select className="outline-none select-options sm:text-lg text-[11px] w-full bg-transparent text-[#fff]">
                  <option>Set Minimum Buy Liquidity</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
            <div className="mt-2">
              <h1 className="font-light sm:text-lg text-[13px] text-[#fff] mb-2 mt-3">
                Buyer Private Key
              </h1>
              <div className="flex items-center justify-between ">
                <div className="rounded-md border border-[#0D47A180] p-3 w-[53%] ">
                  <input
                    type="text"
                    placeholder="Enter Your Private Key"
                    className="bg-transparent w-full sm:text-lg text-[11px] outline-none text-[#fff] placeholder-custom"
                  />
                </div>
                <div className="bg-gradient-to-r from-[#00ADFD] to-[#0284E2] rounded-md flex items-center justify-center p-3  ">
                  <button>
                    <p className="text-white sm:text-lg text-[11px]">
                      GENERATE
                    </p>
                  </button>
                </div>
                <div className="bg-[#fff] rounded-md flex items-center justify-center sm:px-5 py-3 px-3   ">
                  <button>
                    <p className="text-[#00ADFD] sm:text-lg text-[11px]">
                      COPY
                    </p>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white mt-4 rounded-md  flex items-center justify-center p-3  ">
              <button>
                <p className="sm:text-lg text-[11px]">NEW BUY ENABLED</p>
              </button>
            </div>
          </div>
          <div className="bg-[#090B1C] rounded-md p-4 w-full mt-3">
            <h1 className="font-light sm:text-lg text-[13px] text-[#fff] mb-2 mt-3">
              DAILY REPORTS
            </h1>
            <div className="flex justify-between items-center">
              <div className="bg-white rounded-t-md">
                <div className="flex flex-col justify-center items-center  md:w-[150px] sm:w-[130px] w-[100px] p-1">
                  <p className="text-[#00ADFD] font-semibold text-[21px]">20</p>
                  <p className="sm:text-[10px] text-[8px]">LAUNCHES DETECTED</p>
                </div>
                <div className="h-2 bg-[#00ADFD] w-full"></div>
              </div>
              <div className="bg-white rounded-t-md">
                <div className="flex flex-col justify-center items-center  md:w-[150px] sm:w-[130px] w-[100px] p-1">
                  <p className="text-[#00ADFD] font-semibold text-[21px]">10</p>
                  <p className="sm:text-[10px] text-[8px]">NO OF BUYS</p>
                </div>
                <div className="h-2 bg-[#00ADFD] w-full"></div>
              </div>
              <div className="bg-white rounded-t-md">
                <div className="flex flex-col justify-center items-center  md:w-[150px] sm:w-[130px] w-[100px] p-1 ">
                  <p className="text-[#00ADFD] font-semibold text-[21px]">50</p>
                  <p className="sm:text-[10px] text-[8px] ">NO OF SELLS</p>
                </div>
                <div className="h-2 bg-[#00ADFD] w-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <FunctionComponent />
        </div>
      </div>
      <div className="p-4 mt-4 bg-white rounded-md">
        <h1 className="text-black font-light text-[24px] mb-2 ">
          GENERAL NOTES
        </h1>
        <div>
          <p className="text-[#5d5d5d] ">
            - Detect as many tokens as possible, deployed by the Raydium
            authority or by other dexes
          </p>
          <p className="text-[#5d5d5d] ">
            - Only buy the same token once (at the start of it's run when liq is
            added)
          </p>
          <p className="text-[#5d5d5d] ">
            - Buy as fast as you can (snipe) no need for a delay
          </p>
          <p className="text-[#5d5d5d] ">
            - Always sell the entire amount when specified
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolanaDappBot;
