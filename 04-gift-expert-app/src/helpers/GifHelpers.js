
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&api_key=w5WMiAVIzy43geFknvNlz0h5b0lVeSz8&limit=10&offset=5`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    //console.log(gifs);
    return gifs;
};