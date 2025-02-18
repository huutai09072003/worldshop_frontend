import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
