import * as React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import { AboutPage, HomePage, StorePage } from './pages';
import { Container } from 'react-bootstrap';
import { Navbar } from './components';

export default function App() {
  return (
    <>
      <Navbar />
      <Container className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Container>
    </>
  );
}
