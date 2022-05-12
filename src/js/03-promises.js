import Notiflix from 'notiflix';

const form = document.querySelector('form');

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      // Fulfill
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
    } else {
      // Reject
      reject(`❌ Rejected promise ${position} in ${delay}ms`)
    }
  })
};

const onFormSubmit = e => {
  e.preventDefault();

  const delay = e.currentTarget.elements.delay.value;
  const step = e.currentTarget.elements.step.value;
  const amount = e.currentTarget.elements.amount.value;

  for (let i = 0; i < amount; i += 1) {
    setTimeout(() => {
      createPromise(i + 1, +delay + i * +step)
        .then(message => Notiflix.Notify.success(message))
        .catch(message => Notiflix.Notify.failure(message));
    }, +delay + i * +step);
  };
  e.currentTarget.reset();
}

form.addEventListener('submit', onFormSubmit);
