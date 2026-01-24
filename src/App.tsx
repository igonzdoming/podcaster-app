import Header from '../src/components/Header/Header';
import StatusIcon from './components/StatusIcon/StatusIcon';
import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <main>
      <Header />
      <AppRouter />
      <StatusIcon />
    </main>
  );
};
export default App;
