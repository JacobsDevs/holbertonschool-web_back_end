import { uploadPhoto, createUser } from 'utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((p) => (p.resolve()))
    .finally(console.log(body, firstName, lastName));
}
