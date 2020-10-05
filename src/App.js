import React, { Fragment, Component} from 'react';
import './App.css';

class App extends Component {
  // render este life cycle method

  foo = () => "Bars";

  render() {
    const name ="John Doe";
    const loading = false;

    const showName=true;

    // if(loading) {
    //   return <h4>Loading..</h4>
    // }

    // const foo = () => "Bar";
    return (
      // pentru a scapa de div-ul ala cu className="app". Fragment functioneaza ca un ghost. Nu apare in DevTools pe chrome
      <div className="App">
        <h1>My App</h1>
        { loading ? <h4>Loading</h4> : <h1>Hello {showName && name} </h1>}      
      </div>
    );
  }
  

  }
  
export default App;
