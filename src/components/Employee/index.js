import React from 'react'
import "./style.css";


const Employee = ({searchByEmployee, formatName}) => {
  console.log(searchByEmployee)

    return(
      searchByEmployee.map( result =>
      
        (<div className="container" key={result.login.uuid}>
        <div className="row header-row">
          <div className="col th">Photo</div>
          <div className="col th">Name</div>
          <div className="col th">Phone</div>
          <div className="col th">Email</div>
          <div className="col th">DOB</div>
        </div>
   
        <div className="row contents-row">
          <div className="col table">
          <div className="img-container img">
            <img src={result.picture.large} alt={result.name}/>
           </div>
          </div>
          <div className="col table name">
          {`${result.name.first} ${result.name.last}`}
          </div>
          <div className="col table phone">{result.phone}</div>
          <div className="col table email">{result.email}</div>
          <div className="col table dob">{formatName(result.dob.date)}</div>
        </div>
       </div>)
      )
  
    )
}

export default Employee