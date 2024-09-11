import {useLocation} from 'react-router-dom'

function ThoughtWall(){
    const location = useLocation();
    return (
        <>
        <h1>Current user: {location.state.username}</h1>
        </>
    )
}
export default ThoughtWall