import React from 'react';
import Sidebar from './components/common/Sidebar';
import Navbar from './components/common/Navbar';
import StudentRoutes from './routes/StudentRoutes';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full">
        <Navbar />
        <div className="pt-16">
          <StudentRoutes />
        </div>
      </div>
    </div>
  );
};

export default App;
