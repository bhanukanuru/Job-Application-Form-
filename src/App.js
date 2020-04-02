import React from 'react'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Form from './components/Form'
import Admin from './components/Admin'
import View from './components/View'

function App(){
  return(
    <BrowserRouter>
       <div>
          <Link to="/"></Link>|
         

          <Switch>
            <Route path="/" component={Form} exact={true} />  
            <Route path="/admin" component={Admin} exact={true} />
            <Route path="/admin/:id" component={View}/>
          </Switch>
         

       </div>
    </BrowserRouter>
   
  )
}

export default App;
