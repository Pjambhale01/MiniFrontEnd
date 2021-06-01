import React from 'react'
import {Link } from 'react-router-dom'

const Header = () => {
    return(
        <div>
            
            <div style={{margin:'auto',backgroundColor:'teal',width:'50%',height:'60px' }}>
            {/* <Link style={{margin:'20px',}} to ='/'>login</Link>  */}
            <Link style={{margin:'20px',}} to ='/AddTodo'>Add Tdo</Link> 
            <Link style={{margin:'20px',}} to ='/Todolist'>TodoList</Link>
            <Link style={{margin:'20px',}} to ='/login'>login</Link>
            <Link style={{margin:'20px',}} to ='/Visfilter'>VisiblityFilter</Link>
          
            </div>
        </div>
    )
}

export default Header