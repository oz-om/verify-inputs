export default function password(password, rquirements={}) {
  let { maxLength = 8, upper = true, symbols = true } = rquirements;

  if (password.length < maxLength) return `password length must be more than ${maxLength}`;
  
  if (!/[A-Z]/.test(password) && upper) return 'Upper case require';
  
  if (/[A-Z]/.test(password) && !upper) return 'string contains Upper case and Upper option set to false, remove UpperCase or change Upper to true or remove it';
  
  if (symbols && !/[@#%&]/.test(password)) return 'Symbols require';
  
  if (!symbols && /[@#%&]/.test(password)) return 'string contains Symbols (@#$&*) and Symbols option set to false, check your string or change Symbols to true or remove it';
  
  return true;
}
