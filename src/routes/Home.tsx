// react + js
import { useEffect, useState } from 'react';
import axios from 'axios';
// styles + components
import Grid from '../components/grid/index.tsx'
import { Item } from '../components/grid/types.ts';
import { AppContainer } from '../styles/global.ts'

export default function Home() {
  // states
  const [courses, setCourses] = useState<Item[]>([]);
  const [careers, setCareers] = useState<Item[]>([]);

  // hooks
  useEffect(() => {
    axios.get("localhost")
      .then((response) => {
        if (Array.isArray(response.data)){
          setCourses(response.data);
        }else{
          setCourses([
            {"title": "mah oe 1", "description": "teste 1"},
          ]);
        };     
      })
      .catch((error) => {
        setCourses([])
        console.log(error);
      });
    
    axios.get("localhost")
      .then((response) => {
        if (Array.isArray(response.data)){
          setCareers(response.data);
        }else{
          setCareers([
            {"title": "maha oe 1", "description": "teste 1"},
          ]);
        };     
      })
      .catch((error) => {
        setCareers([])
        console.log(error);
      });
  }, []);

  return (
    <AppContainer>
      <Grid data={courses}/>
      <Grid data={careers}/>
    </AppContainer>
    )
  }