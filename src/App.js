// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;