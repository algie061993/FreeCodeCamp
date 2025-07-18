// Email Masker. it replace starting from the second letter up to second to the last letter with *
const maskEmail = (email) => {
  // the variable username is the first part of the email in the example "MarcaidaAlgie"
  //it will split the email by @ and take the first part which is index 0 [0]
  let username = email.split("@", -1)[0];
  // the variable domain is the second part of the email in the example "example.com"
  //it will split the email by @ and take the second part which is index 1 [1]
  let domain = email.split("@")[1];
  return (
    // the username will taken from the first part of the email and the domain will taken from the second part of the email
    username[0] +
    //the "*" will be repeated based on the length of the username - 2 because the first letter and the last letter will not be replaced
    "*".repeat(username.length - 2) +
    //the last letter will be taken from the first part of the email
    username[username.length - 1] +
    "@" +
    //the domain will be taken from the second part of the email
    domain
  );
};
let email = "MarcaidaAlgie@example.com";
console.log(maskEmail(email));
