import {useState} from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");

    const searchApi = async (searchTerm) => {
        try {
            setError("");
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "san jose",
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setError("Something went wrong!");
        }
    }
    return [results, error, searchApi];
};

