//TODO FINISH VALIDATION FUNCTIONS

export function isName(name){
  return false;
}

export function isPhoneNumber(phoneNumber){
  const phonePattern = /^\d{10}$/;
  return phonePattern.test(phoneNumber);
}

export function isEmail(email){
  return false;
}

export function isMessage(message){
  return false;
}


