import { useState } from "react";
import { getJournalEntries } from "./journalDbFunctions";

export const ListJournalEntries = () => {
  const [entries, setEntries] = useState([]);

  const handleFetchEntries = async () => {
    const data = await getJournalEntries();
    if (data) {
      setEntries(data);
      console.log(data);
    }
  };

  return (
    <div>
      <button onClick={handleFetchEntries}>Load Journal Entries</button>
      {entries.map((entry) => (
        <div key={entry.id}>
          <p>{entry.title}</p>
          <p>{entry.dateTime}</p>
          <p>{entry.body}</p>
        </div>
      ))}
    </div>
  );
};
