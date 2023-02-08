import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Dashboard from './Components/Pages/Dashboard';
import Details from './Components/Pages/Details';

const App = () => (
  <Routes>
    <Route
      path="/"
      element={(
        <Container fluid className="App">
          <Dashboard />
          {' '}
        </Container>
      )}
    />
    <Route
      path="/details"
      element={(
        <Container fluid className="App">
          <Details />
        </Container>
      )}
    />
  </Routes>
);

export default App;
