import React, {  Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users"
import Search from "./components/users/Search"
import Alert from "./components/layout/Alert"
import "./App.css";
import axios from "axios";

class App extends Component {


  // Cream un nou state
  state = {
    users: [],
    loading: false,
    alert: null

  }
  
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
searchUsers = async (text) => {

  this.setState({loading: true});
  const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);  
  this.setState({ users: res.data.items, loading: false});
  console.log(text);
};

clearUsers = () => {
  this.setState({ 
    // Ai grija la modul in care declari un ARRAy sa fie 0 !!!
    users: [],
    loading: false
    })
}

setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type : type }});

    // Facem ca ALERT sa ramana doar cateva secunde pe ecran !!!
    setTimeout( () => this.setState({alert: null}), 2000);
}

// render este life cycle method
  render() {
    // Destructing
    const { loading, users, alert } = this.state;
    
    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fab f-github" />
          <div className="container">
            <Alert alert={alert} />
            <Search 
                searchUsers={this.searchUsers}
                clearUsers = {this.clearUsers}
                showClear= {users.length > 0 ? true : false}
                setAlert = {this.setAlert} 
              />
            <Users loading={loading} users={users} />
          </div>        
      </div>
    );
  }
}

export default App;
