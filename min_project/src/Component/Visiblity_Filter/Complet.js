import React from 'react'
import { connect} from 'react-redux'
import {Link } from 'react-router-dom'

const Comlete = (props) => {
    const {isChacked} = props
    console.log(isChacked,'visiblity filter')
    return(
        <div>
            <div style={{width:"50%",margin:'auto'}}>
            <h3>this is a Comlete</h3>
            {isChacked.map((i)=><li>{i}</li>)}
            </div>
        </div>
    )
}
const mapStateToProps = state =>{
    return{
     isChacked:state.chaked? state.chaked :[]
    }
}
export default connect(mapStateToProps)(Comlete)