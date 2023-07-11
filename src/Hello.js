import UserComponent from './UserComponent';
import UserClassComponent from './UserClassComponent';

function showName()
{
    alert("Tushar");
}
function Hello() {
    return (
      <div className="Hello">
        <h1>Hello World..</h1>
        <UserComponent/>
        <UserClassComponent/>
        <button onClick={showName}>Click Me</button>
      </div>
    );
  }
  
  export default Hello;