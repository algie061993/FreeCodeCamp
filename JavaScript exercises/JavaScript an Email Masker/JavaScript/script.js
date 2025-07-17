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
let email = "algie@example.com";
console.log(maskEmail(email));
