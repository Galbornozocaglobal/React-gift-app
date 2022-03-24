export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=SoQ9TpozAdLedezPijRGEbGa9SX0V7uX&q=${encodeURI(category)}&limit=10`;
    const query = await fetch(url);
    const { data } = await query.json();

    const gifts = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    });

   return gifts;
}