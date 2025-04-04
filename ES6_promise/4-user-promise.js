export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (typeof firstName === 'string' && typeof lastName === 'string') {
      resolve(
        {
          firstName,
          lastName,
        },
      );
    } else {
      reject(new TypeError('firstName and lastName must be strings'));
    }
  });
}
