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
    <p>Every organization provides a space (seat) for the users to use. To make a seat 
reservation, the user will need to record their booking in a log book. This logistics 
requires a lot of manual work to maintain the records, which tends to be an error prone 
approach. Hence, some automated approach is preferred, and the organization would 
like to have a seat booking system to improve the situation.
Using the seat booking system, user can first check the availability of their preferred 
seat, and make the corresponding bookings online. The admin can check the booking 
status of the seat and have appropriate arrangements for the bookings. In addition, 
users can also view their booking histories via the interface. With this seat booking 
system user can instantly schedule desks, manage bookings and locate neighbourhoods 
and colleagues.</p>
</Paper>
<StickyFooter/>
    </div>
    );
}

