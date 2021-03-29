import { useState, useEffect } from 'react'
// import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Employee from './components/Employee';
import Search from './components/Search';
import axios from 'axios'
// import './App.css';

function App() {

  const [ searchByDOB , setSearchByDOB] = useState("")

  const [ searchByEmployee, setSearchByEmployee] = useState([])

  useEffect(()=>{
    searchAPIByEmployee()
  }, [])


  
 const searchAPIByEmployee = () => {
  axios.get('https://randomuser.me/api/?results=20')
  .then(response => {
    console.log(response.data.results)
    setSearchByEmployee(response.data.results)
   })
  .catch(err => console.error(err))
 }

  const formatName = (string) => {
  var shortStr = string.slice(0,10) + ".."
  if (string.length > 20){
  
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
     setSearchByEmployee(response.data.results)
  })


}

const handleInputChange = (e)=>{

  const name = e.target.name;
  const value = e.target.value;

  console.log(name, value)
//  this.setState({[name]: value})
  setSearchByDOB({[name]: value})

}


const handleSubmit = e =>{
  e.preventDefault()
  console.log("Submitting....", this.state.searchByGender, this.state.searchByDOB)

  localStorage.setItem("search", `${this.state.searchByDOB}`)
}

const filteredResults =  searchByEmployee.filter(user=>{
  return user.dob.date.includes(searchByDOB)

})


  return (
  

    <div className="App">
     
        <Title />
        <Search 
        searchByDOB={searchByDOB}
        setSearchByDOB={setSearchByDOB}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        searchAPIbyGender={searchAPIbyGender}/>
        <Employee 
        searchByEmployee={searchByEmployee} 
        filteredResults = {filteredResults}
        formatName={formatName}/>
      
    </div>
  );
}

export default App;
