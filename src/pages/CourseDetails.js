import React,{useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const CourseDetails = () =>{

                const [details , setUser] = useState({

                        name: "",
                        username: "",
                        email: "",
                        phone: "",
                        website: ""

                })

                useEffect(() => { loadDetails() }, []);
                const {id} = useParams();
                console.log(id);
                console.log(details);
                const loadDetails = async () => { 
                    const rest = await axios.get(`http://localhost:3004/courses/${id}`);
                    console.log(rest.data);
                    setUser(rest.data);

                  }

    return (
        <div className="split-right right" >
            <div className="centered">
        <Link className="btn btn-primary" to="/">Back</Link>

        <h2 className="display-6"> Course Id: {id}</h2>
          <hr />
            <ul className="">
                <li className="list-group-item"> name: {details.name} </li>
                <li className="list-group-item"> User Name:{details.username}</li>
                <li className="list-group-item">Email:{details.email}</li>
                <li className="list-group-item">Phone:{details.phone}</li>
                <li className="list-group-item">Website:{details.website} </li>
            </ul>
        </div>
        </div>
    )
}

  export default CourseDetails;