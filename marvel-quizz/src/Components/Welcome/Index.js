import React, { useState, useContext, useEffect, Fragment } from 'react'
import FirebaseContext from '../Firebase/Context'
import { useNavigate } from 'react-router'

import Logout from '../Logout/Index'
import Quiz from '../Quiz/Index'


const Welcome = () => {

  const history = useNavigate()

  const [userSession, setUserSession] = useState(null);
  const [userData, setuserData] = useState({})

  const firebase = useContext(FirebaseContext)
  

  useEffect(() => {
    let listerner = firebase.auth.onAuthStateChanged(user => { //si un user est autentifier nous allons le setUser, en revanche si aucun user n'est authentifier nous allons les rediriger vers la page daccueil
      user ? setUserSession(user) : history('/')
    })
    // uid = userId dans la database firebase
    if (userSession !== null) {

      firebase.user(userSession.uid)
        .get()
        .then(doc => {
          if (doc && doc.exists) {
            const myData = doc.data();
            console.log(myData)
            setuserData(myData)
          }

        })
        .catch((error) => {

        })

    }
    return () => {
      listerner()
    }
  }, [userSession])




  return userSession === null ? (
      <Fragment>
        <div className="loader" ></div>
        <p>Loading ... </p>
      </Fragment>
    ) : (
      <div className='quiz-bg'>
        <div className='container'>
          <Logout />
          <Quiz userData={userData} />
        </div>

      </div>

  )



}

export default Welcome