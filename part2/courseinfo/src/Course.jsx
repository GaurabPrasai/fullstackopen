const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ parts }) => (
  <p>
    <b>
      total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
    </b>
  </p>
);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </>
);

const Course = ({ course }) => {
  return (
    <>
      {course.map((singleCourse) => (
        <div key={singleCourse.id}>
          <Header course={singleCourse.name} />
          <Content parts={singleCourse.parts} />
          <Total parts={singleCourse.parts} />
        </div>
      ))}
    </>
  );
};

export default Course;
