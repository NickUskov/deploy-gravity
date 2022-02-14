import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import endpoints from "../api/constants";

const useCarriers = () => {
    const history = useHistory();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(endpoints.carriers, {
            headers: {
                Authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            switch (response.status) {
                case 200:
                    setData(response.data)
                    break;
                case 401:
                    history.push('/login');
                    break;
            }
        })
        .catch((error) => {
            history.push('/login');
        })
    }, [])

    return data;
}

export { useCarriers };