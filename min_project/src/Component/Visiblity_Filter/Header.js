import React from 'react'
import { Link} from 'react-router-dom'

const Header = () => {
    return(
        <div>
            <div style={{width:'50%',margin:'auto'}}>
            <Link style={{margin:'10px'}} to ='/complet'>Comlited</Link>
            <Link style={{margin:'10px'}}to = '/incomplet'>Incomplet</Link>
            <Link style={{margin:'10px'}}to = '/alltodo'>All Todo</Link>
            </div>
        </div>
    )
}
export default Header