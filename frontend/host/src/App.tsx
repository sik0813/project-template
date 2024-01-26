import React from 'react';
import { Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import('remote-main/Home'));

const App: React.FC = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
