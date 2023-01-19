import "./styles/App.css";
import { GlobalStyle } from "./styles/GlobalStyle";
import Todo from "./main/Todo";
function App() {
  return (
    <div>
      <GlobalStyle />
      <Todo />
    </div>
  );
}

export default App;
