
import React,{useState} from "react"
import "./addevent.css"

export default function AddTodo(props) {
    const [worktitle,setworktitle] = useState("");
    const [workdes,setworkdes] = useState("");
    const [nullalert,setnullerror] = useState(false);
    function onSubmit(e){
        e.preventDefault();
        if (worktitle==="" || workdes===""){
            setnullerror(true);
        }
        else{
            setnullerror(false)
            props.adding(worktitle,workdes);
        }
    }

    return (
        
        <form onSubmit={onSubmit}>
            {nullalert? <div class="alert alert-primary d-flex align-items-center" role="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                        <div>
                            All Fields are compulsory.
                        </div>
                        </div> :""}
        <div className="container-lg p-2 addevent">
            <div className="container">
                <h3 className="text-center">Add Events</h3>
            </div>
        <div class="mb-5">
            <label for="exampleFormControlInput1" class="form-label text-start   ">Place Of Event :</label>
            <input value={worktitle} type="text" onChange ={(e)=>{setworktitle(e.target.value)}} class="form-control" id="exampleFormControlInput1" placeholder="Amritsar"/>
        </div>
            <div class="mb-5">
                <label for="exampleFormControlTextarea1" class="form-label">Event Detail:</label>
                <textarea value={workdes} onChange={(e)=>{setworkdes(e.target.value)}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="text-center">
            <button className="btn btn-light addbtn">Add Topic</button>
            </div>
        </div>
        </form>
    )
}