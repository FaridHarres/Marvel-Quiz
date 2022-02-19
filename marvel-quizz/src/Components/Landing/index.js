import React, { useRef, useEffect, useState, Fragment } from 'react'

const Landing = () => {

    const refWolverine = useRef(null)
    // console.log(refWolverine) sont curent est null


    useEffect(() => {
        refWolverine.current.classList.add('startingImg')
        setTimeout(() => {
            refWolverine.current.classList.remove('startingImg')
            setBtn(true)
        }, 2000)

    }, [])// en mettant un Array vide cela veut dire que cette fonction va etre appelé seulement au moment du montage de la page


    const [btn, setBtn] = useState(false)

    //si le btn = true
    const displayBtn =  btn && (
        <Fragment>
            <div className='leftBox'>
                <button className='btn-welcome'>inscription</button>
            </div>
            <div className='rightBox'>
                <button className='btn-welcome'>connexion</button>
            </div>
        </Fragment>

)

    //nous avons pu mettre dans le current, tout le main

    return (
        <main ref={refWolverine} className='welcomePage'>
            {displayBtn}
        </main>
    )
}

export default Landing