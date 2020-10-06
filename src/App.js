import React, {  Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users"
import Search from "./components/users/Search"
import "./App.css";
import axios from "axios";

class App extends Component {


  // Cream un nou state
  state = {
    users: [],
    loading: false

  }
  
  // ======> putem sa NU mai avem nevoie sa afisam toate conturile, acum ca avem search-ul


  // componentDidMount este life cycle method
async componentDidMount() {
  // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
  // Asta functioneaza de fiecare data cand componenta se incarca
  // console.log(123);
  
  // Facem un request la API

  // Axios functioneaza pe baza "Promise-urilor", deci folosim ".then"
  // axios.get("https://api.github.com/users").then( res => console.log(res.data));

  // =====>  SAU, in loc de ".then",  putem folosi async / await 

  // Asa schimbam starea ( state -ul ) la un obiect, cu setState!
  this.setState({ loading: true});

  // Adaugam client_id si client_secret sa nu ramanem fara request-uri la GITHUB. Folosim `` sa putem concatena cele doua
  const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  // Dupa ce am primit datele, ii dam lui users datele din API si punem loading false ( spinner se opreste )
  this.setState({ users: res.data, loading: false});
}


// Search Github Users
// asa iau Props-urile din alte Componente
// Folosim tot un GET de la Github, asa ca tot async / await
// Asemanator cu cel de sus, diferenta este ca datele sunt in "data.items"
searchUsers = async (text) => {

  this.setState({loading: true});
  const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);  
  this.setState({ users: res.data.items, loading: false});
  console.log(text);
}


// render este life cycle method
  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fab f-github" />
          <div className="container">
            < Search searchUsers={this.searchUsers} />
            <Users loading={this.state.loading} users={this.state.users} />
          </div>
        <h1>My App</h1>
      </div>
    );
  }
}

export default App;
