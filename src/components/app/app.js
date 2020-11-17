import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../header';
import Navbar from '../navbar';
import Profile from '../profile';
import Dialogs from '../dialogs';
// import Footer from '../footer';
import News from '../news';

import './app.css';

const App = (props) => {
    return (
        <div className="container"> 
            <Header/>
            <div className="row">
              <div className="col-3">
                <Navbar/>
              </div>
              <div className="col-9">
                <Route path='/dialogs' render = {() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path='/profile' render = {() =>  <Profile state={props.state.profilePage}/>} />
                <Route path='/news' component={ News } />
              </div>
            </div>
            {/* <Footer/>  */}
        </div>
    );
};
export default App;
