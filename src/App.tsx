import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import { Provider } from 'react-redux'
import store from './redux/store';
import React from 'react';
import MovieDetails from './components/MovieDetails';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='movies/:id' element={<MovieDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
