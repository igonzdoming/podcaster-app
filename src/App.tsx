import Header from '../src/components/Header/Header';
import Toast from './components/Toast/Toast';
import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <main>
      <Header />
      <AppRouter />
      <Toast />
    </main>
  );
};
export default App;
