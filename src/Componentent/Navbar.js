import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import Styles from './Navbar.module.css'
import {CgMenuGridO} from 'react-icons/cg';
import {RiCloseCircleLine} from 'react-icons/ri'

const Navbar = () => {
    const[navBarOpen,setNavBarOpen]=useState(false);
    const[windowDimension, setWindowDimension]= useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const detectDimension = () =>{
        setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
        }
        )
    }

    useEffect(()=>{
        window.addEventListener('resize', detectDimension)
        windowDimension.width > 800 && setNavBarOpen(false)
        return () =>{
            window.removeEventListener('resize',detectDimension)
        }
    },[windowDimension]);
    
    const links=[
    {
        id:1,
        link:"Inicio",
    },
    {
        id:2,
        link:"Productos",
    },
    {
        id:3,
        link:"Carrito",
    },
    {
        id:4,
        link:"Login",
    }
  ]


  
  return (
    <div className={!navBarOpen? Styles.Navbar : Styles.navOpen}>
        {!navBarOpen && <img className={Styles.logo} src={require("../assets/Logo.png")}></img>}

        {!navBarOpen  && windowDimension.width < 800 ?(
            <CgMenuGridO color='#f1f1f1' onClick={()=> setNavBarOpen(!navBarOpen)} size={30}/>
        ): windowDimension.width < 800 && (
            <RiCloseCircleLine color='#f1f1f1' onClick={()=> setNavBarOpen(!navBarOpen)} size={30}/>
        )}
        
        {navBarOpen && (
            <ul className={Styles.linksContainer}>
            {links.map((x)=>(
                <div>
                    <Link
                    onClick={()=> setNavBarOpen(false)}
                    to={x.link}
                    smooth
                    duration={500}
                    className={Styles.navLink}
                    >{x.link === "HowWeWork" ? "How We Work" : x.link}</Link>
                </div>
            ))}
            </ul>
    )}
    {windowDimension.width > 800 &&(
            <ul className={Styles.linksContainer}>
            {links.map((x)=>(
                <div>
                    <Link
                    onClick={()=> setNavBarOpen(false)}
                    to={x.link}
                    smooth
                    duration={500}
                    className={Styles.navLink}
                    >{x.link === "HowWeWork" ? "How We Work" : x.link}</Link>
                </div>
            ))}
            </ul>
    )}
    </div>
  )
}

export default Navbar
