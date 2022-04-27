
import Appbar from './Appbar';
import StickyFooter from './footer';
import { Link } from "react-router-dom";
export default function Home() {
    return (
      <div>
        <Appbar/>
        <h1>Home</h1>
        
         
<div className="list">
<ul>

  <li><Link to="/">Home</Link></li>
  <li><Link to="about">About</Link></li>
  <li><Link to="login">login</Link></li>
  <li><Link to="signup">Signup</Link></li>

</ul>
</div>
<StickyFooter/>
</div>

);
}

// export default Home;