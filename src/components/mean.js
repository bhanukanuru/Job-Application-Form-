import React from 'react'
import {startUpdateForms} from '../Actions/adminAction'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
class MEAN extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    handleView=(id)=>{
        console.log(id)
         this.props.history.push(`/admin/${id}`)
    }
    handleShortlist=(id)=>{
        const formData={
            status:'shortlisted'
        }
        this.props.dispatch(startUpdateForms(formData,id))
    }
    handleReject=(id)=>{
        const formData={
            status:'rejected'
        }
        this.props.dispatch(startUpdateForms(formData,id))
    }


    render(){
        const Mean=this.props.form.filter(person=>person.jobTitle=='MEAN Stack Developer')
        return(
            <div>
                  <h2>MEAN stack Developer</h2>
                <p>Listing Candidates Applied for MEAN Stack</p>
                  <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Technical Skills</th>
                            <th>Experience</th>
                            <th>Applied Date</th>
                            <th>View Details</th>
                            <th>Update Application Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       {Mean.map(person=>{
                           return(
                               
                                 <tr key={person._id}>
                                    <td>{person.name}</td>
                                    <td>{person.skills}</td>
                                    <td>{person.experience}</td>
                                    <td>{parseInt(person.createdAt)}</td>
                                    <td><button className="btn btn-primary" onClick={()=>{this.handleView(person._id)}}>View Details</button></td>
                                    {person.status=="applied"?( <td><button  className="btn btn-success" onClick={()=>{this.handleShortlist(person._id)}}>Shortlisted</button><button className="btn btn-danger" onClick={()=>{this.handleReject(person._id)}}>Rejected</button></td>):person.status=="shortlisted"?(<td><button className="btn btn-success">Shortlisted</button></td>):(<td><button  className="btn btn-danger">Rejected</button></td>)}
                                   
                                 </tr>
                            
                           )
                       })}
                    </tbody>
                </table> 
            </div>
        )
    }

}
const mapStateToProps=(state)=>{
    return{
        form:state.form
    }
}
export default withRouter(connect(mapStateToProps)(MEAN))
