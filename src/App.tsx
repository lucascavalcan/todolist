import {useState} from "react";
import * as C from "./App.styles";
import {Item} from "./types/Item";
import {ListItem} from "./components/ListItem";
import {AddArea} from "./components/AddArea";

import {useAppSelector} from "./redux/hooks/useAppSelector";
import { ThemeProvider} from "styled-components";
import usePersistedState from "./utils/UsePersistedState";
import dark from "./themes/dark";
import light from "./themes/light";
import Switch from "react-switch"

const App = () => {


  const theme = useAppSelector(state => state.theme)

  const [Theme, setTheme] = usePersistedState('Theme', dark);

  function toggleTheme() {
    setTheme(Theme.title === "dark" ? light : dark)
  }

  const[list, setList] = useState<Item[]>([
    {id: 1, name: "comprar pão", done: false},
    {id: 2, name: "comprar bolo", done: true},
  ]);


  function handleAddTask(taskName: string) {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <ThemeProvider theme={Theme}>
        <C.Container  toggleTheme={toggleTheme}>
        <C.Area>
          <C.Header>
            Lista de Tarefas

            <Switch 
              onChange={toggleTheme}
              checked={Theme.title === "dark"}
              checkedIcon={false}
              uncheckedIcon={false}
              height={20}
              width={50}
              handleDiameter={25}
              onColor={'#797a81'}
              offColor={'#17188f'}
            />

          </C.Header>

          <AddArea onEnter={handleAddTask}/>

          {list.map((item, index)=>(
            <ListItem key={index} Item={item} onChange={handleTaskChange}/>
          ) )}

        </C.Area>
      </C.Container>
    </ThemeProvider>
  );
}

export default App;