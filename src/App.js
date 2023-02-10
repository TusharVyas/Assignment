import './App.css';
import styled from 'styled-components';
import Card from './components/Card';
import { useState } from 'react';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';

const Nav=styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #cfd8dc;
`
const Button = styled.button`
@media (max-width: 700px) {
  margin: 0px;
}
  background-color: #4CAF50; 
    color: black; 
    border-radius:4px;
  padding: 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover{
  background-color: green;
  color: white;
  }`

const Brand=styled.h1`
font-size: 2.5rem;
@media (max-width: 700px) {
  font-size: 2rem;
  }
`
const Cards=styled.div`
height: 90vh;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
@media (max-width: 700px) {
  grid-template-columns: 1fr;
  margin:0px;
  }
`

const Loader=styled.div`
display: flex;
justify-content:center;
align-items:center;
margin-top: 20rem;`

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [resourses,setResourses]=useState([]);
  const getData=async ()=>{
    setIsLoading(true);
    await axios.get(
      "https://reqres.in/api/users?page=1")
      .then(response => {
        console.log(response.data.data);
        setResourses(response.data.data)
      }).catch(error => {
      })
      setIsLoading(false)
  }
  return (
    <div className="App">
      <Nav>
        <Brand>Title</Brand>
        <Button onClick={()=>getData()}>Get Users</Button>
      </Nav>
      {isLoading?<Loader><ThreeDots height={20} color='white'/></Loader> : 
      <Cards>
        {resourses.map((resource)=>{
          return <Card
            key={resource.id}
            Email={resource.email}
            FirstName={resource.first_name}
            LastName={resource.last_name}
            Avatar={resource.avatar}/>
        })}
      </Cards>}
    </div>
  );
}

export default App;
