import React, { Component } from 'react'
import Levels from '../Levels/Index';
import ProgressBar from '../ProgressBar/Index';
import { QuizMarvel } from '../quizMarvel/Index';

class Quiz extends Component {

  state = {
    levelNames: ["debutant", "confirme", "expert"],
    quizLevel: 0,
    maxQuestions: 10,
    storedQuestions: [],
    question: null,
    options: [],
    idQuestion: 0,
    btnDisabled: true,
    userAnswer: null,
    score: 0
  }

  storedDataRef = React.createRef();

  loadQuestion = (quizz) => {
    const fetchedArrayQuiz = QuizMarvel[0].quizz[quizz]
    if (fetchedArrayQuiz.length >= this.state.maxQuestions) {
      this.storedDataRef.current = fetchedArrayQuiz
      // jenleve les reponse et je garde le reste
      const newArray = fetchedArrayQuiz.map(({ answer, ...keepRest }) => keepRest)
      this.setState({
        storedQuestions: newArray
      })
    } else {
      console.log("pas assez de qst")
    }
  }

  //methode de cycle de vie
  componentDidMount() {
    this.loadQuestion(this.state.levelNames[this.state.quizLevel])
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.storedQuestions !== prevState.storedQuestions) {


      this.setState({
        question: this.state.storedQuestions[this.state.idQuestion].question,
        options: this.state.storedQuestions[this.state.idQuestion].options


      })

    }
    if(this.state.idQuestion !== prevState.idQuestion){
      this.setState({
        question: this.state.storedQuestions[this.state.idQuestion].question,
        options: this.state.storedQuestions[this.state.idQuestion].options,
        userAnswer: null,
        btnDisabled: true,

      })
    }
  }
  nextQuestion=()=>{
    if(this.state.idQuestion === this.state.maxQuestions -1){

    }else{
      this.setState((prevState)=>({
        idQuestion: prevState.idQuestion + 1

      }))
    }

    const goodAnswer = this.storedDataRef.current[this.state.idQuestion].answer;
    if(this.state.userAnswer === goodAnswer){
      this.setState((prevState)=>({
        score: prevState.score +1
        //il faut allimenter le component did update
      }))
    }

  }

  submitAnswer = (option) => {
    this.setState({
      userAnswer: option,
      btnDisabled: false
    })
  }
  render() {

    // const {pseudo}=this.props.userData;

    const displayoption = this.state.options.map((option, index) => {
      return (
        <p key={index} className={`answerOptions ${this.state.userAnswer === option ? "selected" : null}`} onClick={() => this.submitAnswer(option)}>
          {option}
        </p>
      )
    })
    return (
      <div>
        <Levels />
        <ProgressBar />

        <h2> {this.state.question}</h2>
        {displayoption}

        <button className='btnSubmit' disabled={this.state.btnDisabled} onClick={this.nextQuestion}>Suivant</button>

      </div>
    )
  }
}

export default Quiz