import React from "react";
import './Form.css';

class Form extends React.Component{
    constructor(props){
        super();
        this.state = {
            inputName: '',
            inputEmail: '',
            inputContact: '',
            inputDOB: ''
        }
    }

    onNameChange = (event) =>{
        this.setState({inputName: event.target.value});
    }

    onEmailChange = (event) =>{
        this.setState({inputEmail: event.target.value});
    }

    onContactChange = (event) =>{
        this.setState({inputContact: event.target.value});
    }

    onDateChange = (event) =>{
        this.setState({inputDOB: event.target.value});
    }

    validate = ({inputName, inputEmail, inputContact, inputDOB}) =>{
        if(
            inputName.length < 1 ||
            !this.validateEmail(inputEmail) ||
            inputContact.length < 10 ||
            inputDOB.length < 1
        ){
            return false;
        }
        return true;
    }

    validateEmail = (email) =>
    {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
        {
            return (true)
        }
        return (false)
    }


    onSubmit = () =>{
        if(!this.validate(this.state)){
            alert("Enter Proper Details Please!");
        }
        else{
            let user = {
                name: this.state.inputName,
                email: this.state.inputEmail,
                contact: this.state.inputContact,
                dob: this.state.inputDOB
            }
            this.props.loadUser(user);
        }
    }

    render(){
        let today = new Date().toISOString().substr(0, 10);
        return(
            <article className="form">
                <div className='formtitle'>
                    <h1>Enter Details</h1>
                </div>
                <div className='formitem'>
                    <label htmlFor='name'>Name </label>
                    <input 
                    id='name' 
                    type='text' 
                    placeholder='ex: John Doe'
                    onChange={this.onNameChange}></input>
                </div>
                <div className='formitem'>
                    <label htmlFor='email'>Email</label>
                    <input 
                    id='email' 
                    type='email' 
                    placeholder='ex: john@mail.com'
                    onChange={this.onEmailChange}></input>
                </div>
                <div className='formitem'>
                    <label htmlFor='contact'>Contact No</label>
                    <input 
                    id='contact' 
                    type='tel' 
                    pattern="[0-9]{10}" 
                    maxLength='10' 
                    placeholder='10-digit mobile number'
                    onChange={this.onContactChange}></input>
                </div>
                <div className='formitem'>
                    <label htmlFor='dob'>Date of Birth</label>
                    <input 
                    id='dob' 
                    type='date' 
                    max={today} 
                    onChange={this.onDateChange}></input>
                </div>
                <div className='formitem'>
                    <input 
                    type="submit" 
                    value="Submit"
                    onClick={this.onSubmit}></input>
                </div>
            </article>
        )
    }
}

export default Form;