import React from 'react';
import './GoalList.css'

// props is passing up all the props I have bundled in to the GoalList component 
const GoalList = (props) => {
 return (
  <ul className="goal-list">
    {props.goals.map((goal)=>{
      return <li key={goal.id}> {goal.text} </li>
    })}
  </ul>
 )
}

export default GoalList