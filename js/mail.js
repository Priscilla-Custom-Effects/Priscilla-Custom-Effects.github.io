function submitMail() {
  var form = document.getElementById("mail");

  var fio = form.elements["fio"].value;
  var phone = form.elements["phone"].value;
  var telegram = form.elements["telegram"].value;
  var product = form.elements["product"].value;
  var comment = form.elements["comment"].value;

  var randomNumber = Math.floor(10000 + Math.random() * 90000);

  var subject = "🌊Заявка #" + randomNumber;

  var body =
    "ФИО: " +
    fio +
    "\nТелефон: " +
    phone + "\n" +
    "\nКомментарий: \n" +
    comment + "\n";

  if (product.trim() !== "") {
    body += "\nПродукты в заказе: \n" + product + "\n";
  }

  if (telegram.trim() !== "") {
    body += "\nTelegram: " + telegram;
  }

  if (comment.trim() === "") {
    alert("Пожалуйста, заполните все обязательные поля перед отправкой заявки.");
    return;
  }

  var mailtoLink =
    "mailto:priscilla.effects@gmail.com?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);

  window.open(mailtoLink, '_blank');
}
