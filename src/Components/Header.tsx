import styled from 'styled-components'

function Header(){
    const Title = styled.h1`
    text-align: center;
    `
    const Container = styled.div`
    background: lightgray;
    padding:10px;
    `
    return (
        <>
        <Container>
        <Title>Thought Wall</Title>
        </Container>
        </>
    )
}
export default Header