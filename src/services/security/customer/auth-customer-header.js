// auth-company-header.js
// Helper function for generating Authorization header
// if available

export default function authCustomerHeader() {
    let customer = JSON.parse(localStorage.getItem('customer'));

    if (customer && customer.token) {
        console.log(`Bearer ${customer.token}`);
        return { 'Authorization': `Bearer ${customer.token}`};
    } else {
        console.log('No token available');
        return {};
    }
}
