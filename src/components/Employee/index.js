import React from 'react'
import "./style.css";


const Employee = ({searchByEmployee}) => {
  console.log(searchByEmployee)

    return(
      searchByEmployee.map( result =>{
        (<div className="container">
        <div className="row header">
          <div className="col th">Photo</div>
          <div className="col th">Name</div>
          <div className="col th">Phone</div>
          <div className="col th">Email</div>
          <div className="col th">DOB</div>
        </div>
   
        <div className="row contents">
          <div className="col table">
          <div className="img-container">
            <img src={result.picture.large} alt={result.name}/>
           </div>
          </div>
          <div className="col table">
          {`${result.name.first} ${result.name.last}`}
          </div>
          <div className="col table">{result.phone}</div>
          <div className="col table">{result.email}</div>
          <div className="col table">{result.dob.date}</div>
        </div>
       </div>)
      })
  
    )
}

export default Employee