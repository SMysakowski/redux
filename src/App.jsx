import { Provider } from "react-redux";

import UserProvider from "./providers/UserProvider";
import Layout from "./components/layout/Layout";
import Counter from "./components/counter/Counter";
import TodoList from "./components/todoList/TodoList";
import TodoForm from "./components/todoForm/TodoForm";

import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <div className="App">
          <Layout>
            {/* <TodoList /> */}
            {/* <TodoForm /> */}
            <Counter />
          </Layout>
        </div>
      </UserProvider>
    </Provider>
  );
}

export default App;
