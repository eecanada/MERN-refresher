// JSX lets me write HTML in my React app

// WHAT MAKES UP A REACT COMPONENT? - A react component can be one of two things, A function that returns JSX or it can be a JS class that has a render method. 

//FUNCTION COMPONENT
const app = () => {
  return <h1> hi </h1>
}

//CLASS COMPONENT
class App extends React.Component {
  render () {
    return <h1> hi</h1>
  }
}

// css classes do not exist in React JSX, so use className="" instead
// every component should just do one thing.
// I have to import React from react every time I create a new component in order to use JSX


//PROPS- PARENT TO CHILD COMPONENT 
// To pass data from component to component we use props 
// Here the App component is adding the prop goals to the GoalList component in order to pass it data. The prop goals holds a refference to my courseGoals array in my App component 
<GoalList goals={courseGoals}/>


//HOW TO OUTPUT ARRAY OF DATA AS JSX ELEMENTS?
//map JS objects to an array of JSX elements
//when I map through the id, have to map through the array of objects and return it in JSX. I must also assign each <li> element a key={{goal.id}}
const GoalList = (props) => {
  return (
   <ul className="goal-list">
     {props.goals.map((goal)=>{
       return <li key={goal.id}> {goal.text} </li>
     })}
   </ul>
  )
 }

 // preventDefault() --> prevents the browser default from sending a request to the backend

 //PASS DATA FROM CHILD TO PARENT COMPONENT
 //Pass a callback function from the parent component to the child

// From PARENT
 const addNewGoalHandler = (newGoal) => {
  courseGoals.push(newGoal)
  console.log(courseGoals)
}
 <NewGoal  onAddGoal={addNewGoalHandler}/>

 //FROM CHILD 
 const NewGoal = (props) => {
  const addGoalHandler = (event) => {
    event.preventDefault()


    const newGoal = {
      id: Math.random().toString(),
      text: 'my new goal'
    }
    props.onAddGoal(newGoal)
  }
