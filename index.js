export default function inputsValidation(input, config) {
  return import(`./${input.name}.js`).then(module => module.default(input.value, config))
}