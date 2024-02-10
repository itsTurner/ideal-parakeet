import { auth } from "../config/firebase";
import { db } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";

const addReminder = async ({
  description,
  index,
  frequencyType,
  date,
  days,
  frequency,
  scale,
  reminderTime,
}) => {
  const user = auth.currentUser;

  if (!user) {
    console.log("No user logged in");
    return;
  }

  const userID = user.uid;
  const docID = userID + "_" + index;

  try {
    await setDoc(doc(db, "Reminders", docID), {
      userID: userID,
      index: index,
      description: description,
      frequencyType: frequencyType,
      date: date,
      days: days,
      frequency: frequency,
      scale: scale,
      reminderTime: reminderTime,
    });
    console.log("Reminder documend added with docID: ", docID);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default addReminder;
