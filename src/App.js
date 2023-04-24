const Hello = ({course}) => {
  
  return (
    <div>
      <p>
        {course}
      </p>
    </div>
  )
}

const Content = () => {
  const tasks = [
    { name: 'Fundamentals of React', part: 1, exercises: 10},
    { name: 'Using props to pass data', part: 2, exercises: 7},
    { name: 'State of a component', part: 3, exercises: 14},
  ]
  return (
    <div>
      <p>{tasks[0].name}, part: {tasks[0].part}, exercises: {tasks[0].exercises}</p>
      <p>{tasks[1].name}, part:{tasks[1].part}, exercises: {tasks[1].exercises}</p>
      <p>{tasks[2].name}, part:{tasks[2].part}, exercises: {tasks[2].exercises}</p>
    </div>
  )
}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return (
    <div>
<p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
 
  return (
    <div>
      <Hello course={course}/>
      <Content />
      <Total />
    </div>
  )
}

export default App;
