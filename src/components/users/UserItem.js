import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


// Folosim procesul numit: "Destructing". Extragem din map-ul care ne da "user", din Users.js ce avem nevoie.
const UserItem = ({user: {login, avatar_url, html_url}}) => {
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

    

        // Folosim procesul numit: "Destructing". Extragem din this.state ce avem nevoie.com
        //DUPA ce am modificat UserItem din clasa in functie, "props" va fi transmis ca si parametru, sus in functie => Eliminam this.
        
                // Asta o sa o mutam sus, ca si parametru!
        // const { login, avatar_url, html_url } = props.user;  
        
        

        return (
            <div className="card text-center">
               <img src={avatar_url} alt="" className="round-img" style={{width: "60px"}}/>
               <h3>{login}</h3>
               <div>
                   <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
               </div>
            </div>
        )
    }

// Atentie la propTypes si PropTypes !!!!


   UserItem.propTypes = {
       user: PropTypes.object.isRequired
   };


export default UserItem;
