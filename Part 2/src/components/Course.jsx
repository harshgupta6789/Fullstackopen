const Header = (props) => {
  const { course } = props;
  return (
    <div>
      <h2>{course}</h2>
    </div>
  );
};

const Content = (props) => {
  const { course } = props;
  return (
    <div>
      {course.map((c) => (
        <div key={c.id}>
          {c.name} {c.exercises}
        </div>
      ))}
    </div>
  );
};

const Sum = (props) => {
  const { parts } = props;
  return (
    <div>
      <b>
        total of{" "}
        {parts.reduce(function (sum, p) {
          return sum + p.exercises;
        }, 0)}{" "}
        exercises
      </b>
    </div>
  );
};

const Course = (props) => {
  const { course } = props;
  return (
    <div>
      <Header course={course.name} />
      <Content course={course.parts} />
      <Sum parts={course.parts}></Sum>
    </div>
  );
};

export default Course;