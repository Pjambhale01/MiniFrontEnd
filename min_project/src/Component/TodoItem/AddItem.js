import React from 'react'
import { connect } from 'react-redux'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const AddItem = (props) => {

    const { register, errors, handleSubmit } = useForm()
    const { list, UpdateItem } = props
    const [tempItem, setTempItem] = useState([])
    
    return (
        <div>
            <form onSubmit={handleSubmit()}>
                <div style={{ width: "50%", margin: 'auto' }}>
                    <h3>this is a AddItem</h3>
                    <lable>Add Todo:</lable>
                    <input type='text' name='input' value={tempItem.task} onChange={(e, index) => setTempItem({ ...tempItem, task: e.target.value })} /><br></br>
                    <lable>Disscription:</lable>
                    <input type='text' name='input' value={tempItem.des} onChange={(e, index) => setTempItem({ ...tempItem, des: e.target.value })} /><br></br>
                    <lable>Due Date:</lable>
                    <input type='date' name='input' value={tempItem.dueDate} onChange={(e, index) => setTempItem({ ...tempItem, dueDate: e.target.value })} /><br></br>
                    <button onClick={(index) => { UpdateItem(tempItem, index); setTempItem({}) }}>Edit</button>
                </div>
            </form>
          
        </div>
    )
}
const mapStateToProps = state => ({
    list: state.list ? state.list : []
})
const mapDispatchToProps = dispatch => {
    return {
        UpdateItem: val => dispatch({ type: 'ADD_iTEM', payload: val })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)






































