export default function handleResponseFromAPI(promise) {
  return promise.then(() => ({ body: 'success', status: 200 }))
    .then(new Error())
    .finally(console.log('Got a response from the API'));
}
