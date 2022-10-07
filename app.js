const astro = new AstroHTTP();

// * Get Users
// ! In a [synchronous]

// astro.get('https://api.instantwebtools.net/v1/airlines');
// astro.get('https://jsonplaceholder.typicode.com/users');

// ! Using [promise]
// * doing it in a [asynchronous] way
// ! [GET] method

// astro.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));
// astro.get('https://62a6a34fbedc4ca6d7b732b5.mockapi.io/astro/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

astro
  .get("http://localhost:8000/api/products")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
// astro.get('https://62a6a34fbedc4ca6d7b732b5.mockapi.io/astro/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// ! User data that you want to send

// const data =
//     {
//         name: 'Adebayo Ibraheem',
//         username: 'adebayoshola8',
//         email: 'Adeshola@gmail.com'
//     }

// astro.post('https://jsonplaceholder.typicode.com/users', data)
// astro.post('https://62a6a34fbedc4ca6d7b732b5.mockapi.io/astro/users', data)
// astro.post('https://reqres.in/api/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// ! UPDATE users
// astro.put('https://jsonplaceholder.typicode.com/users/2', data)
// astro.put('https://62a6a34fbedc4ca6d7b732b5.mockapi.io/astro/users/3', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// ! DELETE user
// astro.delete('https://62a6a34fbedc4ca6d7b732b5.mockapi.io/astro/users/44')
// .then(data => console.log(data))
// .catch(err => console.log(err));
