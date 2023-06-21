window.addEventListener("load", function () {
  console.log("coba");

  $(document).on("click", ".btnsend", function () {
    var input_formm = document.getElementById("emailid");

    /* Whatsapp Settings */
    var walink = "https://web.whatsapp.com/send",
      phone = "6282114232591",
      walink2 = "Halo Kopi Dimedja saya ingin Reservation ",
      text_yes = "Terkirim.",
      text_no = "Isi semua Formulir lalu klik Send.";

    /* Smartphone Support */
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      var walink = "whatsapp://send";
    }

    if ("" != input_formm.value) {
      (input_name1 = $("#namaid").val()),
        (input_number1 = $("#numberid").val()),
        (input_email1 = $("#emailid").val()),
        (input_date1 = $("#dateid").val()),
        (input_jumlahorang1 = $("#pengunjungid").val()),
        (input_pesanantambahan1 = $("#pesanid").val());

      var blanter_whatsapp =
        walink +
        "?phone=" +
        phone +
        "&text=" +
        walink2 +
        "%0A%0A" +
        "*Name* : " +
        input_name1 +
        "%0A" +
        "*Email Address* : " +
        input_email1 +
        "%0A" +
        "*Number* : " +
        input_number1 +
        "%0A" +
        "*Input Date* : " +
        input_date1 +
        "%0A" +
        "*Input Jumlah Orang* : " +
        input_jumlahorang1 +
        "%0A" +
        "*Pesanan Tambahan* : " +
        input_pesanantambahan1 +
        "%0A";

      window.open(blanter_whatsapp, "_blank");
      document.getElementById("text-info").innerHTML =
        '<span class="yes">' + text_yes + "</span>";
    } else {
      document.getElementById("text-info").innerHTML =
        '<span class="no">' + text_no + "</span>";
    }
  });
});
