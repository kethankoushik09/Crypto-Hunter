import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const Linechart = ({historicalcoindata}) => {
    const [data,Setdata] = useState([["Date","prices"]])
    useEffect(()=>{
        let datacopy = [["Date","prices"]]
        if(historicalcoindata.prices){
            historicalcoindata.prices.map((item)=>{
                datacopy.push([`${new Date(item[0]).toLocaleDateString("en-US").slice(0,-5)}`,item[1]])
            })
            Setdata(datacopy);

        }
    },[historicalcoindata])
  return (
    <Chart chartType='LineChart' data={data} height="100%"  legendToggle/>
  )
}

export default Linechart
