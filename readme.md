# @oz-om/verify-inputs
A simple functionality to verify user inputs, This library is capable of validating username, email, and password fields based on provided requirements.

## instalation
To install this library, run the following command in your terminal:
```npm i @oz-om/verify-inputs```

or you can [download code](https://github.com/oz-om/verify-inputs/archive/refs/heads/main.zip)

## Usage
Here's how to use the @oz-om/verify-inputs library in your project:
```javascript 
import inputsValidation from '@oz-om/verify-inputs';

inputsValidation({ name: 'inputName', value: 'inputValue' }, requirements).then(result => {
  console.log(result);
});
```

#### first paramiter (input)
specific input type and value
1. name : (STRING)
   * `username, email, password`
3. value: (STRING)

**example**
```
{
  name:"useranme",
  value:"oz-om"
}
```
#### second paramiter (requirements)
each input has different requirements:
# 📌 username input:
`
{ 
  maxLength: 3,
  hasSymbols:false 
}
`
* `maxLength`: is 3 by default, if value less than 3 it's will return  "username length short then ${maxLength}"
* `hasSymbols`: is `false` by default that's mean the useranme can't include any symbols, if set hasSymbols to `true` then you need to specific what Symbols that if there in username will be valid
* `symbols`: is empty string by default, when to set hasSymbols to `true` then you need to specific symbols in string `_-~`

**example**
```
 {
   maxLength:4,
   hasSymbols: true,
   symbols: '_-~'
 }
```
```javascript=
let usernameInput = document.getElementById("usernane");

usernameInput.oninput = () => {
    inputsValidation(usernameInput).then(result =>{
        console.log(result)
  });
}

usernameInput.oninput = () => {
    inputsValidation(usernameInput, { 
      maxLength: 4, 
      hasSymbols: false
    }).then(result => {
      console.log(result);
    });
}


/*---------------------*/

inputsValidation({name:'username', value:'oz-om'}) // invalid username, its should contain only letters

inputsValidation({ 
    name: 'username', 
    value: 'oz-om' }, { 
    maxLength: 4, 
    hasSymbols: false }).then(result => {
  console.log(result);// invalid username, its should contain only letters
});

inputsValidation({ 
    name: 'username', 
    value: 'oz-om' }, { 
    maxLength: 4, 
    hasSymbols: true,
    symbols: '_-'
}).then(result => {
  console.log(result);// true
});

```

###### 📌 email input:
no requirements specific reight now
**example**
```javascript=
inputsValidation({name:'email',value:'ozom@mail.com'})
```

# 📌 password input:
`
{
  maxLength:8,
  upper: true,
  symbols: true
}
`
* `maxLength`: is 8 by default
* `upper`: is `true` by default, password should contain Uppercase letters
* `symbols` is `true` by default, pssowrd shoukd contain one symbo at least `"@#$_&-+(][){}\=^"`

**example**
```
{
  maxLength: 6,
  upper: false,
  symbols: false
}
```

```javascript=

let passwordInput = document.querySelector(".passwordInput");

inputsValidation(passwordInput).then(result => {
  console.log(result);
});
inputsValidation(passwordInput, { 
    maxLength: 4,
    symbol: false
}).then(result => {
  console.log(result);
});

/*---------------------------*/

inputsValidation({
    name:'password', 
    value:'ozom'
}).then(result => {
  console.log(result); // invalid password, its should contain more than 8 carachters, one UpperCase, One symbol
});

inputsValidation({ 
    name: 'password', 
    value: 'ozom' }, { 
    maxLength: 4,
    upper: false,
    symbol: false
}).then(result => {
  console.log(result); // true
});

```