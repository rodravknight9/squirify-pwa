import { defaultCategoriesArray } from "../helpers/defaultCategories";

export const createDb = () => {
  const db = window.indexedDB.open("squirify", 1);

  db.onupgradeneeded = (e) => {
    const db = e.target.result;

    const expensesTable = db.createObjectStore("expenses", {
      keyPath: "id",
      autoIncrement: true,
    });

    expensesTable.createIndex("cost", "cost", { unique: false });
    expensesTable.createIndex("date", "date", { unique: false });
    expensesTable.createIndex("description", "description", { unique: false });
    expensesTable.createIndex("categoryUuid", "categoryUuid", {
      unique: false,
    });

    const categoryTable = db.createObjectStore("categories", {
      keyPath: "uuid",
    });
    categoryTable.createIndex("name", "name", { unique: false });
    categoryTable.createIndex("emoji", "emoji", { unique: false });

    // Insert default data into "categories"
    defaultCategoriesArray.forEach((element) => {
      categoryTable.add(element);
    });
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
      const transaction = db.transaction(["expenses"], "readonly");
      const objectStore = transaction.objectStore("expenses");
      const objectStoreRequest = objectStore.getAll();

      objectStoreRequest.onsuccess = () => {
        resolve(objectStoreRequest.result);
      };

      objectStoreRequest.onerror = () => {
        reject(objectStoreRequest.error);
      };
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};
