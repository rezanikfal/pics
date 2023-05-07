import axios from "axios";
const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: "Client-ID VHimqWVlgP1mvEEjvfaDJVJAHL8OxeCbKv41P1vyUyU"
        },
        params: {
            query: term
        }
    })
    return response.data.results
};

export default searchImages