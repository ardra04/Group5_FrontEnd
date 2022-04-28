import UserAppbar from './userappbar';
import { Link } from "react-router-dom";
export default function Users() {
    return (
      <div>
        <UserAppbar/>
        <h1>Home</h1>
        
         
<div className="list">
<ul>

  <li><Link to="/">Home</Link></li>
  <li><Link to="about">About</Link></li>
  <li><Link to="login">login</Link></li>
  <li><Link to="signup">Signup</Link></li>

</ul>
</div>
</div>

);
}