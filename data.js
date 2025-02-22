const data = {
  papadias: [
    {
      title: "İtalyan Papadias",
      composition:
        "Pizza Sousu, İtalyan Sosisi, Pepperoni, Mozzarella, Parmezan, Italyan ədviyyatları",
      img: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_4f6b29a2063afa150b3793240a97988e.jpg",
      price: "9",
      category: "papadias",
      variations: [],
      id: "1SfcpmSLl3ot4mc7Z-7ql",
    },
    {
      title: "Cheddar Meksika Papadias",
      composition:
        "Pizza sousu, Yaşıl Bibər, Qril Toyuğu, Mozzarella, Cheddar, Halapeno",
      img: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_5cf3c3909a3c5fa466dc6ed16c5836cc.jpg",
      price: "9",
      category: "papadias",
      variations: [],
      id: "cbz3BHsR1j8F7J4mmjx9a",
    },
    {
      title: "Dabl Cheddar Çizburger Papadias",
      composition:
        "1000 Ada sousu, Mal Əti, Pomidor, Mozzarella və Cheddar Pendirləri",
      img: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_978162a01eda0042ae1707bf563ac3e0.jpg",
      price: "9",
      category: "papadias",
      variations: [],
      id: "esxQUoV8zl2Mswz6eMwkC",
    },
    {
      title: "Nyu Orleans Papadias",
      composition:
        "Sarımsaq Sousu, Yaşıl Bibər, Qril Toyuğu, Qarğıdalı, Mozzarella",
      img: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_2bed10a8aa16b5835f6db36b505ba0fa.jpg",
      price: "9",
      category: "papadias",
      variations: [],
      id: "nusHPUToAxJyK5zQOLBaU",
    },
    {
      title: "Çiken Baffalo Papadias",
      composition:
        "Ranç Sousu, Qril Toyuğu, Pomidor, Mozzarella, Baffalo Sousu",
      img: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_13f62c1a64a60fbfd55cac0579f3d80e.jpg",
      price: "9",
      category: "papadias",
      variations: [],
      id: "Lmz36v0bmKw7moWxD9Oak",
    },
    {
      title: "Acılı Çiken Ranç Papadias",
      composition:
        "Ranç Sousu, Qril Toyuğu, Göbələk, Pomidor, Halapeno, Mozarella",
      img: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_19c1323adbcb9a595018f5979a862204.jpg",
      price: "9",
      category: "papadias",
      variations: [],
      id: "H3WlBKayVTVKvh-EhVUIO",
    },
    {
      title: "Çiken BBQ Papadias",
      composition: "Qril Toyuğu, Göbələk, Mozzarella, Barbekyu sousu",
      img: "https://order.papajohns.az/images/menu/PJ%20Azerbaijan/336x224_f7db43402b2cd4bda0a88b5028bc1dfd.jpg",
      price: "9",
      category: "papadias",
      variations: [],
      id: "JNHsV9QGKzfZOnuqxOV85",
    },
  ],

  desertlar: [
    {
      img: "https://www.papajohns.az/uploads/images/desert/Brownie--320x220-px.png",
      title: "Brownie",
      composition: "",
      price: "7",
      category: "desertlar",
      variations: [],
      variety: [],
      id: "V5TkU5_Jb5cGfmey9bu-O",
    },
    {
      img: "https://www.papajohns.az/uploads/images/desert/Tiramisu--320x220-px.png",
      title: "Tiramisu",
      composition: "",
      price: "7",
      category: "desertlar",
      variations: [],
      variety: [],
      id: "LqUOx499IGm5KS69gzWCW",
    },
    {
      img: "https://www.papajohns.az/uploads/images/desert/%C5%9Eokoladl%C4%B1-sufle.png",
      title: "Şokoladlı Sufle ",
      composition: "",
      price: "5",
      category: "desertlar",
      variations: [],
      variety: [],
      id: "Rl_H4YpvxFumTx-sND0V5",
    },
    {
      img: "https://www.papajohns.az/uploads/images/desert/raspberry-CHEESECAKE.png",
      title: "Moruqlu Cheesecake",
      composition: "",
      price: "7",
      category: "desertlar",
      variations: [],
      variety: [],
      id: "p2GBXwJHaa1mHBRJru5uF",
    },
    {
      img: "https://www.papajohns.az/uploads/images/desert/dondurma%20algida.jpg",
      title: "Dondurma",
      composition: "",
      price: "2",
      category: "desertlar",
      variations: [],
      variety: ["Çiyələkli -  2 M", "Şokoladlı -  2 M"],
      id: "mK-6aVd-B5Ndw3DrHCvQF",
    },
  ],
  category: [
    {
      id: 222,
      category: "kampaniyalar",
      slug: "kampaniyalar",
    },
    {
      id: 1,
      category: "papadias",
      slug: "papadias",
    },
    {
      id: 2,
      category: "pizza",
      slug: "pizza",
    },
    {
      id: 3,
      category: "qalyanaltilar",
      slug: "qalyanaltilar",
    },
    {
      id: 4,
      category: "salat",
      slug: "salat",
    },
    {
      id: 5,
      category: "pasta",
      slug: "pasta",
    },
    {
      id: 6,
      category: "souses",
      slug: "souses",
    },
    {
      id: 7,
      category: "icki",
      slug: "icki",
    },
    {
      id: 8,
      category: "desertlar",
      slug: "desertlar",
    },
  ],
};

const cardsContainer = document.getElementById("cards");

data.papadias.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
                <img src="${item.img}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>${item.composition}</p>
                <p><strong>Qiymət:</strong> ${item.price} AZN</p>
                <button class="select-button">Bunu seç</button>
            `;
  cardsContainer.appendChild(card);
});



