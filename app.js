const express = require('express')

const app = express()
const port = 8080;

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/api/products", (req, res) => {
    res.json(products);
  });

  app.get("/api/info", (req, res) => {
    res.send(`<p>Our store has info for ${products.length} products</p>
          <h3>${new Date()}</h3>`
    );
  });

  app.get("/api/about", (req, res)=>{
    res.json(personal)
  })


  const products = [
    {
      "id": 1,
      "title": "new Title marcos",
      "price": 100004,
      "description": "new Description",
      "images": [
        "https://api.lorem.space/image/shoes?w=640&h=480&r=5193",
        "https://api.lorem.space/image/shoes?w=640&h=480&r=2221",
        "https://api.lorem.space/image/shoes?w=640&h=480&r=2672"
      ]
    },
    {
      "id": 3,
      "title": "new try",
      "price": 29,
      "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      "images": [
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4308",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4555",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=4493"
      ]
    },
    {
      "id": 4,
      "title": "Licensed Plastic Table",
      "price": 808,
      "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      "images": [
        "https://api.lorem.space/image/fashion?w=640&h=480&r=6769",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=6810",
        "https://api.lorem.space/image/fashion?w=640&h=480&r=2350"
      ]
    },
    {
      "id": 5,
      "title": "Refined Plastic Shirt",
      "price": 252,
      "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      "images": [
        "https://api.lorem.space/image/watch?w=640&h=480&r=9592",
        "https://api.lorem.space/image/watch?w=640&h=480&r=6436",
        "https://api.lorem.space/image/watch?w=640&h=480&r=4565"
      ]
    }
  ]

  const personal = {
    name: "juan M. lorza",
    age: 28,
    email: "lorza112@gmail.com",
    phone: "564681534",
    address: "01800054558",
    city: "cali",
    links: [
        {
            name: "GitHub",
            url: "https://github.com/explore",
        },
        {
            name: "twitter",
            url: "https://twitter/juan.lorza",
        },
        
    ],
    website: "https://juanMlorza.dev",
    skills: [
        {
            name: "JavaScript",
            level: "learning",
        },
        {
            name: "react",
            level: "learning",
        },
        {
            name: "html",
            level: "learning",
        },
        {
            name: "Node",
            level: "learning",
        },
    ]
  }