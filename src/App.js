import { useState, useEffect } from 'react'
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Employee from './components/Employee';
import Search from './components/Search';
import axios from 'axios'
import './App.css';

function App() {

  const [ searchByDOB , setSearchByDOB] = useState([])


  
 const searchAPIByEmployee = () => {
  axios.get('https://randomuser.me/api/?results=20')
  .then(response => {
  console.log(response)
    // this.setState({results: response.data.results})
   })
  .catch(err => console.error(err))
 }

  const formatName = (string) => {
  var shortStr = string.slice(0,10) + ".."
  if (string.length > 20){
    console.log(shortStr)
    return shortStr 
  }
  else {
    console.log(string)
    return string
  }
}


const searchAPIbyGender = (e)=>{
  const gender = e.target.value
  axios.get(`https://randomuser.me/api/?gender=${gender}`)
  .then(response =>{
    console.log(response.data.results)
    this.setState({results:response.data.results })
  })


}

const handleInputChange = (e)=>{ 
  const name = e.target.name;
  const value = e.target.value;

  console.log(name, value)
 this.setState({[name]: value})

}


const handleSubmit = e =>{
  e.preventDefault()
  console.log("Submitting....", this.state.searchByGender, this.state.searchByDOB)
  if(this.state.searchByGender==="" && this.state.searchByDOB===""){
      alert("Please enter correct search term")

  }
  localStorage.setItem("search", `${this.state.searchByDOB}`)
}

// const filteredResults = this.state.results.filter(user=>{
//   return user.dob.date.includes(this.state.searchByDOB)

// })




  return (
   



    <div className="App">
      <header className="App-header">
        <Wrapper />
        <Title />
        <Search 
        searchByDOB={searchByDOB}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        searchAPIbyGender={searchAPIbyGender}/>
        <Employee />
      
       
      </header>
    </div>
  );
}

export default App;
