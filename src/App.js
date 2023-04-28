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
  <table>
  <tr>
  <td>{props.text}</td> 
  <td>{props.value}</td>
  </tr>
  </table>
  </div>

const Statistics = (props) => {

  return (
  <>
    <div>
     <table>
      <tr>
        <td>average</td>
        <td>{props.sum}</td>
      </tr> 

       <tr>  
        <td>positive</td>
        <td>{props.percent}</td>
    </tr>
</table>
</div>
</>
  )
}

const StatisticLine = (props) => {

  let total = props.good + props.bad + props.neutral
  return ( 
  <> 
  <div>
    <table>
      <tr>
      <td>Total:</td> 
      <td>{total}</td>
      </tr>
    </table>
  </div> 
  </>
  )
}


const App = () => {

  const title = "give feedback";
  const content = "statistics";

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let sum = () => {

        let average = (good + neutral + bad)/3

          if (average <= 0) 
          {
            return <div>No feedback given</div>
          } 
          
          else {
             return<div>{average}</div>
          }
        
         
  }

  let percent = () => {
    let per = 100/(good + neutral + bad)
     if (per <= 0) 
          {
            return <div>No feedback given</div>
          } 
          else {
             return<div>{per} %</div>
          }
  }


 

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
      <Statistics sum={sum()} percent={percent()}/>
      <StatisticLine good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App;
