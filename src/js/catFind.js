fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    console.log('response', response);
    // console.log('response.json()', response.json());
    return response.json();
  })
  .then(data => {
    console.log('data', data);
  })
  .catch(error => {
    console.log('error', error);
  });
