import React from 'react'
import{ connect } from 'react-redux'
const Todolist = (props) => {
    
    const { ListItem } = props
    console.log(ListItem,'parmeshwar')
    return(
       
        <div>
            {ListItem.map((i)=><li>{i.task}</li>)}
            {/* <div style={{width:"50%",margin:'auto'}}>
            <div style={{float:'right'}}>
            {formKey.map((i)=> <li><diiv>
                <div>{i.fname}</div>
                <div>{i.email}</div>
                <div>{i.pass}</div>
                </diiv></li>)}
            </div>
            
            <h3>this is a Todolist</h3>
            {TodoItem.map((i,index)=><li>
                <div>
                <div>{i.task}{i.des}dueDate{i.dueDate}{i.chack}</div>
                </div>
            <input type='checkbox' value='Yes'  name='check'  onChange={(ind)=>chackeItem(i)}/>complet
            <input type='checkbox' value='Yes'  name='check'  onChange={(ind)=>unChackItem(i)}/>incomplet
            <button onClick={()=>delet(index)}>Delet</button>
            </li>)} 
            </div> */}
            
        </div>
    )
}

const mapStateToProps = state => {
    return{
        ListItem:state.list 

    }
}

// const mapDispatcToProps = dispatch => {
//     return {   
//         chackeItem: val => dispatch({ type:'ITEM_CHACK',payload:val}),
//         unChackItem: val => dispatch({ type:'UNCHACK_CHACK',payload:val}),
//         delet: val => dispatch({ type:'DELET_ITEM',payload:val})
       
//     }
// }


export default connect(mapStateToProps)(Todolist)



//checked={i.task.checked}