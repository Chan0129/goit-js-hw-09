document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('promiseForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const delayInput = form.querySelector('[name="delay"]');
    const stepInput = form.querySelector('[name="step"]');
    const amountInput = form.querySelector('[name="amount"]');

    const firstDelay = parseInt(delayInput.value);
    const delayStep = parseInt(stepInput.value);
    const amount = parseInt(amountInput.value);

    for (let i = 1; i <= amount; i++) {
      createPromise(i, firstDelay + (i - 1) * delayStep)
        .then(({ position, delay }) => {
          showNotification(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          showNotification(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }
  });

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;

      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }

  function showNotification(message) {
    // You can use Notiflix or any other notification library here
    console.log(message); // For simplicity, logging to console
  }
});
