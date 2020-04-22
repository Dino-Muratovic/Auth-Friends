import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';


class FriendsList extends React.Component {
    state = {
        friends: []
    }

    componentDidMount(){
        this.getData();
    }

    //getData here
    getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then((res) => {
            //we drilled where we want to be
            // console.log(`response -->`, res.data)
            //now we need to set the data
            this.setState({friends: res.data})
            // console.log(`friends -->`, this.state.friends)
        })
        .catch (err => console.log(`There is an error`, err))
    }

    render(){
        return (
            <section>

                <AddFriend/>
               <h2>This is where friends should go:</h2> 
               {this.state.friends.map((friend) => {
                //    console.log(`this is a friend`, friend)
                    return (                        
                        <div key={friend.id}>
                            <h3>Name: {friend.name}</h3>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>                            
                        </div>
                    )

               })}
            </section>
        )
    }

}

export default FriendsList;