import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './views/login';
import MailBox from './views/mailBox';

function routes() {
    return(
        <BrowserRouter>
            <div>
                <Route exact path='/' component={Login}/>
                <Route exact path='/mailbox' component={MailBox}/>                
            </div>
        </BrowserRouter>
    )
} 

export default routes;