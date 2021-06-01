import { useState } from 'react'
import { useForm } from 'react-hook-form'
//import { connect } from 'react-redux'

function FormValid(props) {

    const [temp, setTemp] = useState({})

    const { register, errors, handleSubmit } = useForm()
    //const { formItem } = props
    const handleclick = (val) => {
        console.log(val)
    }
    const handleChangr = (e) => {
        setTemp({ ...temp, [e.target.name]: e.target.value })
    }
    const addForm = () => {     
            props.history.push('/Visfilter')  
    }
    return (
        <div>
            <div style={{ width: '50%', margin: 'auto', }}>
                <form style={{ width: '50%', margin: 'auto', border: '2px solid blue' }} onSubmit={handleSubmit(handleclick)} >
                    <label>Name</label>
                    <span><input type='text' onChange={handleChangr} name='fname' ref={register({ required: { value: true, message: 'required' } })}></input>
                    </span>
                    {errors.fname && (<span style={{ color: 'red' }}>{errors.fname.message}</span>)}<br></br>
                    <label>email</label>
                    <span><input type='text' onChange={handleChangr} name='email' ref={register({ required: { value: true, message: 'required' } })}></input>
                    </span>
                    {errors.email && (<span style={{ color: 'red' }}>{errors.email.message}</span>)}<br></br>
                    <label>password</label>
                    <span><input type='password' onChange={handleChangr} name='pass' ref={register({ required: { value: true, message: 'required' } })}></input>
                    </span>
                    {errors.pass && (<span style={{ color: 'red' }}>{errors.pass.message}</span>)}<br></br>

                    <div>
                        <button type='submit' onClick={() => addForm()}>Edit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
// const mapDispatchToProps = dispatch => {
//     return {
//         formItem: val => { dispatch({ type:'FORM', payload: val }) }
//     }
// }
export default FormValid