import React  , {Fragment , useState , useRef}from 'react'
const  Items= (props) => {
    const inputRef = useRef(null)
    const [toggle , setToggle] = useState(false)
    const renderForm = () => {
        return (
                <Fragment><span>{props.details.name}</span>
                <button onClick={()=>props.handleDelete(props.index)}>Delete</button>
                <button onClick={()=>toggleFunction()}>Edit</button></Fragment>
        )
    }
    const toggleFunction = () => {
        setToggle({toggle:!toggle})
    }
    const reRenderForm =() => {
        return (
            <form onSubmit={updateCourseItems}>
            <input type="text" ref={inputRef}  defaultValue={props.details.name}></input>
            <button type='submit'>Update Input</button>
            </form>
        )

    }
    const updateCourseItems = (e) => {
        e.preventDefault();
        props.updateForm(props.index , inputRef.current.value);
        setToggle(false)
        console.log(inputRef);
    }   
    return (
        <Fragment>
            {toggle ? reRenderForm() : renderForm()}
        </Fragment>
    )
}
export default Items;