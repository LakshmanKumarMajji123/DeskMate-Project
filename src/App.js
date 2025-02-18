import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import Login from './pages/login/Login';
import { Main } from './pages/main/Main';
function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <main>
    <div> {isAuthenticated ? (<Main />) : <Login />} </div>
  </main>
}
export default App;

