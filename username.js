export default function username(username, requirements = {}) {
  let {
    maxLength = 3,
      hasSymbols = false,
      symbols = ''
  } = requirements;

  if (username.length < maxLength) return `username length short then ${maxLength}`

  if (hasSymbols) {
    let pattern = `^[a-zA-Z${symbols}]+$`;
    let regEx = new RegExp(pattern)
    if (!regEx.test(username)) return "invalid usernam it's include a character(s) that is not given on symbols option"
  }
  if (!hasSymbols && !/^[a-zA-Z]+$/.test(username)) return "invalid username, its shoul contain only letters"
  return true
}