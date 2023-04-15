import UserProvider from "./providers/UserProvider";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Layout>
          <h1>Hello Props Drilling</h1>
        </Layout>
      </div>
    </UserProvider>
  );
}

export default App;
