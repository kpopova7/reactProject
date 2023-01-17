import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Services from './routes/services';
import AList from './routes/aList';
import NotFound from './routes/404NotFound';
import Layout from './components/layout/layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="a-list" element={<AList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

