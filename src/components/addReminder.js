import { useState } from "react";
import addReminder from "./addReminderFunction";

export const AddReminder = () => {
  // might have to change the types of these
  const [formState, setFormState] = useState({
    description: "",
    index: 0,
    frequencyType: "",
    date: "",
    days: [],
    frequency: 0,
    scale: "",
    reminderTime: "",
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
    await addReminder(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="description"
        value={formState.description}
        onChange={handleChange}
        placeholder="description"
      />
      <input
        name="index"
        value={formState.index}
        onChange={handleChange}
        placeholder="index"
      />
      <input
        name="frequencyType"
        value={formState.frequencyType}
        onChange={handleChange}
        placeholder="frequencyType "
      />
      <input
        name="date"
        value={formState.date}
        onChange={handleChange}
        placeholder="date"
      />
      <input
        name="days"
        value={formState.days}
        onChange={handleChange}
        placeholder="days"
      />
      <input
        name="frequency"
        value={formState.frequency}
        onChange={handleChange}
        placeholder="frequency"
      />
      <input
        name="scale"
        value={formState.scale}
        onChange={handleChange}
        placeholder="scale"
      />
      <input
        name="reminderTime"
        value={formState.reminderTime}
        onChange={handleChange}
        placeholder="reminderTime"
      />
      <button type="submit">Add Reminder</button>
    </form>
  );
};

/*
export const AddReminder = () => {
  const [entry, setReminder] = useState("");
  const user = auth.currentUser;

  const addReminder = async () => {
    if (!user) {
      console.log("No user logged in");
      return;
    }

    const userID = user.uid;
    const timestamp = Date.now();
    // combine upload timestamp and userID for the journalID
    const docID = userID + "_" + timestamp;

    try {
      await setDoc(doc(db, "Reminders", docID), {
        userID: userID,
        timestamp: timestamp,
        entry: entry,
        // other fields
      });
      console.log("Reminder document added with ID: ", docID);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <input
        placeholder="reminder"
        entry={entry}
        onChange={(e) => setReminder(e.target.value)}
      />
      <button onClick={addReminder}>Save Reminder</button>
    </div>
  );
};
*/
