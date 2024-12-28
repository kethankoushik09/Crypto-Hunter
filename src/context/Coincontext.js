import { createContext, useEffect, useState } from "react";
import { useContext } from "react";

export function useValue(){
    const val = useContext(Coincontext);
    return val;
}

const Coincontext = createContext();

export default function CustomCoincontext({children}){
    const [allcoins,SetAllcoins] = useState([]);
    const [currency,Setcurrency] = useState({
        name:"usd",
        Symbol:"$"
    })
    const contextvalues = {allcoins,SetAllcoins,currency,Setcurrency}
    async function fetchAllcoin() {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-kjnnfgRhNb9zKkYD92N2qDiW'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => SetAllcoins(res))
            .catch(err => console.error(err));
        
    }
    useEffect(()=>{
        console.log(currency);
        
        fetchAllcoin();
    },[currency])
    
    return(
        <>
            <Coincontext.Provider value={contextvalues}>
                {children}
            </Coincontext.Provider>
        </>
    )

}