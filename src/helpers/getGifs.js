import { ENV } from "../config/env";

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ENV.GIPHY_API_KEY}&q=${category}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    return data;
}