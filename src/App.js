import { useState, useEffect } from 'react'
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Employee from './components/Employee';
import Search from './components/Search';
import axios from 'axios'
// import './App.css';

function App() {

  const [ searchByDOB , setSearchByDOB] = useState("")

  const [ searchByEmployee, setSearchByEmployee] = useState([])

  const [gender, setGender]=useState("")

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
  console.log(gender)
  setGender(gender)





  // axios.get(`https://randomuser.me/api/?gender=${gender}`)
  // .then(response =>{
  //   console.log(response.data.results)
  //    setSearchByEmployee(response.data.results)
  // })


}

const handleInputChange = (e)=>{

  const name = e.target.name;
  const value = e.target.value;

  console.log(name, value)
// this.setState({[name]: value})
  // setSearchByDOB({[name]: value})
  setSearchByDOB(value)

}

const filteredResults =  searchByEmployee.filter(user=>{ 
  // console.log(searchByDOB)
  // console.log(user.dob.date)
  return user.dob.date.includes(searchByDOB ) 
        
 }).filter(user =>{
  console.log(gender)
   if(gender===""){
     return user
   }
  
   return user.gender=== gender
 
 })
 

const handleSubmit = e =>{
  e.preventDefault()
  console.log(filteredResults)
  setSearchByEmployee(filteredResults)
  
}




  return (
    

    <div className="App">
       <Wrapper>
        <Title />
        <Search 
        searchByDOB={searchByDOB}
        setSearchByDOB={setSearchByDOB}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        searchAPIbyGender={searchAPIbyGender}
        />
        <Employee 
        searchByEmployee={ filteredResults} 
        formatName={formatName}/>
        </Wrapper>
      
    </div>
  );
}

export default App;
