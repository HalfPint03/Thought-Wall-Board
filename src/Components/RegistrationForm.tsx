import styled from 'styled-components'
import { useState } from 'react';
import { Link } from "react-router-dom";

function RegistrationForm(){
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFirstname = (event: any) => {
        setFirstname(event.target.firstname);
    };
    const handleLastname = (event: any) => {
        setLastname(event.target.lastname);
    }
    const handleUsername = (event: any) => {
        setUsername(event.target.username);
    }
    const handleEmail = (event: any) => {
        setEmail(event.target.email);
    }
    const handlePassword = (event: any) => {
        setPassword(event.target.password);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
    };

    const Form = styled.form`
    
    `
    const Input = styled.input`
    
    `
    const Button = styled.button`
    
    `
    return (
        <>
        <h1>create user</h1>
        <Form>
            <label htmlFor='firstname'>Firstname</label>
            <Input type='text' placeholder='Firstname' value={firstname} onChange={handleFirstname} minLength={3} required></Input>

            <label htmlFor='lastname'>Lastname</label>
            <Input type='text' placeholder='Lastname' value={lastname} onChange={handleLastname} minLength={3} required></Input>

            <label htmlFor='username'>Username</label>
            <Input type='text' placeholder='Username' value={username} onChange={handleUsername} minLength={3} required></Input>

            <label htmlFor='email'>Email</label>
            <Input type='email' placeholder='Email' value={email} onChange={handleEmail} required></Input>

            <label htmlFor='password'>Password</label>
            <Input type='password' placeholder='Password' value={password} onChange={handlePassword} minLength={8} required></Input>
            <Button onClick={handleSubmit}>Submit</Button>
        </Form>
        </>
    )
}
export default RegistrationForm