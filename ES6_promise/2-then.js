export default function handleResponseFromAPI(promise) {
  return Promise.any(promise)
    .then(() => new Object('body', 'success', 'status', 200), () => new Error())
    .finally(console.log('Got a response from the API'));
}
