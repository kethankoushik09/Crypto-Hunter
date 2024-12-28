import React, { useEffect, useState } from 'react'
import "./text.css"
import { useValue } from '../../context/Coincontext'
import { NavLink } from 'react-router-dom';


const Text = () => {
    const {allcoins,currency} = useValue();
    console.log(allcoins);
    const [displaycoin,Setdisplaycoin] = useState([]);
    const [input,Setinput] = useState("");
    function handleSetinput(event){
        Setinput(event.target.value);
        if(event.target.value === ""){
            Setdisplaycoin(allcoins);
        }
    }
    function handleSearchFilter(){
        const coins = allcoins.filter((item)=>item.name.toLowerCase().includes(input.toLowerCase()))
        Setdisplaycoin(coins);
    }
    useEffect(()=>{
        Setdisplaycoin(allcoins);

    },[allcoins])


    


    return (
    <div>
        <div className='main-heading'>
            <h1>Largest<br/> Crypto Marketplace</h1>
            <p>wlecomes to the world's largest cryptocurrency marketplace.<br/>
                signup tpexplore more about cryptos
            </p>
            <div className='searching-wrapper'>
                <input value={input} onChange={handleSetinput} list="coinlist" type='text' placeholder='Search crypto..'/>
                <button onClick={handleSearchFilter}>Search</button>
                <datalist id='coinlist'>
                    {allcoins.map((item,idx)=><option key={idx} value={item.name}/>)}
                </datalist>
            </div>
            <div className='crypto-table'>
                <div className='table-format'>
                    <p>#</p>
                    <p>coins</p>
                    <p>Price</p>
                    <p>24HChange</p>
                    <p>MarketCap</p>
                </div>
                {displaycoin.slice(0,10).map((item,idx)=>(
                    <div className='table-format' key={idx}>
                        <p>{item.market_cap_rank    }</p>
                        <div className='coin-image-container'>
                            <NavLink to={`/coin/${item.name}`}>
                                <img src={item.image} alt=''/>
                            </NavLink>
                            <p>{item.name + " - "+item.symbol}</p>
                        </div>
                        <p>{currency.Symbol} {item.current_price.toLocaleString()}</p>
                        <p className={item.price_change_percentage_24h>0?"green":"red"}
                        >{Math.floor(item.price_change_percentage_24h*100)/100}</p>
                        <p>{currency.Symbol} {item.market_cap.toLocaleString()}</p>
                    </div>

                ))}
            </div>

        </div>
      
    </div>
  )
}

export default Text
