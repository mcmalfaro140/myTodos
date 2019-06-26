import React, { Component} from 'react'

export class AddTodo extends Component {
    state ={
        title: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value})
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <div class="input-group mb-3">
                    <input type="text" name="title" class="form-control" placeholder="Add a new task" aria-label="Recipient's username" aria-describedby="button-addon2" value={this.state.title} onChange={this.onChange}></input>
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="submit" id="button-addon2">Add Todo</button>
                    </div>
                </div>
                
            </form>
        )
    }
}

export default AddTodo