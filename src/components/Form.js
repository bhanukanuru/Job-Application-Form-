import React from 'react'
import {Link} from 'react-router-dom'
import {startPostPerson} from '../Actions/adminAction'
import {connect} from 'react-redux'


class Form extends React.Component{
    constructor(){
        super()
        this.state={
           name:'',
           email:'',
           phone:'',
           skills:'',
           jobTitle:'',
           experience:'' ,
           submit:false
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleJobTitle=(e)=>{
        this.setState({
            jobTitle:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.setState({
            submit:true
        })
        const formData={
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            skills:this.state.skills,
            jobTitle:this.state.jobTitle,
            experience:this.state.experience
        }
      
        this.props.dispatch(startPostPerson(formData))
        
        }

    

    render(){
        return(
          
            <div className="container">
                  <Link to="/admin">Admin</Link>
                <h3>Application Form</h3>
                <form className="form-group" onSubmit={this.handleSubmit} >
                    <label>Full Name</label>
                    <input type="text" value={this.state.name}  name="name" onChange={this.handleChange} />
                    <br/>
                    <label>Email address</label>
                    <input type="text" value={this.state.email}  name="email" onChange={this.handleChange} />
                    <br/>
                    <label>Phone Number</label>
                    <input type="text" value={this.state.phone}  name="phone" onChange={this.handleChange} />
                    <br/>
                    <label>Applying for Job</label>
                    <select value={this.state.jobTitle} onChange={this.handleJobTitle}>
                        <option>---select---</option>
                        <option>Front-End Developer</option>
                        <option>Node.js Developer</option>
                        <option>MEAN Stack Developer</option>
                        <option>FULL Stack Developer</option>
                    </select>
                    <br/>
                    <label>Experience</label>
                    <input type="text" value={this.state.experience} name="experience" onChange={this.handleChange} />
                    <br/>
                    <label>Technical Skills</label>
                    <br/>
                    <textarea rows="6" cols="50" value={this.state.skills} name="skills" onChange={this.handleChange}></textarea>
                    <br/>
                    <input  type="submit" value={this.state.submit==true?"submitting":"Send Application"}/>

                    
                </form>
            </div>
        )
    }
}

export default connect()(Form)