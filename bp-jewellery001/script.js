function contactWhatsApp() {
  window.open("https://wa.me/918837016756", "_blank");
}

function enquire(product) {
  let message = `Hello, I am interested in ${product}`;
  let url = `https://wa.me/918837016756?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
