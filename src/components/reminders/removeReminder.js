import { removeReminder, getReminders } from "./reminderFunctions";

export const RemoveReminder = () => {
  // have to use an async function for getReminders and then iterate through with:
  // forEach (entry in data)
  let ids = [];

  const handleFetchEntries = async () => {
    const data = await getReminders();
    if (data) {
      data.forEach((entry) => {
        ids.push(entry.id);
      });
    }
    removeReminder(ids[0]);
  };
  return (
    <div>
      <button onClick={handleFetchEntries}>Remove first Reminder</button>
    </div>
  );
};
