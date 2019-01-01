export let apiUrl = '';

if (process.env.VUE_APP_ENV == 'production') {
    apiUrl = `https://${process.env.VUE_APP_DOMAIN_PROD}`;
} else {
    apiUrl = 'http://localhost'
}
