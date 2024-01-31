* npm init -y
* npm i json-server
* npm run start

* GET  request
http://localhost:4000/products/1
http://localhost:4000/reviews/1

http://localhost:4000/reviews?productId=1

* POST request (geriausiai naudoti uuid dėl uniklaus id arba iš viso nenurodyti id ir sugeneruos pats json server unikalų id)
http://localhost:4000/products ->
schema: {
            "id": "1",
            "title": "Product 1",
            "category": "electronics",
            "price": 4000,
            "description": "This is description about product 1"
        }

http://localhost:4000/reviews ->
schema: {
        "rating": 3,
        "comment": "Review 1 for product id 2",
        "productId": 2
        }

* PUT request (keičia viską išskyrus id)
http://localhost:4000/products/3 -> 
schema {
    "title": "Atnaujintas Product 3",
    "category": "fitness",
    "price": 1200,
    "description": "This is description about product 3"
}

P.s. tas pats su reviews, bet rekomenduoju naudoti PATCH request vietoj PUT


* PATCH request (keičia tik nurodytus parametrus)
http://localhost:4000/products/3 -> 
schema {
    "price": 1200
}

P.s. tas pats su reviews



* DELETE request
http://localhost:4000/products/3

P.s. tas pats su reviews
