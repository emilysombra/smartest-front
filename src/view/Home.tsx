import { useEffect, useState } from 'react';
// controller
import { getCareersList, getCoursesList } from '../controller/http_client.ts';
// models
import { Item } from '../models/grid.ts'
// styles + components
import Grid from './components/grid/index.tsx';
import { AppContainer } from '../styles/global.ts'


export default function Home() {
  // states
  const [courses, setCourses] = useState<Item[]>([]);
  const [careers, setCareers] = useState<Item[]>([]);

  // hooks
  useEffect(() => {
    getCoursesList(setCourses);
    getCareersList(setCareers);
  }, []);

  return (
    <AppContainer>
      <Grid data={courses}/>
      <Grid data={careers}/>
    </AppContainer>
  )
}