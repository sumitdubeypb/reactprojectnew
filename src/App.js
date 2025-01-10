import logo from './logo.svg';
// import './App.css';
import NavbarPage from './NavbarPage';
import {ChangingCasePage} from './ChangingCasePage'
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //     Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target=""
    //       rel="noopener noreferrer"
    //       >
    //       Learn React Sumit Dubey
    //     </a>
    //     <header/>
    // </div>
    <>
     <div>
        <NavbarPage title="Title" text="Home" about="About" link="Link" dropdown= "Dropdown"/>
        
     </div>
     <div className="container">
           <ChangingCasePage pageName="ChangingCasePage" heading="Enter the text to analyze ~"/>
     </div>
     <div >
         
     </div>
    </>
  );
}
export default App;
