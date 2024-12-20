export const calculateTotal = (expenses) => {
    return new Promise((resolve, reject) => {
        try {
            let total = 0;
            for (let i = 0; i < expenses.length; i++) {
                total += Number(expenses[i].cost);
            }
            resolve(total); // Resuelve la promesa con el resultado total
        } catch (error) {
            reject(error); // Rechaza la promesa si hay un error
        }
    });
};