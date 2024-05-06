var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let products = [
    {
      name: "vivo T3x 5G (Celestial Green, 128 GB)",
      price: 16499,
      description: "8 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
      link: "https://www.flipkart.com/vivo-t3x-5g-celestial-green-128-gb/p/itm263ed44f56cd5?pid=MOBGZZCDPBFWUMWG&lid=LSTMOBGZZCDPBFWUMWGUSZ5RR&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_1&otracker=browse&fm=organic&iid=dff266ca-601b-4c0f-a59d-a7270af0cf44.MOBGZZCDPBFWUMWG.SEARCH&ppt=hp&ppn=homepage&ssid=840oqihqv40000001714994205654"
    },
    {
      name: "Motorola Edge 50 Pro 5G with 68W Charger (Black Beauty, 256 GB",
      price: 30999,
      description: "8 GB RAM | 256 GB ROM",
      link: "https://www.flipkart.com/motorola-edge-50-pro-5g-68w-charger-black-beauty-256-gb/p/itmb3f6625c5c896?pid=MOBGXFXYDG8YRZU4&lid=LSTMOBGXFXYDG8YRZU4SAX9WW&marketplace=FLIPKART&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=b_1_1&otracker=browse&fm=organic&iid=172fcf86-ba5c-4608-92f0-df31df801481.MOBGXFXYDG8YRZU4.SEARCH&ppt=browse&ppn=browse&ssid=q39dcsbngw0000001714994541531"
    },
    {
      name: "POCO M6 Pro 5G (Power Black, 128 GB) ",
      price: 9999,
      description: "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
      link: "https://www.flipkart.com/poco-m6-pro-5g-power-black-128-gb/p/itmef8fa46f89738?pid=MOBGRNZ3ER4N3K4F&lid=LSTMOBGRNZ3ER4N3K4FIYYGCU&marketplace=FLIPKART&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=b_1_1&otracker=browse&fm=organic&iid=ab2f193a-fcb3-4f8b-9582-1c946c8a1e8d.MOBGRNZ3ER4N3K4F.SEARCH&ppt=browse&ppn=browse&ssid=ipjayi9wls0000001714994728940"
    },
    {
      name: "SAMSUNG Galaxy F15 5G (Groovy Violet, 128 GB)",
      price: 12999,
      description: "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
      link: "https://www.flipkart.com/samsung-galaxy-f15-5g-groovy-violet-128-gb/p/itm3e7d6c7112d45?pid=MOBGYBAVW8HTJH4X&lid=LSTMOBGYBAVW8HTJH4X9VTKYN&marketplace=FLIPKART&store=tyy%2F4io&srno=b_1_3&otracker=browse&fm=organic&iid=00ca4767-c6b7-47f0-bc07-0a9353aac929.MOBGYBAVW8HTJH4X.SEARCH&ppt=hp&ppn=homepage&ssid=fp8q1b6hyo0000001714994816509"
    }
  ]
  res.render('index', { products });
});

module.exports = router;
