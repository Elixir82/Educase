import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Initialpage from './Pages/InitialPage.jsx'
import Signuppage from './Pages/Signuppage.jsx'
import LoginPage from './Pages/Loginpage.jsx'
import { Provider } from 'react-redux'
import Profile from './Pages/Profile.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from '../Store/Store.js'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Initialpage />
  },
  {
    path: '/signup',
    element: <Signuppage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: 'profile',
    element: <Profile />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
