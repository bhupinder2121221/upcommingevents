import React from "react"
import profilepic from "./bhupinderpic.jpg"
export default function About(){
    let cardStyle ={
        width : "20rem",
        margin:"auto",
        
    }
    let divfile ={
        padding:"10px"
    }
    return(
       
        <div className="container text-center" style={divfile}>
            <div class="card" style={cardStyle}>
                <img src={profilepic} class="card-img-top"/>
                <div class="card-body">
                <p class="card-text">Name : Bhupinder</p>
                <p class="card-text">Btech CSE 2022</p>
                <p class="card-text">Ph.no. 7901926491</p>
                <p class="card-text">Guru Nanak Dev University</p>
                </div>
            </div>
            
        </div>
    )
}