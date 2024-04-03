import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Allteams from './Pages/Allteams';
import Alltournaments from './Pages/Alltournaments';
import Checkout from './Pages/Checkout';
import EventDetail from './Pages/EventDetail';
import MyAccount from './Pages/MyAccount';
import MyCart from './Pages/MyCart';
import Privacy from './Pages/Privacy';
import SignUp from './Pages/SignUp';
import TandC from './Pages/TandC';
import Team from './Pages/Team';
import Tournament from './Pages/Tournament';
import TournamentDetail from './Pages/TournamentDetail';
import Upcoming from './Pages/Upcoming';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-teams" element={<Allteams />} />
        <Route path="/all-tournaments" element={<Alltournaments />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/event-detail" element={<EventDetail />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/cart" element={<MyCart />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/terms-and-conditions" element={<TandC />} />
        <Route path="/team" element={<Team />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/tournament-detail" element={<TournamentDetail />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
    </Router>
  );
}

export default App;
