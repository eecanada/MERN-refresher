import React from 'react';
import GoalList from './components/GoalList'
import './App.css'; 

const App = () => {
  const courseGoals = [
    {id: 'cg1', text:'Finish the Course'},
    {id: 'cg2', text:'Learn all course main topic'},
    {id: 'cg3', text:'Build more MERN projects'}
  ]

  return (
  <div className="course-goals">
    <h2> Course Goals </h2>
    <GoalList goals={courseGoals}/>
  </div>
  )
}
export default App;
