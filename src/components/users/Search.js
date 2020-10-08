import React, {useState, useContext} from "react";
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'


const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);


    // // Cand avem de-a face cu o FORM in React, e bine sa-i atribuim STATE
    // state = {
    //     // Sintaxa in interior: sunt obiecte, deci NUME : VALOARE
    //     text: ''
    // };

    // Cum functioneaza useState:
    // Destructure it: preluam ce vrem, adica text si folosim o metoda, ii dam ce nume vrem, setText si dupa ii dam lui useState valoarea dorita, adica ''
    const [text, setText] = useState('');

    // Functie onChange, care are un event. 
    // Cand se modifica, setam valoarea lui INPUT exaget ce scrie acolo, adica e.target.value

    // in caz ca avem mai multe INPUT-uri (nume, prenume, email, etc ), folosim [e.target.name], adica facem referire la name="text"
    // Pentru a avea o functie intr-o alta functie tre' s-o declaram cu "const"
   
    // Asta se modifica in:
    // const onChange = (e) => this.setState({[e.target.name]: e.target.value});
    const onChange = (e) => setText(e.target.value);
    
    // ======> Daca nu am avea arrow function, daca am apela this.state.text va da eroare. Trebuie bind-uit this-ul in onSubmit.bind(this)
   const  onSubmit = (e) => {

        // la FORM avem action="", ala e default-ul lui. Pentru a preveni sa se intample asta, adica atunci cand dau click sa NU faca nimic, apelez preventDefault.
        e.preventDefault();
        // Asta se modifica in:
        // if(this.state.text === '' ) {
        if(text === '' ) {
            alertContext.setAlert('Please enter something', 'light')
        }
        else {

            githubContext.searchUsers(text);
            // punem input-ul sa fie GOL
            setText('');

        }

    }

    
        // const {showClear, clearUsers} = this.props;

        return (
            <div>
                <form onSubmit = {onSubmit} action="" className="form">
                    {/* // Asta se modifica in:  */}
                    {/* <input type="text" name="text" placeholder="Search users..." value={this.state.text} onChange={this.onChange} /> */}
                    <input type="text" name="text" placeholder="Search users..." value={text} onChange={onChange} />
                    <input type="submit" value="search" className="btn btn-dark btn-block"/>
                </form>

            {/* && face un "AND" si verifica daca e TRUE expresia */}
                {githubContext.users.length > 0 && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>}
            </div>
        )        
    
}



export default Search