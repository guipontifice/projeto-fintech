import axios from "axios";
import { CompanySearch } from "./company"

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse> (
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit10&exchange=NASDAQ&apikey=${process.env.REACT_API_KEY}`
        );
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("error message: ", error.message);
            return error.message;
        } else {
            console.log("unexpected error: ", error);
            return "An error has occured"
        }
    }
}