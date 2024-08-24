// styles
import Grid from '../components/grid/index.tsx'
import { AppContainer } from '../styles/global.ts'

export default function Home() {
  const courses = [
    {"title": "mah oe 1", "description": "teste 1"},
    {"title": "mah oe 2", "description": "teste 2"},
    {"title": "mah oe 3", "description": "teste 3"},
    {"title": "mah oe 4", "description": "teste 4"},];
  
  const careers = [
    {"title": "mamah oe 1", "description": "teste 1"},
    {"title": "mamah oe 2", "description": "teste 2"},
    {"title": "mamah oe 3", "description": "teste 3"},
    {"title": "mamah oe 4", "description": "teste 4"},
    {"title": "mamah oe 5", "description": "teste 5"},];

  return (
    <AppContainer>
      <Grid data={courses}/>
      <Grid data={careers}/>
    </AppContainer>
    )
  }