import React from 'react';
import './GoalList.css'

// props is passing up all the props I have bundled in to the GoalList component 
const GoalList = (props) => {
  console.log(props.goals)
 return (
  <ul className="goal-list">
    
  </ul>
 )
}

export default GoalList