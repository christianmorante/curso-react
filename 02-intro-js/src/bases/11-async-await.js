
console.log('React - Hola Mundo');


// async - await

//const getImagenPromesa = () => new Promise( resolve => resolve('http://hola.com'));
//getImagenPromesa().then( console.log );

const getImagen = async () => {
    try {
        const apiKey = 'w5WMiAVIzy43geFknvNlz0h5b0lVeSz8';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
        console.log(data);
    } catch (error) {
        // manejo del error
        console.error(error);
    }
};

//console.log( getImagen());
getImagen().then( console.log );

