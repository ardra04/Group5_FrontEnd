
    import { Link } from "react-router-dom";
    import "./user.css";
    import UserAppbar from './userappbar';
    import { useState } from "react";
    
    export default function UserProfile() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    
     const handleClick=(e)=>{
    e.preventDefault()
    const student={name,username,email}
    console.log(student)
    fetch("http://localhost:8080/api/auth/user",{
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(student)
    }).then(()=>{
    console.log("Updated")
    })
    }
    
     return (
      
    <div className="user">

    <UserAppbar/>
    <div className="userTitleContainer">
    <h2 className="userTitle">User Profile Management</h2>
    </div>
    <div className="userContainer">
    <div className="userShow">
    <div className="userShowTop">
    <img
    src="data:image/png;base64,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"
    alt=""
    className="userShowImg"
    />
    <div className="userShowTopTitle">
    <span className="userShowUsername">Darsith VK</span>
    <span className="userShowUserTitle">User</span>
    </div>
    </div>
    <div className="userShowBottom">
    <span className="userShowTitle">Account Details</span>
    <div className="userShowInfo">
 
    <span className="userShowInfoTitle">darsithvk</span>
    </div>
    </div>
    </div>
    <div className="userUpdate">
    <span className="userUpdateTitle">Edit</span>
    <form className="userUpdateForm">
    <div className="userUpdateLeft">
    <div className="userUpdateItem">
    <label>Username</label>
    <input
    type="text"
    className="userUpdateInput"
    value={username}
    onChange={(e)=>setUsername(e.target.value)}
    />
    </div>
    <div className="userUpdateItem">
    <label>Full Name</label>
    <input
    type="text"
    value={name}
    onChange={(e)=>setName(e.target.value)}
    className="userUpdateInput"
    />
    </div>
    <div className="userUpdateItem">
    <label>Email</label>
    <input
    type="text"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    className="userUpdateInput"
    />
    </div>
    
    </div>
    <div className="userUpdateRight">
    <div className="userUpdateUpload">
    <img
    className="userUpdateImg"
    src="data:image/png;base64,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"
    alt=""
    />
    </div>
    <button className="userPasswordResetButton">Reset Password</button>
    <button className="userUpdateButton" onClick={handleClick}>Update</button>
    </div>
    </form>
    </div>
    </div>
    </div>
    );
    }