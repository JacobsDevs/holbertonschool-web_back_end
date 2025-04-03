export default function handleResponseFromAPI(promise) {
  promise.then(((res) => ({ status: 200, body: 'success' })), ((rej) => { Error(); }));
}
