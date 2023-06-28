const regexpName = /^[a-zA-Z ]+(([\'\,\.\- ][a-zA-Z])?[a-zA-Z]*)*$/;
const regexpEmail =
  /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const regexpPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

export { regexpEmail, regexpName, regexpPassword };
