import "./App.css";
import { AddJournalEntry } from "./components/journaling/addJournalEntry";
import { ListJournalEntries } from "./components/journaling/listJournalEntries";
import { ListReminders } from "./components/reminders/listReminders";
import { AddReminder } from "./components/reminders/addReminder";
import { SignUp } from "./components/authentication/addSignUp";
import { LogOut } from "./components/authentication/addLogout";
import { Login } from "./components/authentication/addLogin";
import { RemoveReminder } from "./components/reminders/removeReminder";
import { RemoveJournalEntry } from "./components/journaling/removeJournalEntry";
// import { User } from "./components/users";

function App() {
  return (
    <div className="App">
      <h1>Database Testing</h1>
      <SignUp />
      <Login />
      <LogOut />
      <AddJournalEntry />
      <AddReminder />
      <ListJournalEntries />
      <ListReminders />
      <RemoveReminder />
      <RemoveJournalEntry />
    </div>
  );
}

/*
<div className="App">
      <AddJournalEntry />
      <AddReminder />
      <ListJournalEntries />
      <ListReminders />
    </div>
*/

export default App;
