import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import RandomPage from './routes/RandomPage/RandomPage';
import List from './routes/List/List';
import NotFound from './routes/404NotFound';
import Layout from './Layout';
import AnotherRandom from './routes/AnotherRandom/AnotherRandom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="random-page" element={<RandomPage />} />
          <Route path="a-list" element={<List />} />
          <Route path="another-random-page" element={<AnotherRandom />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

