import { replaceJournalEntry, getJournalEntries } from "./journalDbFunctions";

export const ReplaceJournalEntry = () => {
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
    const title = "Title lalalal";
    const body = "al;sdkfja;oewicnao;iefoij";
    const docID = ids[0];
    replaceJournalEntry({ title, docID, body });
  };
  return (
    <div>
      <button onClick={handleRemoval}>!!!Replace first journal entry!!!</button>
    </div>
  );
};
