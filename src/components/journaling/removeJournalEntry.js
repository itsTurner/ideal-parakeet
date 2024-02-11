import { removeJournalEntry, getJournalEntries } from "./journalDbFunctions";

export const RemoveJournalEntry = () => {
  // have to use an async function for getReminders and then iterate through with:
  // forEach (entry in data)
  let ids = [];

  const handleRemoval = async () => {
    const data = await getJournalEntries();
    if (data) {
      data.forEach((entry) => {
        ids.push(entry.id);
      });
    }
    removeJournalEntry(ids[0]);
  };
  return (
    <div>
      <button onClick={handleRemoval}>Remove first journal entry</button>
    </div>
  );
};
