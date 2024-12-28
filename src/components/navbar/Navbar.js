import React from 'react'
import "./Navbar.css"
import { useValue } from '../../context/Coincontext'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const {Setcurrency} = useValue();
  function handlesetcurrency(e){
    switch(e.target.value){
      case "usd":{
        Setcurrency({name:"usd",Symbol:"$"});
        break;
      }
      case "inr":{
        Setcurrency({name:"inr",Symbol:"₹"});
        break
      }
      
      case "eur":{
        Setcurrency({name:"eur",Symbol:"ē"});
        break
      }

      default:{
        break;
      }

    }
  }

  return (
    <>
    <div className='nav-container'>
        <div className='logo-conatiner'>
            <NavLink to="/" style={{color:"white"}}>
              <i class="fa-brands fa-rebel icon"></i>
            </NavLink>
            <span>Cryptoplace</span>
        </div>
        <ul className='nav-list'>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className='nav-right'>
          <select onChange={handlesetcurrency}>
            <option value="usd">USD</option>
            <option value="inr">INR</option>
            <option value="eur">EUR</option>
          </select>
          <button>Signin  <i class="fa-solid fa-circle-user"></i>
          </button>
        </div>      
    </div>
    <Outlet/>
    
    </>
  )
}

export default Navbar
