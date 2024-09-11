import styled from 'styled-components'
import { useState } from 'react';
import { Link } from "react-router-dom";

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
const ButtonDiv = styled.div`
display: flex;
text-align: center;
border-radius: 10px;
justify-content: center;
padding: 10px;
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

function LogInForm() { //fix when typing you have to reclick on the box after each letter
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (event: any) => {
        setUsername(event.target.value);
    };
    const handlePassword = (event: any) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event: any) => { //db logic once setup
        event.preventDefault();
        if (username.length < 2) {
            alert('invalid username length') //change
        }
        if (password.length < 8) {
            alert('invalid password length') //change
        }
    };
    return (
        <>
            <Container>
                <h1>Log in or register</h1>
                <Form>
                    <label htmlFor='username'>Username</label>
                    <Input value={username} onChange={handleUsername} type='text' placeholder="Enter Username" minLength={2} required></Input>

                    <label htmlFor='password'>Password</label>
                    <Input value={password} onChange={handlePassword} type="password" placeholder="Enter Password" minLength={8} required></Input>

                    <Button onClick={handleSubmit}>Submit</Button>
                </Form>
                <ButtonDiv>
                    <Link to={'/registration'}>
                        <Button>Register</Button>
                    </Link>
                </ButtonDiv>
            </Container>
        </>
    )
}
export default LogInForm