export default async function guardrail(mathFunction) {
  const queue = [];
  await Promise.try(mathFunction, queue)
    .then(
      (value) => {
        queue.push(value);
      },
      (reason) => {
        queue.push(reason.toString());
      },
    )
    .finally(
      () => {
        queue.push('Guardrail was processed');
        console.log(queue);
      },
    );
  return queue;
}
