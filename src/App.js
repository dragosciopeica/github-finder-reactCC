import React, { Fragment } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User"
import Home from "./components/pages/Home"
import NotFound from "./components/pages/NotFound"
import Alert from "./components/layout/Alert"
import About from "./components/pages/About"

import GithubState from './context/github/GithubState'

import "./App.css";
import GithbutState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";


const App = () =>  {


  // Cream un nou state
  //Schimbam state-ul folosind useState

  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});
  // const [repos, setRepos] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [alert, setAlert] = useState(null);

  // state = {
  //   users: [],
  //   user: {},
  //   repos: [],
  //   loading: false,
  //   alert: null,

  // }
  
  // ======> putem sa NU mai avem nevoie sa afisam toate conturile, acum ca avem search-ul


  // componentDidMount este life cycle method
// async componentDidMount() {
//   // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
//   // Asta functioneaza de fiecare data cand componenta se incarca
//   // console.log(123);
  
//   // Facem un request la API

//   // Axios functioneaza pe baza "Promise-urilor", deci folosim ".then"
//   // axios.get("https://api.github.com/users").then( res => console.log(res.data));

//   // =====>  SAU, in loc de ".then",  putem folosi async / await 

//   // Asa schimbam starea ( state -ul ) la un obiect, cu setState!
//   this.setState({ loading: true});

//   // Adaugam client_id si client_secret sa nu ramanem fara request-uri la GITHUB. Folosim `` sa putem concatena cele doua
//   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

//   // Dupa ce am primit datele, ii dam lui users datele din API si punem loading false ( spinner se opreste )
//   this.setState({ users: res.data, loading: false});
// }


// Search Github Users
// asa iau Props-urile din alte Componente
// Folosim tot un GET de la Github, asa ca tot async / await
// Asemanator cu cel de sus, diferenta este ca datele sunt in "data.items"

// Search Users il mutam in GithubState.js

// const searchUsers = async (text) => {

//   // setState({loading: true});
//   setLoading(true);
//   const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);  
  
//   // this.setState({ users: res.data.items, loading: false});
//   setUsers(res.data.items);
//   setLoading(false);

//   console.log(text);
// };

//Get a single Github User

// const getUser = async (username) => {
//   // this.setState({loading: true});
//   setLoading(true);
//   const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);  
//   // this.setState({ user: res.data, loading: false});
//   setUser(res.data);
//   setLoading(false);
// }


// const getUserRepos = async (username) => {
//   // this.setState({loading: true});
//   setLoading(true);
//   const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);  
//   // this.setState({ repos: res.data, loading: false});
//   setRepos(res.data);
//   setLoading(false);
// }


// const clearUsers = () => {

//   // this.setState({ 
//   //   // Ai grija la modul in care declari un ARRAy sa fie 0 !!!
//   //   users: [],
//   //   loading: false
//   //   })

//   setUsers([]);
//   setLoading(false);

// }

// const showAlert = (msg, type) => {
//     // this.setState({ alert: { msg: msg, type : type }});
//     setAlert({msg: msg, type : type})
//     // Facem ca ALERT sa ramana doar cateva secunde pe ecran !!!
//     // setTimeout( () => this.setState({alert: null}), 2000);
//     setTimeout( () => setAlert(null), 2000);
// }

// render este life cycle method, eliminam ca acu este o functie

    // Destructing
    // const { repos, loading, users, user, alert } = this.state;
    
    return (
      <GithbutState>
        <AlertState>
      {/* // Pentru a folosi ROUTER tre' sa inglobam tot in <Router></Router> */}
      <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fab f-github" />
            <div className="container">
              <Alert />
              <Switch>
                
                {/* <Route exact path="/"  */}
                {/* render={ props => ( */}
                  {/* // <Fragment> */}
                    {/* <Search 
                      // searchUsers={searchUsers}
                      // clearUsers = {clearUsers}
                      // showClear= {users.length > 0 ? true : false}
                      // setAlert = {showAlert} 
                    />
                    <Users /> */}
                  {/* </Fragment> */}
                {/* )}/> */}

                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/user/:login" component={User}/>
                <Route component={NotFound}/>
                
                {/* // render= {props => ( */}
                  {/* // <User  */}
                    {/* {...props } 
                    // getUser={getUser} 
                    // user={user} 
                    // loading={loading} 
                    // getUserRepos = {getUserRepos}
                    // repos={repos} />
                // )}/> */}
              </Switch>             
            </div>        
        </div>
      </Router>
      </AlertState>
      </GithbutState>
    );
 
}

export default App;
