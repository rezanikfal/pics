import axios from "axios";
const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: "Client-ID VHimqWVlgP1mvEEjvfaDJVJAHL8OxeCbKv41P1vyUyU"
        },
        params: {
            query: "car"
        }
    })

    console.log(response);
    return response
};

export default searchImages