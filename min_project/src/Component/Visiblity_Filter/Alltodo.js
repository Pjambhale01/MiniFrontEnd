import React from 'react'
import { connect} from 'react-redux'
const Alltodo = (props) => {
    const { AllItem } = props
    console.log(AllItem,'Alll todo')
    return(
        <div>
            <h3>this is All Todo</h3>
            {AllItem.map((i)=><li>{i.task}</li>)}
        </div>
    )
}
const mapStateToProps = state => {
    return{
        AllItem:state.list
    }
}
export default connect(mapStateToProps)(Alltodo)