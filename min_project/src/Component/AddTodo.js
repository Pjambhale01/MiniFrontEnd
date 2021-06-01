import React from 'react'
import { connect } from 'react-redux'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
const AddTodo = (props) => {
    const { register, errors, handleSubmit } = useForm()
    const [state,setSate] =useState([])
    const { AddTodoList } = props
    const onSubmission = e => {
        const date = new Date(`${e.target['date'].value} 00:00`)
        e.preventDefault()
        const todoObj = {
            task: e.target['task'].value,
            Discription: e.target['dis'].value,
            Date: date,
            chacked: false
        }
        AddTodoList(todoObj)
    }
   
    return (
        <div style={{width:'50%',margin:'auto'}}>
            <div style={{marginTop:'20px',backgroundColor:'teal',textAlign:'center'}}>
            <form onSubmit={(e) => handleSubmit(onSubmission(e))}>
                <div>
                    <label>task:</label>
                    <span><input type='text' name='task' ref={register({
                        required: { value: true, message: 'first name is a Required fild' }
                    })}></input></span>
                    {errors.task && (
                        <span style={{ color: 'red' }}>{errors.task.message}</span>
                    )}
                </div>
                <div>
                    <label>Disscription:</label>
                    <span><input type='text' name='dis' ref={register({
                        required: { value: true, message: 'first name is a Required fild' }
                    })}></input></span>
                    {errors.dis && (
                        <span style={{ color: 'red' }}>{errors.dis.message}</span>
                    )}
                </div>
                <div>
                    <label>dueDate</label>
                    <span><input type='date' name='date' ref={register({
                        required: { value: true, message: 'first name is a Required fild' }
                    })}></input></span>
                    {errors.date && (
                        <span style={{ color: 'red' }}>{errors.date.message}</span>
                    )}
                </div>
                <div>
                    <button type='submit'>submit</button>
                </div>
            </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        AddTodoList: val => dispatch({ type: 'ADD_ITEM', payload: val })
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)

