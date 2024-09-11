import styled from 'styled-components'
import { useState } from 'react';
import {useNavigate} from 'react-router'

const Container = styled.div`
display: block;
text-align: center;
`
const Form = styled.form`
background: lightgray;
display: inline-block;
padding: 10px;
text-align: center;
border-radius: 10px;
`
const Input = styled.input`
text-align: center;
display: flex;
justify-content: center;
margin: 10px;
`
const Button = styled.button`
display: inline-block;
padding: 5px 15px;
font-size: 16px;
cursor: pointer;
text-align: center;
text-decoration: none;
outline: none;
color: #fff;
background-color: #39a7c4;
border: none;
border-radius: 15px;
box-shadow: 0 9px #999;
margin: 10px;
&:hover{
background-color: #2f869d
}
&:active{
background-color: #2f869d;
box-shadow: 0 5px #666;
transform: translateY(4px);
}
`
const P = styled.p`
font-size: 12px;
`
const Label = styled.label`
font-size: 24px;
`
function RegistrationForm() {
    let navigate = useNavigate();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFirstname = (event: any) => {
        setFirstname(event.target.value);
    };
    const handleLastname = (event: any) => {
        setLastname(event.target.value);
    }
    const handleUsername = (event: any) => {
        setUsername(event.target.value);
    }
    const handleEmail = (event: any) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event: any) => {
        setPassword(event.target.value);
    }
    const handleSubmit = (event: any) => {
        event.preventDefault(); //post to db
        if (firstname.length < 3 || !/^[a-z]+$/i.test(firstname) || lastname.length < 3 || !/^[a-z]+$/i.test(firstname) || username.length < 3 || email.length < 5 || password.length < 8) {
            setFirstname('')
            setLastname('')
            setUsername('')
            setEmail('')
            setPassword('')
            alert('invalid input') //change
        } else {
            navigate('/thought-wall', {state: {username: username}})
        }
    };
    return (
        <>
            <Container>
                <h1>Create a user</h1>
                <Form>
                    <Label htmlFor='firstname'>Firstname</Label>
                    <Input type='text' placeholder='Enter firstname' value={firstname} onChange={handleFirstname} required></Input>

                    <Label htmlFor='lastname'>Lastname</Label>
                    <Input type='text' placeholder='Enter lastname' value={lastname} onChange={handleLastname} required></Input>

                    <Label htmlFor='username'>Username</Label>
                    <Input type='text' placeholder='Enter username' value={username} onChange={handleUsername} required></Input>

                    <Label htmlFor='email'>Email</Label>
                    <Input type='email' placeholder='Enter email' value={email} onChange={handleEmail} required></Input>

                    <Label htmlFor='password'>Password</Label>
                    <Input type='password' placeholder='Enter password' value={password} onChange={handlePassword} required></Input>
                    <P>Must be 8 characters long</P>
                        <Button onClick={handleSubmit}>Submit</Button>
                </Form>
            </Container>
        </>
    )
}
export default RegistrationForm