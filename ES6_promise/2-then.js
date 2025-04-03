export default function handleResponseFromAPI(promise) {
  return Promise.any(promise).then(() => 'Success', () => new Error())
    .finally(console.log('Got a response from the API'));
}
