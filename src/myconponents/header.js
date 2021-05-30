import React,{useState} from 'react'
import PropType from 'prop-types'


import  
{ 
  Link, Redirect
} from "react-router-dom";

export default function Header(props){
  const [searchText,setSearchText] = useState("");
  function searchForWork(e){
    e.preventDefault();
    console.log("Searching for :",searchText)
    props.searchFun(searchText);
   
  }
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">{props.title}</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/about">About</Link>
            </li>
            
            
          </ul>
          {props.searchbar &&
          <form class="d-flex" to="/search" onSubmit={searchForWork}>
          <input class="form-control me-2" value={searchText} onChange={(e)=>setSearchText(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success"  type="submit">Search</button>
        </form>
        
          }

        
          
        </div>
      </div>
    </nav>
    )
}
Header.defaultProps ={
    title : "Title here",
    searchbar : true,
}
Header.PropType = {
    title : PropType.string.isRequired,
    searchbar:PropType.bool,
    
}