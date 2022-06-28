import {useState} from "react";
import * as C from "./App.styles";
import {Item} from "./types/Item";
import {ListItem} from "./components/ListItem";
import {AddArea} from "./components/AddArea";
import {ThemeSwitcher} from "./components/Theme";

import {UseAppSelector} from "./redux/hooks/useAppSelector";
import {useDispatch} from "react-redux";
import {setThemeColor, setThemeStatus} from "./redux/reducers/themeReducer";

const App = () => {

  const dispatch = useDispatch();
  const theme = UseAppSelector(state => state.theme)

  function switchTheme(newTheme: string) {dispatch(setThemeStatus(newTheme))};
  function switchColor(newColor: string) {dispatch(setThemeColor(newColor))};

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

  function handleSwitchTheme() {
    switchTheme(theme.status === "Dark" ? "Light" : "Dark");
    switchColor(theme.color === "Light" ? "Dark" : "Light");
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <ThemeSwitcher onClick={handleSwitchTheme}/>

        <button onClick={handleSwitchTheme}>Tema</button>

        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index)=>(
          <ListItem key={index} Item={item}/>
        ) )}

      </C.Area>
    </C.Container>
  );
}

export default App;