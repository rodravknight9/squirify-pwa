import { defaultCategoriesArray } from "../helpers/defaultCategories";

export const createDb = () => {
  return new Promise((resolve, reject) => {
    const dbRequest = window.indexedDB.open("squirify", 1);

    dbRequest.onupgradeneeded = (e) => {
      const db = e.target.result;

      const expensesTable = db.createObjectStore("expenses", {
        keyPath: "id",
        autoIncrement: true,
      });
      expensesTable.createIndex("cost", "cost", { unique: false });
      expensesTable.createIndex("date", "date", { unique: false });
      expensesTable.createIndex("description", "description", {
        unique: false,
      });
      expensesTable.createIndex("categoryUuid", "categoryUuid", {
        unique: false,
      });

      const categoryTable = db.createObjectStore("categories", {
        keyPath: "uuid",
      });
      categoryTable.createIndex("name", "name", { unique: false });
      categoryTable.createIndex("emoji", "emoji", { unique: false });

      const transaction = e.target.transaction;
      const categoryStore = transaction.objectStore("categories");

      defaultCategoriesArray.forEach((element) => {
        categoryStore.add(element);
      });
    };

    dbRequest.onsuccess = (e) => {
      resolve(e.target.result);
    };

    dbRequest.onerror = (e) => {
      console.error("Database error:", e.target.errorCode);
      reject(e.target.errorCode);
    };
  });
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

export const getByDate = (option) => {
  return new Promise((resolve, reject) => {
    const now = new Date();
    let startDate, endDate;
    const formatDate = (date) => date.toISOString().split("T")[0];

    switch (option) {
      case "today":
        startDate = formatDate(
          new Date(now.getFullYear(), now.getMonth(), now.getDate())
        );
        endDate = formatDate(
          new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
        );
        break;

      case "month":
        startDate = formatDate(new Date(now.getFullYear(), now.getMonth(), 1));
        endDate = formatDate(
          new Date(now.getFullYear(), now.getMonth() + 1, 1)
        );
        break;

      case "year":
        startDate = formatDate(new Date(now.getFullYear(), 0, 1));
        endDate = formatDate(new Date(now.getFullYear() + 1, 0, 1));
        break;

      default:
        reject(
          new Error("Invalid option. Use 'today', 'month', or 'thisYear'.")
        );
        return;
    }

    const request = window.indexedDB.open("squirify", 1);

    request.onsuccess = (e) => {
      const db = e.target.result;
      const transaction = db.transaction("expenses", "readonly");
      const objectStore = transaction.objectStore("expenses");
      const index = objectStore.index("date");

      const keyRange = IDBKeyRange.bound(startDate, endDate, false, true);
      const cursorRequest = index.openCursor(keyRange);

      const results = [];
      cursorRequest.onsuccess = () => {
        const cursor = cursorRequest.result;
        if (cursor) {
          results.push(cursor.value);
          cursor.continue();
        } else {
          resolve(results);
        }
      };

      cursorRequest.onerror = (event) => {
        reject(event.target.error);
      };
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};
