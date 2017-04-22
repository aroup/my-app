import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import AboutPage from './components/AboutPage';
import BackPackSearch from './components/BackPackSearch';
// export default(
//   <Route path='/' component={App}>
//     <Route path="search" component={BackPackSearch}/>
//     <Route path="about" component={AboutPage}/>
//   </Route>
// )

export default(
  <Route path='/my-app/' component={App}>
    <Route path="/my-app/search" component={BackPackSearch}/>
    <Route path="/my-app/about" component={AboutPage}/>
  </Route>
)
