// auth-company-header.js
// Helper function for generating Authorization header
// if available

export default function authCompanyHeader() {
    let company = JSON.parse(localStorage.getItem('company'));

    if (company && company.token) {
        console.log(`Bearer ${company.token}`);
        return { 'Authorization': `Bearer ${company.token}`};
    } else {
        console.log('No token available');
        return {};
    }
}
