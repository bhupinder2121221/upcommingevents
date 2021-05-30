import React from 'react'
import Todowork from "./todowork"
import nodata from "./nodata.png"
export default function todolist(props) {
  
    
    return (
        <div className="container">
            <h1 className="text-center">Upcoming Events</h1>
            {props.todo.length==0 ?
            <div className="text-center">  
               
                <img className="nodatapic" src={nodata}/>
                 </div>       :
                props.todo.map((element)=>{
                return <Todowork list ={element} key={element.id} ondelete = {props.ondelete}/>
                })
            }
            
        </div>
    )
}
