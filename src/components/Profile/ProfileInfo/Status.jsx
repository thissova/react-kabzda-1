import React from "react";

export default class Status extends React.Component {
    state = {
        editMode: false
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
    }

    render() {
        return this.state.editMode ?
            <input onBlur={this.deactivateEditMode} autoFocus={true} value={this.props.status}/> :
            <div onClick={this.activateEditMode}>{this.props.status}</div>
    }
}