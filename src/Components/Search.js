import React from "react";
import Data, { MenuItems }  from "./Data"

function Search(){
    const [searchTag,setSearchTag]=useState("")
    const fillterProduct= MenuItems.fillter(MenuItems=>{
        return MenuItems.name.toLoverCase().includes(searchTag.toLoverCase())
    })

    return(
        <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" 
        placeholder="Search"
        onChange={(e)=>setSearchTag(e.target.value)} />
      </div>

    )
}
export default Search