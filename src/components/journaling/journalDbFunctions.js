import { useEffect } from "react";
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

/////////////////////////////////////////////////////////////////////
const addJournalEntry = async ({ title, dateTime, body }) => {
  const user = auth.currentUser;

  // make sure logged in before adding anything
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

////////////////////////////////////////////////////////////////
const getJournalEntries = async () => {
  // Read data from the database and return

  let data;

  try {
    const remindersCollecRef = collection(db, "journalEntries");
    data = await getDocs(remindersCollecRef);
  } catch (err) {
    console.error(err);
    return;
  }

  if (data) {
    const entries = data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return entries;
  }

  return [];
};

/////////////////////////////////////////////////////////////////////
const replaceJournalEntry = async ({ title, docID, body }) => {
  console.log("docID is: ", docID);
  console.log("title is: ", title);
  console.log("body is: ", body);
  let data;

  try {
    const docRef = doc(db, "journalEntries", docID);
    const docSnapshot = await getDoc(docRef);
    data = docSnapshot.data();
    console.log("data:", data, "data type: ", typeof data);
  } catch (err) {
    console.log("Error updating journal entry: ", err);
  }
  setDoc(doc(db, "journalEntries", docID), {
    title: title,
    dateTime: data.dateTime,
    body: body,
  });
};

//////////////////////////////////////////////////////
const removeJournalEntry = async (docID) => {
  // input will be the id
  let data;

  try {
    // const remindersCollecRef = collection(db, "Reminders");
    const docRef = doc(db, "journalEntries", docID);
    await deleteDoc(docRef);
    console.log("Successfully removed: ", docID);
  } catch (err) {
    console.error("Error removing reminder: ", err);
  }
};

export {
  addJournalEntry,
  getJournalEntries,
  removeJournalEntry,
  replaceJournalEntry,
};
