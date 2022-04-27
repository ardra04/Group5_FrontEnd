import Appbar from './Appbar';
import StickyFooter from './footer';
import { Paper} from '@mui/material';
export default function About() {
    const paperStyle={padding:"100px 100px",width:1000,margin:"20px auto"}
  return (
    
    <div>
    <Appbar/>
    <h1>About</h1>
    <Paper id="abtid" elevation={10} style={paperStyle}>
    <p>Users can check the availablity of seats and book them online.</p>
</Paper>
<StickyFooter/>
    </div>
    );
}

