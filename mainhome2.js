window.addEventListener("load", function () {
  console.log("testing");

  const coffee = [
    {
      img: "/img/Menu_Item_Coffee.png",
      title: "Hot Cappuchino",
      price: "20k",
    },
    {
      img: "/img/Menu_Item_Coffee.png",
      title: "Hot Latte",
      price: "22k",
    },
    {
      img: "/img/Menu_Item_Coffee.png",
      title: "Hot qsAmericano",
      price: "19k",
    },
    {
      img: "/img/Menu_Item_Coffee.png",
      title: "Hot Aadmericano",
      price: "19k",
    },
    {
      img: "/img/Menu_Item_Coffee.png",
      title: "Hot Cappuchino",
      price: "20k",
    },
    {
      img: "/img/Menu_Item_Coffee.png",
      title: "Hot Latte",
      price: "22k",
    },
    {
      img: "/img/Menu_Item_Coffee.png",
      title: "Hot qsAmericano",
      price: "19k",
    },
    {
      img: "/img/Menu_Item_Coffee.png",
      title: "Hot Aadmericano",
      price: "19k",
    },
  ];

  const non_coffee1 = [
    {
      img: "/img/1.jpg",
      title: "Taro",
      price: "16k",
      link: "https://desty.menu/kopidimedja-purwokerto/products-list/1910661",
    },
  ];
  const non_coffee2 = [
    {
      img: "/img/2.jpg",
      title: "Red Velvet",
      price: "25k",
      link: "#",
    },
  ];
  const non_coffee3 = [
    {
      img: "/img/3.jpg",
      title: "Chocolate",
      price: "25k",
      link: "#",
    },
  ];
  const non_coffee4 = [
    {
      img: "/img/6.jpg",
      title: "Creamy Manggo",
      price: "26k",
      link: "#",
    },
  ];
  const non_coffee5 = [
    {
      img: "/img/8.jpg",
      title: "Matcha",
      price: "25k",
      link: "#",
    },
  ];
  const snack = [
    {
      img: "/img/4.jpg",
      title: "Fries Platter <br> (Cireng, French Fries, <br> Sausage, Nugget)",
      price: "30k",
    },
    {
      img: "/img/5.jpg",
      title: "French Fries",
      price: "20k",
    },
  ];

  const food = [
    {
      img: "/img/Menu_Item_Food.png",
      title: "nasiA",
      price: "20k",
    },
    {
      img: "/img/Menu_Item_Food.png",
      title: "nasiB",
      price: "22k",
    },
    {
      img: "/img/Menu_Item_Food.png",
      title: "nasiC",
      price: "19k",
    },
    {
      img: "/img/Menu_Item_Food.png",
      title: "nasiD",
      price: "19k",
    },
  ];

  const coffeebtn = document.getElementById("coffeebtn");
  const noncoffeebtn = document.getElementById("noncoffeebtn");
  const snackbtn = document.getElementById("snackbtn");
  const foodbtn = document.getElementById("foodbtn");
  const lisdaftartmakanan = document.getElementById("lisdaftartmakanan");

  coffeebtn.addEventListener("click", function () {
    console.log("tombolcoffeeclick");
    let render = "";
    coffee.forEach((element) => {
      render += `
        <div class="makanan">
            <img src="${element.img}" alt="" />
            <div class="nama_makanan">${element.title}</div>
            <div class="harga_makanan">${element.price}</div>
        </div>
      `;
    });
    lisdaftartmakanan.innerHTML = render;
  });

  noncoffeebtn.addEventListener("click", function () {
    console.log("tombolnoncoffeeclick");
    let render = "";
    non_coffee1.forEach((element) => {
      render += `
      
        <div class="makanan" onclick="window.open('${element.link}' ,'_blank')" style="cursor:pointer">
            <img src="${element.img}" >
            <div class="nama_makanan">${element.title}</div>
            <div class="harga_makanan">${element.price}</div>
        </div>
      `;
    });
    non_coffee2.forEach((element) => {
      render += `
      <div class="makanan" onclick="window.open('${element.link}' ,'_blank')" style="cursor:pointer">
            <img src="${element.img}" >
            <div class="nama_makanan">${element.title}</div>
            <div class="harga_makanan">${element.price}</div>
        </div>
      `;
    });
    non_coffee3.forEach((element) => {
      render += `
        <div class="makanan" onclick="window.location='${element.link}'" style="cursor:pointer">
            <img src="${element.img}" >
            <div class="nama_makanan">${element.title}</div>
            <div class="harga_makanan">${element.price}</div>
        </div>
      `;
    });
    non_coffee4.forEach((element) => {
      render += `
        <div class="makanan" onclick="window.location='${element.link}'" style="cursor:pointer">
            <img src="${element.img}" >
            <div class="nama_makanan">${element.title}</div>
            <div class="harga_makanan">${element.price}</div>
        </div>
      `;
    });
    non_coffee5.forEach((element) => {
      render += `
        <div class="makanan"  onclick="window.location='${element.link}'" style="cursor:pointer">
            <img src="${element.img}">
            <div class="nama_makanan">${element.title}</div>
            <div class="harga_makanan">${element.price}</div>
        </div>
      `;
    });
    lisdaftartmakanan.innerHTML = render;
  });
  snackbtn.addEventListener("click", function () {
    console.log("tombolnoncoffeeclick");
    let render = "";
    snack.forEach((element) => {
      render += `
        <div class="makanan">
            <img src="${element.img}" alt="" />
            <div class="nama_makanan">${element.title}</div>
            <div class="harga_makanan">${element.price}</div>
        </div>
      `;
    });
    lisdaftartmakanan.innerHTML = render;
  });
  foodbtn.addEventListener("click", function () {
    console.log("tombolnoncoffeeclick");
    let render = "";
    food.forEach((element) => {
      render += `
        <div class="makanan">
            <img src="${element.img}" alt="" />
            <div class="nama_makanan">${element.title}</div>
            <div class="harga_makanan">${element.price}</div>
        </div>
      `;
    });
    lisdaftartmakanan.innerHTML = render;
  });
});
