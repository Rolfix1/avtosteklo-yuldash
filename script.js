document.querySelector('#request-form').addEventListener('submit', function (event) {
  event.preventDefault();
  if (!this.reportValidity()) return;
  const data = new FormData(this);
  const message = `Здравствуйте! Хочу записаться на установку лобового стекла.\nАвтомобиль: ${data.get('car')}\nТелефон: ${data.get('phone')}\nСвязаться: ${data.get('channel')}`;
  if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(message).catch(() => {});
  window.location.href = `https://wa.me/79273127909?text=${encodeURIComponent(message)}`;
});
