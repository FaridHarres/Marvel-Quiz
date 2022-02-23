import React, {useState, useEffect, useContext} from 'react'
import FirebaseContext from '../Firebase/Context'


const Logout = () => {

    const firebase = useContext(FirebaseContext)

    const [checked, setChecked] = useState(false);
    useEffect(() => {
      if (checked){
        //   console.log("déconnexion")
          firebase.signoutuser()
      }

    }, [checked, firebase])
    

    const handleChange =(e)=>{
        setChecked(e.target.checked)
    }


  return (
    <div className='logoutContainer'>
        <label className='switch'>
            <input 
            onChange={handleChange}
                type="checkbox"
                checked={checked}
            />
            <span className='slider round'></span>
        </label>
        
    </div>
  )
}

export default Logout