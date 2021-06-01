import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'

const FormValid = (props) => {

    const { register, errors, handleSubmit } = useForm()
 
    const [state, setState] = useState({})
     const { LogInfo} = props
    const handleClick = (e) => {
        e.preventDefault()
        console.log(e)
    }
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const loginTo = () => {
        LogInfo(state)
        props.history.push('/landing')
    }
    console.log(state, 'input to state')
    return (
        <div style={{ width: '40%', margin: 'auto' }}>
            <div style={{ textAlign: 'center', backgroundColor: 'orange', border: '2px solid black' }}>
                <form onSubmit={handleSubmit(handleClick)}>

                    <div style={{ margin: '20px' }}>
                        <lable>Name:</lable>
                        <span><input type="text" name='fname' onChange={handleChange} ref={register({ required: { value: true, message: 'this fild is Required' } })}></input></span>
                        {errors.fname && (<span style={{ color: 'red' }}>{errors.fname.message}</span>)}
                    </div>
                    <div style={{ margin: '20px' }}>
                        <lable>Mobile:</lable>
                        <span><input type='text' name='mobile' onChange={handleChange} ref={register({ required: { value: true, message: 'this fild is Required' } })}></input></span>
                        {errors.mobile && (<span style={{ color: 'red' }}>{errors.mobile.message}</span>)}
                    </div>
                    <div style={{ margin: '20px' }}>
                        <lable>Email:</lable>
                        <span><input type="email" name='Email' onChange={handleChange} ref={register({ required: { value: true, message: 'this fild is Required' } })}></input></span>
                        {errors.Email && (<span style={{ color: 'red' }}>{errors.Email.message}</span>)}
                    </div>
                    <div style={{ margin: '20px' }}>
                        <lable>Password:</lable>
                        <span><input type='password' name='passd' onChange={handleChange} ref={register({ required: { value: true, message: 'this fild is Required' } })}></input></span>
                        {errors.passd && (<span style={{ color: 'red' }}>{errors.passd.message}</span>)}
                    </div>
                    <div>
                        <button type='submit' onClick={() => loginTo()}>Login</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        LogInfo: val => {dispatch({ type:'LOG_INFO',payload:val})}
    }
}


export default connect(null,mapDispatchToProps)(FormValid)