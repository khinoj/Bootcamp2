// TODO: Install the following package:
import { openDB } from 'idb';

// TODO: Complete the initDb() function below:
const initdb = async () => 
  openDB('todos', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('todos')) {
        console.log('todos database already exists');
        return;
      }
      db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
      console.log('todos database created');
    },
  });


// TODO: Complete the postDb() function below:
export const postDb = async (name, home, cell, email)  => {
    console.log('Post to the ase');
    const todosDb = await openDB('todos', 1);
    const tx = todosDb.transaction('todos', 'readwrite');
    const store = tx.objectStore('todos');
    const request = store.add({ name: name, home: home, cell: cell, email: email });
    const result = await request;
    console.log('Data saved to the database', result);
};

// TODO: Complete the getDb() function below:
export const getDb = async () => {
  
};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
  
};

initdb();
