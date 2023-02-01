export default function email(value) {
  return /^[a-z-.A-Z0-9]+@[a-zA-Z0-9]+[.]+[a-zA-Z0-9]+$/.test(value)
}
