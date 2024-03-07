import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import ToDo from "./Pages/view/todo.layout";

function App() {
  return (
    <Provider store={store}>
        <ToDo/>
    </Provider>
  );
}

export default App;
