db = db.getSiblingDB("staj_db");
db.staj_tb.drop();

db.staj_tb.insertMany([
      {
        "id":1,
        "isim": "istanbul",
        "ilceler": ["kadikoy", "Besiktas"],
        "nufus": 15410000
      },
      {
        "id":2,
        "isim": "Ankara",
        "ilceler": ["cankaya", "Kecioren"],
        "nufus": 5445000
      },
      {
        "id":3,
        "isim": "izmir",
        "ilceler": ["Karsiyaka", "bornova"],
        "nufus": 4279000
      },
      {
        "id":4,
        "isim": "Bursa",
        "ilceler": ["Nilufer", "Osmangazi"],
        "nufus": 2901396
      },
      {
        "id":5,
        "isim": "Antalya",
        "ilceler": ["Muratpasa", "Kepez"],
        "nufus": 2398791
      },
      {
        "id":6,
        "isim": "Adana",
        "ilceler": ["Seyhan", "Yuregir"],
        "nufus": 2237447
      },
      {
        "id":7,
        "isim": "Konya",
        "ilceler": ["Selcuklu", "Meram"],
        "nufus": 2180427
      },
      {
        "id":8,
        "isim": "Gaziantep",
        "ilceler": ["sahinbey", "sehitkamil"],
        "nufus": 2033419
      },
      {
        "id":9,
        "isim": "Mersin",
        "ilceler": ["Akdeniz", "Yenisehir"],
        "nufus": 1051587
      },
      {
        "id":10,
        "isim": "Diyarbakir",
        "ilceler": ["Baglar", "Yenisehir"],
        "nufus": 1619573
      },
]);
  