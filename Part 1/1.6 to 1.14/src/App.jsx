import { useState } from 'react'

const Header = (props) => {
  return (
    <div><h1>{props.text}</h1></div>
  )
}

const MyButton = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticsLine = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.text}</td>
        <td>{props.count}</td>
      </tr>
    </tbody>
  )
}

const Statistics = (props) => {
  const goodLabel = "good", neutralLabel = "neutral", badLabel = "bad"
  const avgLabel = "average", positiveLabel = "positive"
  
  if(props.average == 0 && props.positive == 0)
    return (<>
              <div>No feedback given</div>
            </>
    )
  else
    return (
      <>
        <table>
          <StatisticsLine text = {goodLabel} count = {props.good}></StatisticsLine>
          <StatisticsLine text = {neutralLabel} count = {props.neutral}></StatisticsLine>
          <StatisticsLine text = {badLabel} count = {props.bad}></StatisticsLine>
          <StatisticsLine text = {avgLabel} count = {props.average}></StatisticsLine>
          <StatisticsLine text = {positiveLabel} count = {props.positive + " %"}></StatisticsLine>
        </table>
      </>
    )
}

const Exercise1 = () => {
  const headerText = "give feedback", headerText2 = "statistics"
  const goodLabel = "good", neutralLabel = "neutral", badLabel = "bad"

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1);

  const increaseNeutral = () => setNeutral(neutral + 1);

  const increaseBad = () => setBad(bad + 1);

  let average = (good+neutral+bad)/3;
  let positive = (good/(good+neutral+bad))*100;
  if (Object.is(positive, NaN)) positive = 0;

  return (
    <div>
      <Header text={headerText}></Header>
      
      <MyButton handleClick={increaseGood} text={goodLabel}></MyButton>
      <MyButton handleClick={increaseNeutral} text={neutralLabel}></MyButton>
      <MyButton handleClick={increaseBad} text={badLabel}></MyButton>
      
      <Header text={headerText2}></Header>

      <Statistics good={good} neutral={neutral} bad={bad} average={average} positive={positive}></Statistics>
    </div>
  )
}

const Exercise2 = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [majority, setMajority] = useState(0)

  const refreshAnecdote = () => {
    let min = 0, max = anecdotes.length;
    let random = Math.floor(Math.random() * (max - min) + min);
    setSelected(random)
  }

  const vote = () => {
    let votesCopy = votes.slice();
    votesCopy[selected] += 1;
    if(votesCopy[selected] > votesCopy[majority])
      setMajority(selected)
    setVotes(votesCopy)
  }
  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
      </div>
      <div>has {votes[selected]} votes</div>
      <button onClick={vote}>vote</button>
      <button onClick={refreshAnecdote}>next anecdote</button>
      <div>
        <h1>Anecdote with most votes</h1>
        {anecdotes[majority]}
      </div>
      <div>has {votes[majority]} votes</div>
    </>
  )
}

const Exercise = (props) => {
  if(props.exercise == 1)
    return (<Exercise1></Exercise1>)
  else
    return (<Exercise2></Exercise2>)
}

const App = () => {

  const [exercise, setExercise] = useState(1)
  
  const handleExerice1 = () => {
    if(exercise != 1)
      setExercise(1)
  }

  const handleExerice2 = () => {
    if(exercise != 2)
      setExercise(2)
  }
  

  return (
    <>
      <button onClick={handleExerice1}>Exercise 1.6-1.11</button>
      <button onClick={handleExerice2}>Exercise 1.12-1.16</button>

      <Exercise exercise={exercise}></Exercise>
    </>
  )
}

export default App