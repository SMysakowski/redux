import UserProvider from "./providers/UserProvider";
import Layout from "./components/layout/Layout";

import Counter from "./components/counter/Counter";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Layout>
          <Counter />
        </Layout>
      </div>
    </UserProvider>
  );
}

export default App;
