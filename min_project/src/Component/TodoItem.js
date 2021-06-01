import React from 'react'
import { connect } from 'react-redux'
const TodoItem = (props) => {

    const { TodoList, chacked, deletTask } = props
    console.log(TodoList, 'uhcjkbajajka')

    const DeletItem = (index) => {
        deletTask(index)
    }

    const handleChacked = index => {
        chacked(index)
    }
    return (
        <div style={{ width: '50%', margin: 'auto' }}>
            {TodoList &&
                <div style={{marginTop:'20px',backgroundColor:'yellow',textAlign:'center'}}>
                    {TodoList.map((item, index) =>
                        <li>
                            <input type='checkbox' chacked={item.chacked} onChange={() => { handleChacked(index) }} />
                            <span style={item.chacked ? { textDecorationLine: 'line-through' } : {}}>{`${item.task} : ${item.Discription} Planned :${new Date(item.Date)}00:00`}</span>
                            <button onClick={() => DeletItem(index)}>Delet</button>
                            {TodoList[index].Date < new Date() ? <div style={{ color: 'red' }}>Due date is passed</div> : <></>}
                        </li>)}
                </div>}
        </div>)
}

const mapStateToProps = state => {
    return {
        TodoList: state.list
    }
}
const mapDispatchToProps = dispatch => {
    return {
        deletTask: index => dispatch({ type: 'DELET_TASK', payload: index }),
        chacked: index => dispatch({ type: 'CHACKED_TASK', payload: index })
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)