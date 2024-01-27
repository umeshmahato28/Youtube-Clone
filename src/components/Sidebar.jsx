import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
      const isMenuOpen = useSelector(store => store.app.isMenuOpen);
      
      // Early Return Pattern
      if(!isMenuOpen) return null;

  return (
    <div className="w-48 p-5 shadow-md">
      <ul className="">
        <li> <Link to="/"><i class="faa fa-house"></i>Home</Link></li>
        <li>Shorts</li>
        <li>Live</li>
        
      </ul>
      <br/>
    <h1 className="font-semibold">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <br/>
    <h1 className="font-semibold">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;