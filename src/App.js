import logo from './logo.svg';
import './App.css';
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Nav} from "./Nav";
import {Main} from "./Main";

function App() {
  return (
      <app className="App">
        <Header/>
        <Nav/>
        <Main/>
        <Footer/>
      </app>
  );
}

export default App;
