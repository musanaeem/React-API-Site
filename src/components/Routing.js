import React, { useEffect, useState } from 'react'
import {
    Route,
    Routes,
  } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import ProtectedAuthentication from './ProtectedAuthentication';
import ProtectedRoutes from './ProtectedRoutes';
import RegisterPage from '../pages/RegisterPage';
import Navbar from './Navbar';
import BioPage from '../pages/BioPage';
import BlogListPage from '../pages/BlogListPage';
import BlogPage from '../pages/BlogPage';
import UpdateOrCreate from '../pages/UpdateOrCreate';
import DeleteRecord from '../pages/DeleteRecord';
import { UserContext } from './UserContext';


const Routing = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(window.localStorage.getItem('username'));

  useEffect(() => {

      if (!window.localStorage.getItem('blogSiteUserLoggedIn'))
      {
          window.localStorage.setItem('blogSiteUserLoggedIn', false);
          setIsLoggedIn(false)
      }
      else{
          setIsLoggedIn(JSON.parse(window.localStorage.getItem('blogSiteUserLoggedIn')))
      }
    },[])

  const updateLoginState = value => {
      setIsLoggedIn(value)
  }

  return (
      <div>
          <Navbar  loginState={isLoggedIn}  changeLoginState = {updateLoginState}/>
        
          <UserContext.Provider value={{user, setUser}}>
              <Routes>
                  <Route element={<ProtectedAuthentication isLoggedIn={isLoggedIn}/> }>
                      <Route path='/login' element={<LoginPage  changeLoginState={updateLoginState}/> }/>
                      <Route path='/register' element={<RegisterPage />} />

                  </Route>

                  <Route element={<ProtectedRoutes isLoggedIn={isLoggedIn}/> }>
                      <Route path='/home' element={<HomePage/> }/>

                      <Route path='/bio' element={<BioPage changeLoginState={updateLoginState}/> } />
                      <Route exact path='/bio/add' element={<UpdateOrCreate  method='POST'  type='Bio'/>  } />
                      <Route exact path='/bio/edit' element={<UpdateOrCreate  method='PATCH'  type='Bio'/>  } />
                      <Route exact path='/bio/delete' element={<DeleteRecord  type='Bio'/>} />

                      <Route path='/blog' element={<BlogListPage changeLoginState={updateLoginState}/> }/>
                      <Route exact path='/blog/add' element={<UpdateOrCreate  method='POST'  type='Blog'/>  } />

                      <Route exact path='/blog/:id' element={<BlogPage changeLoginState={updateLoginState}/> }/>
                      <Route exact path='/blog/edit/:id' element={<UpdateOrCreate method='PUT'  type='Blog'/> }/>
                      <Route exact path='/blog/delete/:id' element={<DeleteRecord  type='Blog'/> }/>
                  </Route>
      
              </Routes>
          </UserContext.Provider>
      </div>
  )
}

export default Routing