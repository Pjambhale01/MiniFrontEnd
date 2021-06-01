import React, { useState } from 'react'
import { connect } from 'react-redux'
const VisiblityFilter = (props) => {
    const { Visiblity } = props
    const [type, setType] = useState('')
    const Completed = Visiblity.filter(item => item.chacked == true)
    const Incompleted = Visiblity.filter(item => item.chacked == false)
    return (
        <div style={{ width: '50%', margin: 'auto' }}>
            <div style={{ marginTop: '20px', backgroundColor: 'yellow', }}>
                <div>
                    <lable>Visiblity Filter</lable>
                    <select name='filter' onChange={(e) => setType(e.target.value)}>
                        <option value=''></option>
                        <option value='All'>All</option>
                        <option value='Completed'>Complet</option>
                        <option value='Incompleted'>Incomlete</option>
                    </select>
                </div>

                <div>
                    {type === 'All' ? <div>
                        <h3>All task</h3>
                        {Visiblity.map((item, index) =>
                            <ul>
                                <li>
                                    Task:{item.task}Discription:{item.Discription}Date:{String(item.Date)}
                                </li>
                            </ul>)}
                    </div> : <></>}
                    {type === 'Completed' ? <div>
                        <h3>Completed task</h3>
                        {Completed.map((item, index) =>
                            <ul>
                                <li>
                                    Task:{item.task}Discription:{item.Discription}Date:{String(item.Date)}
                                </li>
                            </ul>)}
                    </div> : <></>}
                    {type === 'Incompleted' ? <div>
                        <h3>Incomlete task</h3>
                        {Incompleted.map((item, index) =>
                            <ul>
                                <li>
                                    Task:{item.task}Discription:{item.Discription}Date:{String(item.Date)}
                                </li>
                            </ul>)}
                    </div> : <></>}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        Visiblity: state.list
    }
}

export default connect(mapStateToProps)(VisiblityFilter)