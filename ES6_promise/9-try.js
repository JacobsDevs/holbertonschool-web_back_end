export default async function guardrail(mathFunction) {
  const queue = [];
  const promise = await Promise.try(mathFunction, queue)
    .then(
      (value) => {
        queue.push(value);
      },
      (reason) => {
        queue.push(reason);
      },
    )
    .finally(
      () => {
        queue.push('Guardrail was processed');
      },
    );
  return queue;
}
