import { useState } from "react";
import { getReminders } from "./reminderFunctions";

export const ListReminders = () => {
  const [entries, setEntries] = useState([]);

  const handleFetchEntries = async () => {
    const data = await getReminders();
    if (data) {
      setEntries(data);
      console.log(data);
    }
  };

  return (
    <div>
      <button onClick={handleFetchEntries}>Load Reminders</button>
      {entries.map((entry) => (
        <div key={entry.id}>
          <p>{entry.id}</p>
          <p>{entry.description}</p>
          <p>{entry.date}</p>
          <p>{entry.days}</p>
          <p>{entry.frequency}</p>
          <p>{entry.reminderTime}</p>
          <p>{entry.scale}</p>
          <p>{entry.userID}</p>
          <p>{entry.inded}</p>
          <br></br>
        </div>
      ))}
    </div>
  );
};
