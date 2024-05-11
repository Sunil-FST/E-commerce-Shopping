import React, { useState } from 'react'
import styles from './Navbar.module.css';
import { BsCartPlusFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";

export default function Navbar({setSearchQuery}) {

    const[searchInput,setSearchInput]=useState('')
    const [isOpen,setIsOpen]=useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
      const handleInputChange = (event) => {
        setSearchInput(event.target.value);
      };
      const handleSearch = () => {
        setSearchQuery(searchInput);
      };
    
    
  return (
    <>
    <div className={styles.Navbar}>
        <div className={styles.logo}>
            <h1>Sunil's Cart</h1>
        </div>


        <div className={styles.search}>
<input type="text" 
 placeholder='search'
value={searchInput}
 onChange={handleInputChange}
 />
<IoSearchOutline size={25}  onClick={handleSearch}/>
        </div>


        <div className={styles.menu} onClick={toggleMenu}>
        <HiOutlineMenu size={30} />
        <div className={styles.menu1}>Menu</div>
      </div>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li><a href="#">Deals</a></li>
          <li><a href="#">Support & Services</a></li>
          <li className={styles.dropdown}>
            <a href="#">Brands</a>
            <div className={styles.dropdownContent}>
              <a href="#">Shop by Department</a>
              <a href="#">Appliances</a>
              <a href="#">TV & Home Theater</a>
              <a href="#">Computers & Tablets</a>
              
            </div>
          </li>
          
        </ul>
      )}


        <div className={styles.navleft}>
        <div className={styles.cart}>
        <BsCartPlusFill size={30} />
        </div>
        <div className={styles.user}>
        <FaRegUserCircle size={30} />
        </div>
      
        </div>
       
    </div>
   
    </>
    
  )
}
