import React from "react";

export default class ChangeTextArea extends React.Component {


    state = {
        editMode: false
    }

    changeNewTextPost () {
        debugger
        let  text = this.props.postRef.current.value
        this.props.changeNewTextPost(text)
    }

    activateEditMode () {
        this.setState({
            editMode:true
        })
    }
    deactivateEditMode () {
        this.setState({
            editMode:false
        })
    }

    render() {
        return this.state.editMode ? <div>
            <textarea onBlur={this.deactivateEditMode.bind(this)}
                      autoFocus={true}
                      onChange={this.changeNewTextPost.bind(this)}
                      name="new post"
                      placeholder="Add new post"
                      ref={this.props.postRef}
                      value={this.props.newTextPost}/>
        </div> : this.props.newTextPost ? <div onClick={this.activateEditMode.bind(this)}>{this.props.newTextPost}</div> :
            <div onClick={this.activateEditMode.bind(this)}>Click to activate edit mode</div>
    }
}