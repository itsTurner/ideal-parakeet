import { auth } from "../../config/firebase";
import { db } from "../../config/firebase";
import {
  doc,
  setDoc,
  getDocs,
  getDoc,
  collection,
  deleteDoc,
} from "firebase/firestore";

///////////////////////////////////////////////////////////////
const addReminder = async ({
  description,
  index,
  frequencyType,
  date,
  days,
  frequency,
  scale,
  reminderTime,
  S,
}) => {
  const user = auth.currentUser;

  // make sure user is logged in before trying to add anything
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

/////////////////////////////////////////////////////////////////
const getReminders = async () => {
  // Read data from the database and return

  try {
    const remindersCollecRef = collection(db, "Reminders");
    const data = await getDocs(remindersCollecRef);
    const entries = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(entries);
    return entries; // Directly return the processed entries
  } catch (err) {
    console.error("Error retrieving reminders: ", err);
    return []; // Explicitly return an empty array on error
  }
};

///////////////////////////////////////////////////////////////
const removeReminder = async (docID) => {
  // input will be the id

  try {
    // const remindersCollecRef = collection(db, "Reminders");
    const docRef = doc(db, "Reminders", docID);
    console.log("the doc is: ", doc);
    await deleteDoc(docRef);
    console.log("Successfully removed: ", docID);
  } catch (err) {
    console.error("Error removing reminder: ", err);
  }
};

export { addReminder, getReminders, removeReminder };
