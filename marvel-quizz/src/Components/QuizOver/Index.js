import React, { Fragment, useEffect, useState } from 'react'
import {GiTrophyCup} from 'react-icons/gi'
import Loader from '../Loader/Index';
import Modal from '../Modal/Index';

const QuizOver = React.forwardRef((props, ref) => {
    //  console.log(props)
    //  console.log(ref)

    const { levelNames, score, maxQuestions, quizLevel, percent, loadLevelQst } = props;

    const [asked, setasked] = useState([])
    //console.log(asked)
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        setasked(ref.current)
    }, [ref])

    const averaGrade = maxQuestions / 2

    const showModal =(id)=>{
        setOpenModal(true)
    }
    const hideModal =()=>{
        setOpenModal(false)
    }

    //si pas la moyenne
    if(score<averaGrade){
        setTimeout(()=>{
            loadLevelQst(quizLevel)
        }, 3000)

    }

    const decision = score >= averaGrade ? (
        <Fragment>
            <div className='stepsBtnContainer'>
                {quizLevel < levelNames.length ?
                    (
                        <Fragment>
                            <p className='successMsg'> <GiTrophyCup size='50px'/>Bravo, passez au niveau suivant</p>
                            <button className='btnResult success' onClick={()=>loadLevelQst(quizLevel)}>Niveau suivant</button>
                        </Fragment>

                    ) : (
                        <Fragment>
                            <p className='successMsg'>Bravo,Vous etes un expert</p>
                            <button className='btnResult gameOver' onClick={()=>loadLevelQst(0)}>Accueil</button>
                        </Fragment>
                    )}
            </div>
            <div className='percentage'>
                <div className='progressPercent'>Réussite: {percent}%</div>
                <div className='progressPercent'>Note : {score}/{maxQuestions}</div>

            </div>
        </Fragment>
    ) : (
        <Fragment>
            <div className='stepsBtnContainer'>
                <p className='failureMsg'>Oups, vous avez echoué</p>
            </div>
            <div className='percentage'>
                <div className='progressPercent'>Réussite: {percent}%</div>
                <div className='progressPercent'>Note : {score}/{maxQuestions}</div>
            </div>

        </Fragment>
    )


    const questionAnswer = score >= averaGrade ? (
        asked.map((question) => {
            return (
                <tr key={question.id}>
                    <td>
                        {question.question}
                    </td>
                    <td>
                        {question.answer}
                    </td>
                    <td>
                        <button className='btnInfo' onClick={()=>showModal(question.heroId)}>info</button>
                    </td>
                </tr>)
        })
    ) : (
        <tr>
            <td colspan="3">
               <Loader loadingMsg={"pas de réponse"} styling={{textAlign: 'center', color: 'red'}}/>
               
            </td>
        </tr>
    )



    return (

        <Fragment>
            {decision}
            <hr />

            <p>Les réponses aux questions posées: </p>
            <div className='answerContainer'>
                <table className='answers'>
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Reponse</th>
                            <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questionAnswer}
                    </tbody>
                </table>

            </div>
            <Modal showModal={openModal} hideModal={hideModal}>
                <div className='modalHeader'>    
                <h2>Titre</h2>              
                </div>
                <div className='modalBody'>    
                <h3>titre2</h3>               
                </div>
                <div className='modalFooter'> 
                <button className='modalBtn'>Fermer</button>
                </div>
            </Modal>

        </Fragment>
    )
})



export default React.memo(QuizOver)