import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => console.log(values))
    .finally(console.log('Success'));
}
