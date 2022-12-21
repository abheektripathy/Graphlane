/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useWeb3 } from '@3rdweb/hooks'

const auth = () => {

    const {address,chainId, connectWallet} = useWeb3()
if(address){
  return (
    <div>
      <h1>dfhfhgfhg</h1>
      
    </div>
  )
} else {
    return (
        <div>
        <h1>no</h1>
        <button onClick={()=>connectWallet("injected")}>connect</button>
        </div>
    );
}

}
export default auth;
