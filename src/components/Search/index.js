import React from 'react'
import "./style.css";
import styled from 'styled-components'

const Input = styled.input
`
width: 100%;
padding:0px;
margin:10px;
height:60px;
border-radius : 10px;

`

const Search = ({searchAPIbyGender, searchByDOB,   handleInputChange, handleSubmit, filteredResults}) => {
    return(
        <div className="container input-container text-center">
           <div className="row search">

               <div className="col-md-3 gender-btn">
                   <button
                       value="male"
                       type="button"
                       className="query_btn btn btn-default btn-sm search-btn"
                       onClick={searchAPIbyGender}>Search male</button>
                </div>

                <div className="col-md-3">
                       <button
                       value="female"
                       type="button"
                       className="query_btn btn btn-default btn-sm search-btn"
                       onClick={searchAPIbyGender}>Search female</button>
                </div>
   

               <div className="col-md-3 date-input">
                   <Input type="date"
                       name="searchByDOB"
                       value={searchByDOB}
                       placeholder="dd/mm/yyyy"
                       onChange={handleInputChange} />
                </div>

                <div className="col-md-3">
                    <button
                       type="button"
                       className="query_btn btn btn-default btn-sm search-btn"
                       onClick={filteredResults}>Search by DOB</button>
                </div>
  
              

            </div>
          
       </div>          
    )
}

export default Search