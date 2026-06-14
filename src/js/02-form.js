const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

populateForm();

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormInput() {
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  const formData = { email, message };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedState = localStorage.getItem(STORAGE_KEY);

  if (savedState) {
    try {
      const { email, message } = JSON.parse(savedState);
      form.elements.email.value = email || '';
      form.elements.message.value = message || '';
    } catch (error) {
      console.error(error);
    }
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === '' || message === '') {
    alert('Lütfen tüm alanları doldurun!');
    return;
  }

  console.log({ email, message });

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}
