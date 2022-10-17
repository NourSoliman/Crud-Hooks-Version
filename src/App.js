import React, { useState } from 'react'
import Items from './Components/Items';
import Form from './Components/Form';
function App() {
  const Languages = [
    { name: `HTML` },
    { name: `CSS` },
    { name: `JavaScript` },
    { name: `React` }
  ] 
  const [courses, setCourses] = useState(Languages);
  const [inputValue, setInputValue] = useState(``)
  const handleChange = (e) => {
    console.log(e.target.value)
    setInputValue(
      {name : e.target.value}
    )
  }
  const addCourse = (e) => {
    e.preventDefault();
    setCourses(
      [...courses,inputValue]
    )
    console.log(courses)
  }
  const handleDelete = (index) => {
    console.log(`working`)
    courses.splice(index , 1)
    setCourses([...courses])
    console.log(courses);
  }
  const updateForm = (index , value) => {
    let course = courses[index]
    course[`name`] = value;
    setCourses(
    [...courses]
    )
    console.log(courses);
  }

  const CoursesList = courses.map((course, index) => {
    return <li key={index}><Items details={course} details1={inputValue} handleDelete={handleDelete} index={index} updateForm = {updateForm}/></li>
  })
  return (
    <div className="App">
      <h2>Crud</h2>
      <Form courses={courses}  addCourse={addCourse} handleChange={handleChange}/>
      <ul>{CoursesList}</ul>
    </div>
  );
}
export default App;
