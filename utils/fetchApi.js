import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '5d2d90ea85msh6e1ccec39867c03p1d51e2jsn3bffdfb669a9'
          }
    })
    return data;
}