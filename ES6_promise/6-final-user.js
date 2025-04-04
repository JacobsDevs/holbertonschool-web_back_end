import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => values.map((e) => {
      if (e.status === 'fulfilled') {
        return { status: e.status, value: e.value };
      }
      return { status: e.status, value: String(e.reason) };
    }));
}
