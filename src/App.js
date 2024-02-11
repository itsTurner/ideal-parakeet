import "./App.css";
import { AddJournalEntry } from "./components/addJournalEntry";
import { AddReminder } from "./components/addReminder";
import { SignUp } from "./components/signupForm";
import { LogOut } from "./components/logoutForm";
import { Login } from "./components/loginForm";
// import { User } from "./components/users";

function App() {
  return (
    <div className="App">
      <AddJournalEntry />
      <AddReminder />
      <SignUp />
      <LogOut />
      <Login />
    </div>
  );
}

export default App;
