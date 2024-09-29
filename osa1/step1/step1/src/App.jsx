const parts = [
  { part: "Fundamentals of React", exercise: 10 },
  { part: "Using props to pass data", exercise: 7 },
  { part: "State of a component", exercise: 14 },
];

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const Content = () => {
  return (
    <>
      <Part part={parts[0].part} exercise={parts[0].exercise} />
      <Part part={parts[1].part} exercise={parts[1].exercise} />
      <Part part={parts[2].part} exercise={parts[2].exercise} />
    </>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total exercise1={parts[0].exercise} exercise2={parts[1].exercise} exercise3={parts[2].exercise} />
    </div>
  );
};

export default App;
