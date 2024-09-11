import styled from 'styled-components'
import { useState } from 'react';
import { Link } from "react-router-dom";

function LogInForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (event: any) => {
        setUsername(event.target.username);
        console.log(username)
    };
    const handlePassword = (event: any) => {
        setPassword(event.target.password);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log('acceptable input')
    };
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
    return (
        <>
            <Container>
                <h1>Log in or register</h1>
                <Form>
                    <label htmlFor='username'>Username</label>
                    <Input type='text' placeholder="Enter Username" value={username} onChange={handleUsername} minLength={2} required></Input>

                    <label htmlFor='password'>Password</label>
                    <Input type="password" placeholder="Enter Password" value={password} onChange={handlePassword} minLength={8} required></Input>

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