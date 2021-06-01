import React from 'react'
import { connect} from 'react-redux'
import {Link } from 'react-router-dom'

const inComplet = (props) => {
     
    const { Unchack,} = props
    console.log(Unchack,'incomplet item')
    return(
        <div>
           {Unchack.map((i)=><div>{i}</div>)}
        </div>
    )
}

const mapStateToProps=state => {
    return {
        Unchack:state.unChack ? state.unChack : []   
    }
}

export default connect(mapStateToProps)(inComplet)