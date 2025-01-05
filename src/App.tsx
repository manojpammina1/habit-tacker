import './App.css'
import {Provider} from "react-redux";
import store from "./store/store.ts";
import {Container, Typography} from "@mui/material";
import AddHabitForm from "./compnents/AddHabitForm.tsx";
import HabitList from "./compnents/HabitList.tsx";
import HabitStats from "./compnents/HabitStats.tsx";

function App() {

  return (
    <Provider store={store}>
      <Container maxWidth="md">
          <Typography component="h1" variant="h2" align="center">
              Habit Tracker
          </Typography>
          <AddHabitForm/>
          <HabitList/>
          <HabitStats />
      </Container>
    </Provider>
  )
}

export default App
