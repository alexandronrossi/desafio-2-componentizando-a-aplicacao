import { GenresProvider } from './hooks/useGenres';


import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {
  return (
    <GenresProvider>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />

        <Content />
      </div>

    </GenresProvider>
  )
}