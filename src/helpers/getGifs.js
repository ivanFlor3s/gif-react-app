export const getGifs = async (categoria) => {
    const url =
   `https://api.giphy.com/v1/gifs/search?api_key=mz6MLpk2211YvtZTpqvkkQvHpLWkYvrg&q=${encodeURI(categoria)}&limit=10`;

    const result = await fetch(url);
    const { data } = await result.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    
    return gifs
  };
