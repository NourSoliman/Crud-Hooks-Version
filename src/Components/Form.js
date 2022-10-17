import React from 'react'
const Form = (props) => {
    return (
        <form onSubmit={props.addCourse}>
            <input type="text" onChange={props.handleChange}></input>
            <button>Add Course</button>
        </form>
    )
}
export default Form