export const calculateTotal = (expenses) => {
  return new Promise((resolve, reject) => {
    try {
      let total = 0;
      for (let i = 0; i < expenses.length; i++) {
        total += Number(expenses[i].cost);
      }
      resolve(total);
    } catch (error) {
      reject(error);
    }
  });
};
