
import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import '../componants/Navbar.css';


const Courses = () => {

    const [courses , setUser] = useState([]);
    useEffect(() =>{
      loadUsers();

    }, []); 

const loadUsers = async () =>{

     const result = await axios.get("http://localhost:3004/courses");
     console.log(result.data);
     setUser(result.data.reverse());

}
    return (
         <div className="split left" >
            <div className="centered">
  

    { 
        courses.map((courses, index) =>(

                <ul>
                    <li>
        <Link className=" btn-warning " to={`/course/${courses.id}`}>{courses.name }  View Courses Details</Link>
                   </li>
                    </ul>
                 
             
        ))
    }
         
 </div>
 </div>
    )}
export default Courses;