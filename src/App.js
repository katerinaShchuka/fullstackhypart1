import { useState } from 'react';

const Header = ({title}) => {

  return <div>
    <h2>{title}</h2>
  </div>
}

const Button = (props) => {
  const {handleClick, text} = props
 return (
<button onClick={handleClick}>{text}</button>
 )}

const Display = (props) => 
<div>
  {props.text} {props.value}
  </div>

const App = () => {

  const title = "give feedback";
  const content = "statistics";

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>
      <Header title={title} />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header title={content} />
      <Display text="good" value={good}/>
      <Display text="neutral" value={neutral}/>
      <Display text="bad" value={bad}/>
    </div>
  )
}

export default App;
