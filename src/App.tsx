import Header from '../src/components/Header/Header';
import StatusIcon from './components/StatusIcon/StatusIcon';
import AppRouter from './router/AppRouter';
import { useScrollToTop } from './hooks/useScrollToTop';

const App = () => {
  useScrollToTop();

  return (
    <main>
      <Header />
      <AppRouter />
      <StatusIcon />
    </main>
  );
};
export default App;
