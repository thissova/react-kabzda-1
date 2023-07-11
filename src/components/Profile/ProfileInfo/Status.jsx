import React from "react";

export default class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
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
        this.props.setStatus(this.state.status)
    }
    onChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
     }

    render() {
        return this.state.editMode ?
            <input onChange={this.onChange} onBlur={this.deactivateEditMode} autoFocus={true}
                   value={this.state.status}/> :
            <div onClick={this.activateEditMode}>{this.state.status || "-------"}{}</div>
    }
}