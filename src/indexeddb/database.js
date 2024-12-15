export let database = null;

export const createDb = () => {
  const db = window.indexedDB.open("squirify", 1);

  db.onerror = () => {
    console.log("Error");
  };

  db.onerror = () => {
    console.log("db created");
    database = db.result;
  };

  db.onupgradeneeded = (e) => {
    const db = e.target.result;

    //expenses table object
    const expensesTable = db.createObjectStore("expenses", {
      keyPath: "id",
      autoIncrement: true,
    });
    expensesTable.createIndex("title", "title", { unique: false });
    expensesTable.createIndex("cost", "cost", { unique: false });
    expensesTable.createIndex("date", "date", { unique: false });
    expensesTable.createIndex("description", "description", { unique: false });
  };
};
