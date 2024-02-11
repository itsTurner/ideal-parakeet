import { useState } from "react";
import { addJournalEntry } from "./journalDbFunctions";

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
