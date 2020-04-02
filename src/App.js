import React from 'react'
import axios from 'axios'
import UserForm from "./UserForm"
import {BrowserRouter, Route} from 'react-router-dom'

function App (props){
    return(
            <BrowserRouter>
                    <div>
                    <Route path="/" component={UserForm}/>
                    
                    </div>
            </BrowserRouter>

    )
}
export default App