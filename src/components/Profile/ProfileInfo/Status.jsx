import React from "react";

export default class Status extends React.Component {
    state = {
        editMode: false,
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.setStatus(this.props.status)
    }
    onChange = (e) => {
        this.props.setStatus(e.currentTarget.value)
    }

    render() {
        return this.state.editMode ?
            <input onChange={this.onChange} onBlur={this.deactivateEditMode} autoFocus={true}
                   value={this.props.status}/> :
            <div onClick={this.activateEditMode}>{this.props.status || "-------"}{}</div>
    }
}