import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((p) => (p.resolve()))
    .finally(console.log(body, firstName, lastName));
}
