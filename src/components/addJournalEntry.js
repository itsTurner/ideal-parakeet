import { useState } from "react";
import addJournalEntry from "./addJournalEntryFunction";

export const AddJournalEntry = () => {
  // might have to change the types on these
  const [formState, setFormState] = useState({
    title: "",
    dateTime: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addJournalEntry(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={formState.title}
        onChange={handleChange}
        placeholder="title"
      />
      <input
        name="dateTime"
        value={formState.dateTime}
        onChange={handleChange}
        placeholder="dateTime"
      />
      <input
        name="body"
        value={formState.body}
        onChange={handleChange}
        placeholder="body "
      />
      <button type="submit">Add Journal Entry</button>
    </form>
  );
};

/*
  const [entry, setEntry] = useState("");
  const user = auth.currentUser;

  const addEntry = async () => {
    if (!user) {
      console.log("No user logged in");
      return;
    }

    const userID = user.uid;
    const timestamp = Date.now();
    // combine upload timestamp and userID for the journalID
    const docID = userID + "_" + timestamp;

    try {
      await setDoc(doc(db, "journalEntries", docID), {
        userID: userID,
        timestamp: timestamp,
        entry: entry,
        // other fields
      });
      console.log("Journal entry document written with ID: ", docID);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <input
        placeholder="journal entry"
        entry={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <button onClick={addEntry}>Save Journal Entry</button>
    </div>
  );
};
*/
