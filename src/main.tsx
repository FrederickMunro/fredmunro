import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ColorWheel from './components/ColorWheel';
import { ColorProvider } from './components/Providers/ColorProvider';
import MasterContainer from './components/MasterContainer';

import './main.css'
import Home from './components/Home';
import Stack from './Stack';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home />
        <Stack />
      </>
    )
  },
  {
    path: '/colors',
    element: (
      <>
        <ColorWheel isMain={true} isOpen={true} />
        <ColorWheel isMain={false} isOpen={true} />
      </>
    )
  },
])

createRoot(document.getElementById('root')!).render(
  <>
    <ColorProvider>
      <MasterContainer>
        <RouterProvider router={router} />
      </MasterContainer>
    </ColorProvider>
  </>
)

