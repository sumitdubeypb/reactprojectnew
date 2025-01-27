import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './modules/css/global.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Loginpage from './modules/auth/Loginpage.js';
import Registorpage from './modules/auth/Registorpage.js';
import Mainpage from './modules/dashboard/Mainpage.js';
import Landingpage from './modules/dashboard/Landingpage.js';
import Reactproperty from './modules/dashboard/Reactproperty.js';
import FeatchApipage from './modules/dashboard/FeatchApipage.js';
import Axiospage from './modules/dashboard/Axiospage.js';
import ReactDashboardChart from './modules/dashboard/ReactDashbordChart.js';
import Detailspage from './modules/dashboard/Detailspage.js';
import Errorpage from './modules/sharecomponent/Errorpage.js';
import Updateincrement from './modules/dashboard/Updateincrement.js';
import {ChangingCasePage} from './ChangingCasePage.js';
import ReduxPage from './modules/dashboard/ReduxPage.js';
import ReactPagination from './modules/dashboard/ReactPagination.js';
import { Provider } from 'react-redux';
import {mydatastore} from './modules/reduxstore/store.js';
const LasyPage = React.lazy(() => import('./modules/dashboard/LasyPage.js'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <Provider store={ mydatastore}>
    <BrowserRouter>
       <Routes>
       <Route path="" element={<Loginpage/>} > </Route>
       <Route exact path="/registor" element={<Registorpage/>} /> 
      
        <Route exact path="dashboard" element={<Mainpage/>}>
              <Route path="" element={<Landingpage/>} />
              <Route path="props" element={<Reactproperty/>} />
              <Route path="datafetch" element={<FeatchApipage/>} />
              <Route path="axiospage" element={<Axiospage/>} />
              <Route path="updateincrement" element={<Updateincrement/>} />
              <Route path="reduxpage" element={<ReduxPage/>} />
              <Route path="axiospage/details/:id" element={<Detailspage/>} />
              <Route path="reactdashboardchart" element={<ReactDashboardChart/>} />
              <Route path="changingcase" element={<ChangingCasePage/>} > </Route>
              <Route path="pageination" element={<ReactPagination/>} > </Route>
              <Route path="lazypage" element={<Suspense  fallback={ <div className="lazyload" row="7">Page Loading....</div>}><LasyPage></LasyPage></Suspense>} > </Route>
              <Route path='*' element={<Errorpage/>}/>
         </Route>
        
         <Route path='*' element={<Errorpage/>}/>
                 {/* <App /> */}

                
               
           
        </Routes>
   </BrowserRouter>
   </Provider>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

