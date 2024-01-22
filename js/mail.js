function submitMail() {
  var form = document.getElementById("mail");

  var fio = form.elements["fio"].value;
  var phone = form.elements["phone"].value;
  var telegram = form.elements["telegram"].value;
  var product = form.elements["product"].value;
  var comment = form.elements["comment"].value;

  var randomNumber = Math.floor(10000 + Math.random() * 90000);

  var subject = "Заявка " + randomNumber;

  var body = "ФИО: " +
    fio +
    "\nТелефон: " +
    phone +
    "\nКомментарий: \n" +
    comment;;

  if (telegram.trim() !== "") {
    body += "\nTelegram: " + telegram;
  }

  if (product.trim() !== "") {
    body += "\nПродукты в заказе: " + product;
  }

  if (comment.trim() === "") {
    alert("Пожалуйста, заполните все обязательные поля перед отправкой заявки.");
    return;
  }

  window.location.href =
    "mailto:priscilla.effects@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
}
