import React from 'react'
import { connect } from 'react-redux'

const LogInfo = (props) => {

    const { formKey } = props
    console.log(formKey,'login Details')
    return (
        <div>
            {formKey.map((i) => <li>
                <div>{i.fname}</div>
                <div>{i.email}</div>
                <div>{i.pass}</div>
                </li>)}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        //TodoItem:state.list,
        formKey:state.form
    }
}

export default connect(mapStateToProps)(LogInfo)