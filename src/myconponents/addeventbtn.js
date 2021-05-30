import React from 'react'

export default function addeventbtn(props) {

    return (
        <div className="text-end">
            <button className="btn btn-outline-danger m-3" onClick={props.addbutton}>{props.name}</button>
        </div>
    )
}
