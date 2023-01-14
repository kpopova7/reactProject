import logo from './logo.svg';
import './App.scss';
import Header from './components/header/header'
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import About from './routes/about';
import Services from './routes/services';
import AList from './routes/aList';
import Layout from './components/layout/layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="a-list" element={<AList />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

