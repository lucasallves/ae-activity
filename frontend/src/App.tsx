import React from 'react';
import Navbar from './components/shared/Navbar';
import DashboardPage from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <DashboardPage />
    </>
  );
}

export default App;
