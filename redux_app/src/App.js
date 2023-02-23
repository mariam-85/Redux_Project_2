import UsersPage from './pages/UsersPage';
import PostsPage from './pages/PostsPage';
import MainPage from './pages/MainPage';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import './style.css'

export default function App() {

  return (
    <div>
     <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/posts' element={<PostsPage />} />
        </Route>
     </Routes>
    </div>
  );
}
