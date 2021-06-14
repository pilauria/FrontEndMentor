const form = document.getElementById('form');
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Show input error message & outline red
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';

  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Email validation
function validEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (first.value === '') {
    showError(first, 'First name cannot be empty');
  } else {
    showSuccess(first);
  }

  if (last.value === '') {
    showError(last, 'Last name cannot be empty');
  } else {
    showSuccess(last);
  }

  if ((email.value = '')) {
    showError(email, 'Email cannot be empty');
  } else if (!validEmail(email.value)) {
    showError(email, 'Looks like this is not an email');
  } else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'Password name cannot be empty');
  } else {
    showSuccess(password);
  }
});
