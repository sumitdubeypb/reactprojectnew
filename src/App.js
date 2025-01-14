import NavbarPage from './NavbarPage';
import {ChangingCasePage} from './ChangingCasePage';
function App() {
  return (
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
