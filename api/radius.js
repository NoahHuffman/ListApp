import axios from 'axios';

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

export const fetchStores = async (latitude, longitude) => {
    const radius = 1609.34; // 1609.34 = 1 mile in meters
    const type = 'supermarket';
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${API_KEY}`;

    try {
        const response = await axios.get(url);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching stores:', error);
        return [];
    }
};