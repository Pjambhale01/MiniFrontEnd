import React from 'react'
import { connect} from 'react-redux'
import { Link} from 'react-router-dom'

const HeaderTodo = (props) => {

    
    return(
        <div>
            
            <div style={{width:'50%',height:'100px',margin:'auto',backgroundColor:'green'}}>
            <Link to ='/'></Link>   
            <Link style={{margin:'20px'}} to='/AddTodo'>AddItem</Link>
            <Link style={{margin:'20px'}} to ='/Todolist'>Todolist</Link>
            <Link style={{margin:'20px'}} to ='/visiblity'>Visiblity</Link>
            </div>
        </div> 
    )
}


export default HeaderTodo
