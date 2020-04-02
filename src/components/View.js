import React from 'react'
import {connect} from 'react-redux'
import {findForm} from '../selector/findForm'
import {Link} from 'react-router-dom'

function View(props){
    
    const {_id,name,phone,email,skills,experience}=props.form||{}
    //console.log(_id)
    const handleClose=()=>{
        props.history.push('/admin')
    }

    return(
        <div>
            {props.form?(<div> <h2>{`${name} profile`}</h2>
            <p>Contact Number-{phone}</p>
            <p>Email-{email}</p>
            <p>Skills-{skills}</p>
            <p>Experience-{experience}</p></div>):(<div>Loading...</div>)}
            <button className="btn btn-outline-primary" onClick={handleClose}>Close</button>
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return {
        form:findForm(state.form,id)
    }
}
export default connect(mapStateToProps)(View)
