const course = "Half Stack application development";
const part1 = {
  name: "Fundamentals of React",
  exercises: 10,
};
const part2 = {
  name: "Using props to pass data",
  exercises: 7,
};
const part3 = {
  name: "State of a component",
  exercises: 14,
};

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
      <Part part={part1.name} exercise={part1.exercises} />
      <Part part={part2.name} exercise={part2.exercises} />
      <Part part={part3.name} exercise={part3.exercises} />
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
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total exercise1={part1.exercises} exercise2={part2.exercises} exercise3={part3.exercises} />
    </div>
  );
};

export default App;
