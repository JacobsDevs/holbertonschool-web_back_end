export default async function guardrail(mathFunction) {
  try {
    const queue = [];
    const response = await Promise.try(mathFunction, queue)
      .then(
        (value) => {
          queue.push(value);
        },
      )
      .catch(
        (reason) => {
          queue.push(reason.toString());
        },
      )
      .finally(
        () => {
          queue.push('Guardrail was processed');
        },
      );
    return queue;
  } catch (err) {
    console.log(err);
  }
}
