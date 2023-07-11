import {useParams } from 'react-router-dom'
function User()
{
    const params = useParams();
    return(
    <div><h1>User No {params.id}</h1>
    <h1>User Name {params.name}</h1></div>

    )
}

export default User;