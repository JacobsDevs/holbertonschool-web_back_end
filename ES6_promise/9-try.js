export default async function guardrail(mathFunction) {
  const queue = [];
  const variable = await Promise.try(mathFunction)
    .then((value) => {
      queue.push(value);
    })
    .catch((reason) => {
      queue.push(reason.toString());
    })
    .then(() => {
      queue.push('Guardrail was processed');
      console.log(queue);
    });
}
