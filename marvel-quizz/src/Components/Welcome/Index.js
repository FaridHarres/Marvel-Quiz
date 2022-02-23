import React, { useState, useContext, useEffect } from 'react'
import FirebaseContext from '../Firebase/Context'
import { useNavigate  } from 'react-router'

import Logout from '../Logout/Index'
import Quiz from '../Quiz/Index'


const Welcome = () => {

  const history = useNavigate()

  const [userSession, setUserSession] = useState(null);

  const firebase = useContext(FirebaseContext)

  useEffect(() => {
    let listerner =  firebase.auth.onAuthStateChanged(user=>{ //si un user est autentifier nous allons le setUser, en revanche si aucun user n'est authentifier nous allons les rediriger vers la page daccueil
      user ? setUserSession(user) : history('/')
    })

  
    return () => {
      listerner()
    }
  }, [])
  



  return userSession === null ? (
    <fragment>
      <div className="loader" ></div>
      <p>Loading ... </p>
    </fragment>
  ) : (
    <div className='quiz-bg'>
      <div className='container'>
        <Logout />
        <Quiz />
      </div>

    </div>

  )



}

export default Welcome