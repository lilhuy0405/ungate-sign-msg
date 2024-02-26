import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useState } from "react";
import { useAccount, useSignMessage } from "wagmi";

const Sign = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const [signature, setSignature] = useState<string>("");
  const handleSign = async () => {  
    const message = "login-ungate-v1";
    const signature = await signMessageAsync({
      message,
    });
    console.log(signature);
    setSignature(signature);
  };
  return (
    <>
      <h1>SIGN MESSAGE</h1>
      <p>Message: login-ungate-v1</p>
      <div>
        <button onClick={async () => await open()}>
          {isConnected ? address : "Connect"}
        </button>
      </div>
      <div>
        <button onClick={handleSign}>Sign now</button>
      </div>
      <div>
        Signature: <span>{signature}</span>
      </div>
    </>
  );
};
export default Sign;
