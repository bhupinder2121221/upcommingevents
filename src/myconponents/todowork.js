import React from "react"
import "./todoelemet.css"
export default function Todowork({list,ondelete}){
    return (
        <div className="container-md todoelement" >
              <div class="card">
                <div class="card-header">
                    Work Id : {list.id}
                </div>
                <div class="card-body">
                    <h5 class="card-title">Place of work : {list.place}</h5>
                    <p class="card-text">work : {list.work}</p>
                    <button class="btn btn-danger btn-sm" onClick ={()=>{ondelete(list)}}>Delete</button>
                </div>
                </div>  
                <hr/>

          
        </div>
    )
}