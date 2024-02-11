import "./App.css";
import { AddJournalEntry } from "./components/journaling/addJournalEntry";
import { ListJournalEntries } from "./components/journaling/listJournalEntries";
import { AddReminder } from "./components/reminders/addReminder";
import { SignUp } from "./components/authentication/addSignUp";
import { LogOut } from "./components/authentication/addLogout";
import { Login } from "./components/authentication/addLogin";
// import { User } from "./components/users";

function App() {
  return (
    <div className="App">
      <SignUp />
      <Login />
      <LogOut />
      <ListJournalEntries />
    </div>
  );
}

/*
<div className="App">
      <AddJournalEntry />
      <AddReminder />
      <
    </div>
*/

export default App;
