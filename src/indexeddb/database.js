export const createDb = () => {
  const db = window.indexedDB.open("squirify", 1);

  // db.onerror = () => {
  //   console.log("Error");
  // };

  // db.onsuccess = () => {
  //   console.log("db created");
  // };

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

export const addExpense = (expense) => {
  const request = window.indexedDB.open("squirify", 1);
  request.onsuccess = (e) => {
    var db = e.target.result;
    const transaction = db.transaction(["expenses"], "readwrite");
    const objectStore = transaction.objectStore("expenses");
    objectStore.add(expense);
  };
};

export const getExpenses2 = () => {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open("squirify", 1);

    request.onsuccess = (e) => {
      const db = e.target.result;
      const transaction = db.transaction(["expenses"], "readonly"); // readonly es suficiente si solo lees
      const objectStore = transaction.objectStore("expenses");
      const objectStoreRequest = objectStore.getAll();

      objectStoreRequest.onsuccess = () => {
        resolve(objectStoreRequest.result); // Resuelve la promesa con los datos obtenidos
      };

      objectStoreRequest.onerror = () => {
        reject(objectStoreRequest.error); // Rechaza la promesa si hay un error
      };
    };

    request.onerror = () => {
      reject(request.error); // Rechaza la promesa si no se pudo abrir la base de datos
    };
  });
};
