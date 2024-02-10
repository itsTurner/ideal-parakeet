import { auth } from "../config/firebase";
import { db } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";

const addJournalEntry = async ({ title, dateTime, body, S }) => {
  const user = auth.currentUser;

  if (!user) {
    console.log("No user logged in");
    return;
  }

  const userID = user.uid;
  const docID = userID + "_" + dateTime;

  try {
    await setDoc(doc(db, "journalEntries", docID), {
      title: title,
      dateTime: dateTime,
      body: body,
    });
    console.log("Journal Entry documend added with docID: ", docID);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default addJournalEntry;
