import React from 'react'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';

const divstyle ={
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin : "0"
}
const boxleft ={
    //marginLeft: "-5em"
}
const boxright ={
    //marginRight: "-5em",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "left"
}

const footercss ={

        display:  "flex",
        flexDirection: "row",
        position: "fixed",
        backgroundColor: "gray",
        bottom: "0",
        left: "0",
        right: "0",
        padding: "8px",
        textAlign: "center"
    
}
const Footer = () => {
  return (
    <footer style={footercss}>
        <div style={divstyle}>
            <div style={boxleft}>
                <h2>Quick Links</h2>
                <ul>
                    <li>Home</li>
                    <li>Find a Job</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <h2>Connect with Us</h2>
                <div style={divstyle}>
                    <h2 class="bi bi-facebook">F</h2>
                    <h2 class="bi bi-linkedin">LI</h2>
                    <h2 class="bi bi-twitter">T</h2>
                    <h2 class="bi bi-discord">D</h2>
                </div>
                
            </div>
            <div style={boxright}>
                <div>
                    <p>You can Email us Here:</p>
                    <p>Email: <b>helloworkcorps@gmail.com</b></p>
                </div>
                <div>
                    <p>Call: 09234556467</p>
                </div>
                <div>
                    <p>Address: consecutiuor addpiecsiing eliit, sod de no sunod tempor do inciduont ut laboure.</p>
                </div>
            </div>
        </div>
        <div> Copyright Hello!Work </div>
    </footer>
  )
}

export default Footer
