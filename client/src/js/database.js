import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

export const putDb = async (content) => {           // <=  Add logic to a method that accepts some content and adds it to the database
  const jateDb = await openDB("jate", 1);           // <=  Console.log("PUT to the database");
  const tx = jateDb.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  const request = store.put({id: 1, value: content});
  const result = await request;
  console.log("Updated text entry has been saved to the database!", result);
};

export const getDb = async () => {                // <=  Add logic for a method that gets all the content from the database.
  console.log("Text has been retrieved from the database.");
  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const request = store.getAll();
  const result = await request;
  console.log("result.value", result.value);
  return result.value;
};

initdb();
