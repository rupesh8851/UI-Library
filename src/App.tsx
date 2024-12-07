import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './Layout.tsx';
import { About } from './pages/About.tsx';
import { AlertingSystem } from './pages/alerts/AlertingSystem.tsx';
import { CommentSection } from './pages/comment-box/CommentSection.tsx';
import { Experiment } from './pages/Experiment.tsx';
import { FeedsWrapper } from './pages/feeds';
import { UIComponents } from './pages/ui-components/UIComponents.tsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Layout-wrapped routes */}
          <Route path="/" element={<Layout />}>
            <Route path="feeds" element={<FeedsWrapper />} />
            <Route path="/alerts" element={<AlertingSystem />} />
            <Route path="/comments" element={<CommentSection />} />
            <Route path="/experiment" element={<Experiment />} />
            <Route path="/ui-components" element={<UIComponents />} />
          </Route>
          {/* Standalone route */}
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
