import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer -2tYqoUB6-IMktWFjG60E_gvl0NWqlnvRNPDRXNbKLIJW09ZhiTdP1a3q5o1WXJjaaOeO5unw6-pNTcT445dBzqsQmDLOdOPd_-_zLPAgWhOgOlU4EI_3KJLLAtOYXYx',
    },
})
