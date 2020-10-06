import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {

    // Cand avem de-a face cu o FORM in React, e bine sa-i atribuim STATE
    state = {
        // Obiecte, adica NUME : VALOARE
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired        
    }

    // Functie onChange, care are un event. 
    // Cand se modifica, setam valoarea lui INPUT exaget ce scrie acolo, adica e.target.value

    // in caz ca avem mai multe INPUT-uri (nume, prenume, email, etc ), folosim [e.target.name], adica facem referire la name="text"
    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    
    // ======> Daca nu am avea arrow function, daca am apela this.state.text va da eroare. Trebuie bind-uit this-ul in onSubmit.bind(this)
    onSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.text);
        this.props.searchUsers(this.state.text);
        this.setState({ text: ''});
    }

    render () {
        return (
            <div>
                <form onSubmit = {this.onSubmit} action="" className="form">
                    <input type="text" name="text" placeholder="Search users..." value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="search" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )        
    }
}



export default Search