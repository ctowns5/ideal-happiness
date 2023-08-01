import { Link } from "react-router-dom";
import React,{ useState, useEffect } from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav() {
const [page, setpage] = useState("");
const [loadPage, setLoad ] = useState(false);
useEffect(()=>{
  if (loadPage){
    const currentPage = window.location.href.split("/").at(-1)
    console.log(currentPage)
    setpage(currentPage)
    setLoad(false)
  }
},[loadPage])
const onClick = event => {
  setLoad(true)
}
  return (
    <ul className="nav nav-tabs">
      <Link to={"/"} className={`${page===""&&"active "}nav-item`} style={{ marginRight: "2rem" }} onClick={onClick}>
        About Me
      </Link>
      <Link to={"/Portfolio"} className={`${page==="Portfolio"&&"active "}nav-item`} style={{ marginRight: "2rem" }} onClick={onClick}>
        Portfolio
      </Link>
      <Link to={"/Resume"} className={`${page==="Resume"&&"active "}nav-item`}style={{ marginRight: "2rem" }} onClick={onClick}>
        Resume
      </Link>
      <Link
        to={"/Contact"}
        className={`${page==="Contact"&&"active "}nav-item`}
        style={{ marginRight: "2rem" }}
        onClick={onClick}
      >
        Contact
      </Link>
    </ul>
  );
}

export default Nav;
