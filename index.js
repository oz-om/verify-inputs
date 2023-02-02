export default function inputsValidation(input, config) {
  return import(`.inputs/${input.name}.js`).then(module => module.default(input.value, config))
}