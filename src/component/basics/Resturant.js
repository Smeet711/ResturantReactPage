import React, { useState } from "react";
import "./style.css";
import Menu from "./menuapi";
import MenuCard from "./MenuCard";
import NavBar from './NavBar';


const uniqueList =[ ...new Set( Menu.map((curElem)=>{
return curElem.category;
})),
'All'];

console.log(uniqueList);



const Resturant = () => {
  const [menuData, setmenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(uniqueList);

const filterItem = (category)=>{

if(category === 'All'){
  setmenuData(Menu);
  return;
}



const updatedList = Menu.filter((curElem) =>{
  return curElem.category === category;
});

setmenuData(updatedList);

};


  return (
    <>

<NavBar filterItem = {filterItem} menuList={menuList}   />

      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
