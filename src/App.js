import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import About from './Pages/About';
import Services from './Pages/Services';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDashBoard from './Pages/user-routes/UserDashBoard';
import PrivateRoute from './components/PrivateRoute';
import ProfileInfo from './Pages/user-routes/profileInfo'; // Correct import name
import PostPage from './Pages/PostPage';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/posts/:postId" element={<PostPage/>} />
        
        {/* Correct nesting of routes under /user */}
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="dashboard" element={<UserDashBoard />} />
          <Route path="profileinfo" element={<ProfileInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
