import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class AddFriend extends React.Component {

    state = {
        newFriend: {
            name:'',
            age:'',
            email:''
        }
    }

    //Handle change
    handleChange = (e) => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [e.target.name] : e.target.value,
            }
        })
    }

    addFriend = (e) => {
        // e.preventDefault();
            axiosWithAuth()
            .post("/api/friends", this.state.newFriend)
            .then((res) => {
                 this.props.history.push("/friendslist");
            })
            .catch (err => console.log(`there was an error`, err))                 
    }



    render() {
        return (
            <form onSubmit={this.addFriend}>

                    <input
                    type="name"
                    name="name"
                    placeholder="Name"
                    value={this.state.newFriend.name}
                    onChange={this.handleChange}
                    />
                    <br/>

                    <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={this.state.newFriend.age}
                    onChange={this.handleChange}
                    />
                    <br/>


                    <input
                      type="email"
                      name="email"
                      placeholder="Email"    
                      value={this.state.newFriend.email}  
                      onChange={this.handleChange}                
                      />
                      <br/>

                    <button>Add Friend</button>
                </form>    
        )
    }
     

}

export default AddFriend;