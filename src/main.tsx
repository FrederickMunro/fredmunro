import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ColorWheel from './components/ColorWheel';
import { ColorProvider } from './components/Providers/ColorProvider';
import MasterContainer from './components/MasterContainer';
import MyDoormatLanding from './components/MyDoormatLanding';

import './main.css'
import Home from './components/Home';
import Stack from './components/Stack';
import Projects from './components/Projects';

const OldSite = () => (
  <ColorProvider>
    <MasterContainer>
      <>
        <Home />
        <Stack />
        <Projects />
      </>
    </MasterContainer>
  </ColorProvider>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <MyDoormatLanding />,
  },
  {
    path: '/old',
    element: <OldSite />,
  },
  {
    path: '/colors',
    element: (
      <ColorProvider>
        <MasterContainer>
          <>
            <ColorWheel isMain={true} isOpen={true} />
            <ColorWheel isMain={false} isOpen={true} />
          </>
        </MasterContainer>
      </ColorProvider>
    ),
  },
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
