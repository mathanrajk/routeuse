import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import ProductPage from './pages/ProductPage'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import LoginPage from './pages/LoginPage';
import ContactLayout from './layout/ContactLayout';
import Info from './components/Info';
import Froms from './components/Froms';
import NotFound from './pages/NotFound';
import Userlayout from './layout/Userlayout';
import UsersPage from './pages/UsersPage';
import User from './pages/User';
import { singleuserloader, userloader } from './utiles/useLoader';

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactLayout />}>
          <Route path='info' element={<Info />} />
          <Route path='forms' element={<Froms />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element ={<NotFound/>}/>
        <Route path='/user' element={<Userlayout/>}>
        <Route index element={<UsersPage/>} loader = {userloader}/>
        <Route path=':id' element ={<User/>} loader={singleuserloader}/>

        </Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={route}></RouterProvider>
  );
}

export default App;
