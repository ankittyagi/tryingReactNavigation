const baseURL = 'https://api.github.com/';
const findAllURL = baseURL+'users';
const findByNameURL = baseURL+'search/users'

export let findAll = () => fetch(`${findAllURL}`)
    .then(
    	(response) => response.json()
    );

export let findUsersByName = (name) => fetch(`${findByNameURL}?q=${name}`)
    .then(
    	(response) => response.json()
    ).catch((error)=> console.log(error));

export let findUserByName = (name) => fetch(`${findAllURL}/${name}`)
    .then(
    	(response) => response.json()
    );