import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {

  const [ searchQuery, setSearchQuery] = useState(""); 
  
  useEffect(() => {
    // API CALL
    console.log(searchQuery);
   const timer = setTimeout( () => getSearchSuggestions(), 200) ;
   return () => {
    clearTimeout(timer);
   };
  }, [searchQuery]);

  const getSearchSuggestions = async () =>{
    const data = await fetch (YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);

  }

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg"
        />
        <a href="/">
          <img
            className="h-8 mx-3 cursor-pointer"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          />
        </a>
      </div>

      <div className=" col-span-10 px-14">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="bg-gray-300 border border-gray-400 p-2 rounded-r-full">
          Seacrh
        </button>
      </div>

      <div>
        <img
          className="h-8 col-span-5"
          alt="userIcon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
