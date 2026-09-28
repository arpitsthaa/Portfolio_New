import Portfolio from './Portfolio';
import Birthday from './Birthday';

function App() {
  return window.location.pathname.startsWith('/29march') ? <Birthday /> : <Portfolio />;
}

export default App;