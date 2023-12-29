function submitMail() {
    var form = document.getElementById("mail");

    var fio = form.elements["fio"].value;
    var phone = form.elements["phone"].value;
    var telegram = form.elements["telegram"].value;
    var comment = form.elements["comment"].value;

    var body = "ФИО: " + fio + "%0AТелефон: " + phone + "%0ATelegram: " + telegram + "%0AДополнительный комментарий: " + comment;

    window.location.href = "mailto:priscilla.effects@gmail.com?subject=Заявка&body=" + body;
}
