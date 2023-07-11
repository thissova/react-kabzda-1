import React, {useState} from "react";

const Status = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.setStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (<div>
            {editMode ?  <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}
                    value={status}/> :
            <div onClick={activateEditMode}>{props.status || "-------"}</div>}
        </div>
    )
}

export default Status