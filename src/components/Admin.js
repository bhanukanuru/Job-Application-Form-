import React from 'react'
import {connect} from 'react-redux'
import {startGetForms,startUpdateForms} from '../Actions/adminAction'
// import FrontEnd from './frontEnd'
// import NodeJs from './nodeJs'
// import MEAN from './mean'
// import FullStack from './fullStack'
class Admin extends React.Component{
    constructor(){
        super()
        this.state={
            frontend:true,
            nodeJs:false,
            mean:false,
            full:false,
            job:'Front-End Developer'
        }
    }
    frontend=()=>{
        this.setState({
            frontend:true,
            nodeJs:false,
            mean:false,
            full:false,
            job:'Front-End Developer'
        })
    }
    nodeJs=()=>{
        this.setState({
            frontend:false,
            nodeJs:true,
            mean:false,
            full:false,
            job:'Node.js Developer'
        })
    }
    meanStack=()=>{
        this.setState({
            frontend:false,
            nodeJs:false,
            mean:true,
            full:false,
            job:'MEAN Stack Developer'
        })
    }
    fullStack=()=>{
        this.setState({
            frontend:false,
            nodeJs:false,
            mean:false,
            full:true,
            job:'FULL Stack Developer'
        })
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
        if(this.props.form.length==0){
            this.props.dispatch(startGetForms())
        }
        const a1=this.props.form.filter(person=>person.jobTitle==this.state.job)
        return(
            <div>
                <h2>Admin Dashboard</h2>
                <button onClick={this.frontend} className="btn btn-outline-primary">Front End Developer</button>
                <button onClick={this.nodeJs} className="btn btn-outline-primary">Node Js Developer</button>
                <button onClick={this.meanStack} className="btn btn-outline-primary">MEAN stack Developer</button>
                <button onClick={this.fullStack} className="btn btn-outline-primary">FULL stack Developer</button>

                <h2>{this.state.job}</h2>
                <p>Listing Candidates Applied as a {`${this.state.job}`}</p>
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
                       {a1.map(person=>{
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
              
              
                {/* {this.state.frontend==true}
                {this.state.nodeJs==true}
                {this.state.mean==true}
                {this.state.full==true}
                 */}
                
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    
    return {
        form:state.form
    }
}

export default connect(mapStateToProps)(Admin)

