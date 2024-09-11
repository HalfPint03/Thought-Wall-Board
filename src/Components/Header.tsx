import styled from 'styled-components'

const Title = styled.h1`
text-align: center;
font-size: 36px;
`
const Container = styled.div`
background: lightgray;
padding: 5px;
`

function Header(){
    return (
        <>
        <Container>
        <Title>Thought Wall</Title>
        </Container>
        </>
    )
}
export default Header