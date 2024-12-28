import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useValue } from '../../context/Coincontext';
import "./coin.css"
import Linechart from '../Chart/Linechart';

const Coin = () => {
    const {id} = useParams();
    console.log(id);
    
    
    const [coindata,Setcoindata] = useState();
    const [historicalcoindata,Sethistoricalcoindata] = useState();
    const [loading,Setloading] = useState(false);
    const {currency} = useValue();
    async function fetchAllcoindata() {
        Setloading(true);
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-kjnnfgRhNb9zKkYD92N2qDiW'}
          };
          
        await fetch(`https://api.coingecko.com/api/v3/coins/${id.toLowerCase()}`, options)
            .then(res => res.json())
            .then(res =>Setcoindata(res))
            .catch(err => console.error(err));
        
        
    }
    async function fetchAllHistoricalcoindata() {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-kjnnfgRhNb9zKkYD92N2qDiW'}
          };
          
          await fetch(`https://api.coingecko.com/api/v3/coins/${id.toLowerCase()}/market_chart?vs_currency=${currency.name}&days=10`, options)
            .then(res => res.json())
            .then(res => Sethistoricalcoindata(res))
            .catch(err => console.error(err));
        Setloading(false);


    }
    
    useEffect(()=>{
        fetchAllcoindata();
        fetchAllHistoricalcoindata();
    },[currency])
    useEffect(()=>{
        console.log(coindata);
        

    },[coindata])
    if(loading){
        return(<div className='spin'></div>)
    }
    console.log(coindata , historicalcoindata);
    
  return (
    <div>
        {coindata && historicalcoindata &&
            <div className='coin'>
                <div className='coin-image'>
                    <img src={coindata.image.large} alt={`${id}`}/>
                    <p>{coindata.name} {coindata.symbol.toUpperCase()}</p>
                </div>
                <div className='coin-chart'>
                    <Linechart historicalcoindata = {historicalcoindata}/>
                </div>
                <div className='coin-info'>
                    <ul>
                        <li>Crpto Market rank</li>
                        <li>{coindata.market_cap_rank}</li>
                    </ul>
                    <ul>
                        <li>Current Price</li>
                        <li>{currency.Symbol} {coindata.market_data.current_price[currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>Market Cap</li>
                        <li>{currency.Symbol} {coindata.market_data.market_cap [currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>24 Hour high</li>
                        <li>{currency.Symbol} {coindata.market_data.high_24h[currency.name].toLocaleString()}</li>
                    </ul>
                    <ul>
                        <li>24 Hour low</li>
                        <li>{currency.Symbol} {coindata.market_data.low_24h[currency.name].toLocaleString()}</li>
                    </ul>
                </div>
            </div>


        }
    </div>
  )
}

export default Coin
