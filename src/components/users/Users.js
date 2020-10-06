import React from 'react'
import UserItem from "./UserItem"
import Spinner from "../layout/Spinner"
import PropTypes from "prop-types"

// o schimbam in function

// destructing, scoatem din props users si loading
const Users = ({users, loading}) => {


    // === Nu mai avem nevoie de "state" ca-l avem in APP

    // state = {
    //     users: [
    //         {
    //             login: "mojombo",
    //             id: 1,                
    //             avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",                
    //             html_url: "https://github.com/mojombo",                
    //           },
    //           {
    //             login: "defunkt",
    //             id: 2,               
    //             avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",                
    //             html_url: "https://github.com/defunkt",                
    //           },
    //           {
    //             login: "pjhyett",
    //             id: 3,                
    //             avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
    //             url: "https://api.github.com/users/pjhyett",
    //             html_url: "https://github.com/pjhyett",
    //           }
    //     ]
    // }

    if(loading) {
        return <Spinner />
    }
    else {
        return (
            // folosim doar un singur set de paranteze!
            <div style={userStyle}>           
            {/* Folosim o LISTA ( adica MAP, care parcurge un array si il modifica ), asa se numeste in React */}     
                {users.map(user => (
                    <UserItem key={user.id} user = { user } />   // User = { user } trimite tot user-ul mai departe. 
                    // Pasam ca un PROP (user) lui UserItem. In UserItem o sa folosim "this.prop.user"
                ))}
            </div>
        )

    }   
}


// Declaram mereu afara din clasa!!!
const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: "1rem"
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Users
