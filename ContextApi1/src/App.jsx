import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './assets/components/Login'
import Profile from './assets/components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>
        React with context API
      </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
