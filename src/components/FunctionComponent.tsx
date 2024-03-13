const FunctionComponent = () => {
  return (
    <div className="bg-[#090B1C] rounded-md p-6 w-full h-full">
      <h1 className="text-white font-light text-[24px] mb-2">
        FUNCTIONS OF THE DAPP
      </h1>
      <div>
        <p className="text-[#5d5d5d] mb-2">- Generate new wallet</p>
        <p className="text-[#5d5d5d] mb-2">
          - Set daily limit (The amount of buys each 24h)
        </p>
        <p className="text-[#5d5d5d] mb-2">
          - Buy amount (set the buy amount in sol for each buy)
        </p>
        <p className="text-[#5d5d5d] mb-2">
          - Take Profit (whichever comes first)
        </p>
        <p className="text-[#5d5d5d] mb-2">
          - Take Profit X (sell at the number of X's specified)
        </p>
        <p className="text-[#5d5d5d] mb-2">
          - Take profit Time (Sell after X minutes)
        </p>
        <p className="text-[#5d5d5d] mb-2">
          - Enable new buys (start/continue buying new tokens)
        </p>
        <p className="text-[#5d5d5d] mb-2">
          - Disable new buys (stop buying new tokens)
        </p>
        <p className="text-[#5d5d5d] mb-2">
          - Set buy delay (min) - Wait X minutes before buying the token you
          found.
        </p>
        <p className="text-[#5d5d5d]">
          - Set min buy liquidity - (do not buy the token if the liquidity is
          lower than X)
        </p>
      </div>
    </div>
  );
};

export default FunctionComponent;
