import "./App.css";
import { Auth } from "./components/auth";
import { AddJournalEntry } from "./components/addJournalEntry";
import { AddReminder } from "./components/addReminder";
// import { User } from "./components/users";

function App() {
  return (
    <div className="App">
      <Auth />
      <AddJournalEntry />
      <AddReminder />
    </div>
  );
}

export default App;
