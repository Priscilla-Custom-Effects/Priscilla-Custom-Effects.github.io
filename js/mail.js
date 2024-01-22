function submitMail() {
  var form = document.getElementById("mail");

  var fio = form.elements["fio"].value;
  var phone = form.elements["phone"].value;
  var telegram = form.elements["telegram"].value;
  var product = form.elements["product"].value;
  var comment = form.elements["comment"].value;

  var randomNumber = Math.floor(10000 + Math.random() * 90000);

  var subject = "Заявка " + randomNumber;

  var body =
    "ФИО: \r\n" +
    fio +
    "Телефон: \r\n" +
    phone +
    "Telegram: \r\n" +
    telegram +
    "Продукты в заказе: \r\n" +
    product +
    "Комментарий: \r\n" +
    comment;

  window.location.href =
    "mailto:priscilla.effects@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
}
