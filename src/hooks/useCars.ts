import axios from "axios";
import { useEffect, useState } from "react";
import endpoints from "../api/constants";
import { useHistory } from 'react-router-dom';

const useCars = () => {
    const history = useHistory();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(endpoints.cars, {
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
                    localStorage.clear();
                    history.push('/login');
                    break;
            }
        })
        .catch(() => {
            localStorage.clear();
            history.push('/login');
        })
    }, [])

    return data;
}

export { useCars };