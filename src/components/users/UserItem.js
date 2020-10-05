import React, { Component } from 'react'

export class UserItem extends Component {

    //Constructor este o metoda care mereu actioneaza cand componenta se incarca
    // constructor() {
    //     super(); // este obligatoriu sa chemam super, altfel va da eroare      
    //     this.state = {
    //         id: "id",
    //         login: "mojombo",
    //         avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    //         html_url: "https://github.com/mojombo"
    //     }
    // }

    // ---------> INSA, putem sa NU folosim un constructor

    // state = {
    //             id: "id",
    //             login: "mojombo",
    //             avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    //             html_url: "https://github.com/mojombo"
    //         }

    render() {

        // Folosim procesul numit: "Destructing". Extragem din this.state ce avem nevoie.com
        const {login, avatar_url, html_url  } = this.props.user;

        return (
            <div className="card text-center">
               <img src={avatar_url} alt="" className="round-img" style={{width: "60px"}}/>
               <h3>{login}</h3>
               <div>
                   <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
               </div>
            </div>
        )
    }
}

export default UserItem
