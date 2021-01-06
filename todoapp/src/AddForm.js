import React, {Component} from 'react';

class AddTodo extends Component {

    state = {
        content: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({content:''})
    }
    handleChange = (e) =>{
        this.setState({
            content: e.target.value
        })
        
    }


    render(){
        return (
            <div className ="">

                <form onSubmit={this.handleSubmit}>
                    <input type='text' onChange={this.handleChange} value= {this.state.content}/>
                    <button>Add To List</button>
                </form>

            </div>)}
}

export default AddTodo