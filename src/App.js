import "./App.css";
import { AddJournalEntry } from "./components/addJournalEntry";
import { AddReminder } from "./components/addReminder";
import { SignUp } from "./components/addSignUp";
import { LogOut } from "./components/addLogout";
import { Login } from "./components/addLogin";
// import { User } from "./components/users";

function App() {
  return (
    <div className="App">
      <AddJournalEntry />
      <AddReminder />
      <SignUp />
      <Login />
      <LogOut />
    </div>
  );
}

export default App;
