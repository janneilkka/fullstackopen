import { useState } from "react";

const StatisticsText = (props) => <td>{props.text}</td>;
const StatisticsValue = (props) => <td>{props.value}</td>;

const Statistics = (props) => {
  if (props.averageNumber.length === 0) {
    return <p>No feedback yet</p>;
  }
  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr>
            <StatisticsText text="Total good reviews:" />
            <StatisticsValue value={props.good} />
          </tr>
          <tr>
            <StatisticsText text="Total neutral reviews:" />
            <StatisticsValue value={props.neutral} />
          </tr>
          <tr>
            <StatisticsText text="Total bad reviews:" />
            <StatisticsValue value={props.bad} />
          </tr>
          <tr>
            <StatisticsText text="Average of all today:" />
            <StatisticsValue value={eval(props.averageNumber.join("+")) / props.averageNumber.length} />
          </tr>
          <tr>
            <StatisticsText text="Positive feedback today in %: " />
            <StatisticsValue value={(props.good / props.allFeedback) * 100} />
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>;

const AnecdoteButton = (props) => <button onClick={props.handleClick}>{props.text}</button>;

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [averageNumber, setAverage] = useState([]);
  const [allFeedback, setAll] = useState(0);
  const [selected, setSelected] = useState(0);

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const handleGoodFeedback = () => {
    const updatedGoodFeedback = good + 1;
    setGood(updatedGoodFeedback);
    setAll(updatedGoodFeedback + neutral + bad);
    setAverage(averageNumber.concat(1));
  };

  const handleNeutralFeedback = () => {
    const updatedNeutralFeedback = neutral + 1;
    setNeutral(updatedNeutralFeedback);
    setAll(updatedNeutralFeedback + good + bad);
    setAverage(averageNumber.concat(0));
  };
  const handleBadFeedback = () => {
    const updatedBadFeedback = bad + 1;
    setBad(updatedBadFeedback);
    setAll(updatedBadFeedback + good + neutral);
    setAverage(averageNumber.concat(-1));
  };

  const setNextAnecdote = () => {
    function randomAnecdote(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    setSelected(randomAnecdote(1, 5));
  };
  // setSelected(updateAnecdote);
  // setSelected(averageNumber.concat(-1));

  return (
    <div>
      <div>
        <h1>Please give feedback</h1>
        <Button handleClick={handleGoodFeedback} text="Good" />
        <Button handleClick={handleNeutralFeedback} text="Neutral" />
        <Button handleClick={handleBadFeedback} text="Negative" />
        <br />
        <Statistics allFeedback={allFeedback} good={good} neutral={neutral} bad={bad} averageNumber={averageNumber} />
      </div>
      <div>
        <br />
        <AnecdoteButton handleClick={setNextAnecdote} text="Show random anecdote" />
        <p>{anecdotes[selected]}</p>
      </div>
      <br />
    </div>
  );
};

export default App;
