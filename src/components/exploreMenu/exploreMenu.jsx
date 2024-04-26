import React from 'react'
import './exploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCatagory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='expore-menu-text'>Indulge in culinary delights to satisfy your cravings and elevate your happiness. Choose from our exquisite selection and embark on a journey of culinary bliss.</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index)=>{
                return (
                    <div onClick={()=> setCatagory(prev=> prev===item.menu_name? "All": item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name? "active": ""} src={item.menu_image} alt="" />
                        <p className='explore-menu-item-text'>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
