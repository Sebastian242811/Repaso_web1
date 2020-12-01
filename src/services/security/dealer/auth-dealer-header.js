// auth-company-header.js
// Helper function for generating Authorization header
// if available

export default function authDealerHeader() {
    let dealer = JSON.parse(localStorage.getItem('dealer'));

    if (dealer && dealer.token) {
        console.log(`Bearer ${dealer.token}`);
        return { 'Authorization': `Bearer ${dealer.token}`};
    } else {
        console.log('No token available');
        return {};
    }
}
