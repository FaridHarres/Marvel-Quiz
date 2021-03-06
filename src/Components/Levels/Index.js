import React, { useEffect, useState } from 'react'
import Stepper from 'react-stepper-horizontal/lib/Stepper'

const Levels = ({quizLevel, levelNames}) => {
  const [levels, setLevels] = useState([])

  useEffect(() => {
  
    const quizSteps = levelNames.map((level)=>({title: level.toUpperCase()}))
    setLevels(quizSteps)
    
  }, [levelNames])

  // console.log(levels)
  
  return (
    <div className="levelsContainer" style={{background: 'transparent'}}>
      
     
      <Stepper steps={ levels } activeStep={ quizLevel } circleTop={0} activeTitleColor={'#d31017'} activeColor={'#d31017'} completeTitleColor={'green'} completeColor={'green'} completeBarColor={'#d31017'} barStyle={'dashed'} size={45} circleFontSize={20}/>
    

    </div>
  )
}

export default React.memo(Levels)