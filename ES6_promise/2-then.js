export default function handleResponseFromAPI(promise) {
  return Promise.any(promise)
    .then(() => ({ body: 'success', status: 200 }), () => (new Error('Error')))
    .finally(console.log('Got a response from the API'));
}
