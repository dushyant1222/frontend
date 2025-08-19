import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import LogoutPage from './pages/LogoutPage';
import EventDetailsPage from './pages/EventDetailsPage';
import EventRegistrationPage from './pages/EventRegistrationForm';

function PrivateRoute({ children }) {
  const user = JSON.parse(localStorage.getItem('user'));
  return user && user.id ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/events/:id" element={<PrivateRoute><EventDetailsPage /></PrivateRoute>} />
          <Route path="/events/:id/register" element={<PrivateRoute><EventRegistrationPage /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
