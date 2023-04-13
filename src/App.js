import './App.css';
import HeaderSection from './Components/HeaderSection';
import EventSection from './Components/EventSection';
import BookYourTicket from './Components/BookYourTicket';

function App() {
  return (
    <div className="App">
      <HeaderSection/>
      <EventSection></EventSection>
      <BookYourTicket></BookYourTicket>
    </div>
  );
}

export default App;
