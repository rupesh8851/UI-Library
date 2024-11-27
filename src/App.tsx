import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './Layout.tsx';
import { About } from './pages/About.tsx';
import { Accordion } from './pages/Accordion.tsx';
import { AlertingSystem } from './pages/alerts/AlertingSystem.tsx';
import { DynamicSelect } from './pages/auto-complete';
import { Carousel } from './pages/carousel/Carousel.tsx';
import { CommentSection } from './pages/comment-box/CommentSection.tsx';
import { Experiment } from './pages/Experiment.tsx';
import { FeedsWrapper } from './pages/feeds';
import { Todo } from './pages/todo/Todo.tsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Layout-wrapped routes */}
          <Route path="/" element={<Layout />}>
            <Route path="feeds" element={<FeedsWrapper />} />
            <Route path="accordion" element={<Accordion />} />
            <Route path="/alerts" element={<AlertingSystem />} />
            <Route path="/carousel" element={<Carousel />} />
            <Route path="/comments" element={<CommentSection />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/autocomplete" element={<DynamicSelect />} />
            <Route path="/experiment" element={<Experiment />} />
          </Route>
          {/* Standalone route */}
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
