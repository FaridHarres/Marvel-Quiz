import React,{Component} from 'react'
import Levels from '../Levels/Index';
import ProgressBar from '../ProgressBar/Index';
import { QuizMarvel } from '../quizMarvel/Index';

class Quiz extends Component {

  state={
    levelNames: ["debutant", "confirme","expert"],
    quizLevel: 0,
    maxQuestions: 10,
    storedQuestions: [],
    question: null,
    options: [],
    idQuestion:0
  }

  loadQuestion = (quizz) =>{
   const fetchedArrayQuiz =  QuizMarvel[0].quizz[quizz]
      if(fetchedArrayQuiz.length >= this.state.maxQuestions){
        // jenleve les reponse et je garde le reste
       const newArray=  fetchedArrayQuiz.map(({answer,...keepRest})=>keepRest)
       this.setState({
        storedQuestions: newArray
      })
      }else{
        console.log("pas assez de qst")
      }
  }

  //methode de cycle de vie
  componentDidMount(){
    this.loadQuestion(this.state.levelNames[this.state.quizLevel])
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.storedQuestions !== prevState.storedQuestions){
      
      
      this.setState({
        question: this.state.storedQuestions[this.state.idQuestion].question,
        options : this.state.storedQuestions[this.state.idQuestion].options
        

      })

    }
  }

  render(){

    // const {pseudo}=this.props.userData;

    const displayoption = this.state.options.map((option, index)=>{
      return(
<p key={index}className='answerOptions'>{option}</p>
      )
    })
    return (
      <div>
        <Levels/>
        <ProgressBar/>

      <h2> {this.state.question}</h2>
      {displayoption}
   
      <button className='btnSubmit'>Suivant</button>
        
      </div>
    )
  }
}

export default Quiz