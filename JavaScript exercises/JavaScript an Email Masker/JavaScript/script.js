// Email Masker. it replace starting from the second letter up to second to the last letter with *
const maskEmail = (email) => {
  let username = email.split("@", -1)[0];
  let domain = email.split("@")[1];
  return (
    username[0] +
    "*".repeat(username.length - 2) +
    username[username.length - 1] +
    "@" +
    domain
  );
};
let email = "Jhanine@example.com";
console.log(maskEmail(email));
