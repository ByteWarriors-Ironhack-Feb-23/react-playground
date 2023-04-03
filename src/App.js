import ReactPlayer from 'react-player';

import ironhackLogo from "./assets/logo-ironhack-blue.png"
import './App.css';
import Header from "./components/Header";
import User from "./components/User";
import Footer from "./components/Footer";

function App() {

  const theId = "main-container";

  const hello = "Hello";
  const amount = 30;

  const user = {
    name: "bob",
    surname: "smith"
  }

  const h1Style = {
    color: "blue",
    textDecoration: "underline",
    backgroundColor: "#d5d5d5"
  }

  function capitalizeFirstLetter(str) { //alice
    return str[0].toUpperCase() + str.slice(1); //Alice
  }

  return (
    <div id={theId} className="App">

      <Header subtitle="i love pizza" />

      <img src={ironhackLogo} alt="ironhack logo" />

      {/* this is a comment in JSX */}

      <h1 style={h1Style}>
        {hello + " World"}
      </h1>

      <h2>Number of movies: {amount * 2}</h2>
      <h2>Hi, {user.name.toUpperCase()} {user.surname.toLocaleUpperCase()}</h2>
      <h2>Hi, {capitalizeFirstLetter(user.name)} {capitalizeFirstLetter(user.surname)}</h2>

      <br /><hr /><br />

      <User userName="alice" />
      <User userName="bob" />
      <User userName="charly"  />

      <br /><hr /><br />


      <ReactPlayer url="https://vimeo.com/channels/top/22439234" playing={false} />

      
      <br /><hr /><br />

      <Footer>
        <p>Copyleft: Byte Warriors, 2023</p>
      </Footer>
      

    </div>
  );
}





export default App;
