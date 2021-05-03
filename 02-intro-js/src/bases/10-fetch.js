
console.log('React - Hola Mundo');

// Fetch API
const apiKey = 'w5WMiAVIzy43geFknvNlz0h5b0lVeSz8';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// peticion.then( resp => {
//     console.log(resp);
//     resp.json().then( data => {
//         console.log(data)
//     })
// });


peticion
    .then( resp => resp.json())
    .then( ({data}) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
        console.log(data.images.original.url);
    })
    .catch( console.warn );