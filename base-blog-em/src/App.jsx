import { Posts } from "./Posts";
import "./App.css";

import { QueryClient, QueryClientProvider } from 'react-query';

const queryCliente = new QueryClient();

function App() {
  return (
    // provide React Query client to App
    <QueryClientProvider cliente={queryCliente}>
      <div className="App">
        <h1>Blog Posts</h1>
        <Posts />
      </div>
    </QueryClientProvider>
  );
}

export default App;
