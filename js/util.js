const ALERT_SHOW_TIME = 5000;

const removeElement = (element) => {
  element.remove();
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');

  const style = alertContainer.style;
  style.zIndex = '100';
  style.position = 'absolute';
  style.left = '0';
  style.top = '0';
  style.right = '0';
  style.padding = '10px 3px';
  style.fontSize = '30px';
  style.textAlign = 'center';
  style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.appendChild(alertContainer);

  setTimeout(removeElement, ALERT_SHOW_TIME, alertContainer);
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const sortRandomly = () => Math.random() - 0.5;

const sortByComments = (a, b) => b.comments.length - a.comments.length;

const isEscape = (evt) => evt.key === 'Escape';

export { showAlert, isEscape, debounce, sortRandomly, sortByComments, removeElement };
