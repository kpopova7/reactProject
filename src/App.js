import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import RandomPage from './routes/randomPage';
import AList from './routes/aList';
import NotFound from './routes/404NotFound';
import Layout from './layout';
import AnotherRandom from './routes/anotherRandom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="random-page" element={<RandomPage />} />
          <Route path="a-list" element={<AList />} />
          <Route path="another-random-page" element={<AnotherRandom />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

