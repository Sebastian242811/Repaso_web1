// auth-company-header.js
// Helper function for generating Authorization header
// if available

export default function authDispatcherHeader() {
    let dispatcher = JSON.parse(localStorage.getItem('dispatcher'));

    if (dispatcher && dispatcher.token) {
        console.log(`Bearer ${dispatcher.token}`);
        return { 'Authorization': `Bearer ${dispatcher.token}`};
    } else {
        console.log('No token available');
        return {};
    }
}
