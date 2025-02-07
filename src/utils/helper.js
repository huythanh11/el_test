// const { expect } = require('@playwright/test');

// const retry = async (fn, maxAttempts = 3, delay = 1000) => {
//     let lastError;
//     for (let attempt = 1; attempt <= maxAttempts; attempt++) {
//         try {
//             return await fn();
//         } catch (error) {
//             lastError = error;
//             if (attempt === maxAttempts) throw lastError;
//             await new Promise(resolve => setTimeout(resolve, delay));
//         }
//     }
// };

// const expectStatusSuccess = async (response) => {
//     expect(response.ok()).toBeTruthy();
//     expect(response.status()).toBeLessThan(400);
// };

// const generateRandomEmail = () => {
//     return `test${Math.random().toString(36).substring(7)}@example.com`;
// };

// module.exports = {
//     retry,
//     expectStatusSuccess,
//     generateRandomEmail
// };