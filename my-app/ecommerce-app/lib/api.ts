import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/products';

export const fetchProducts = async () => (await axios.get(BASE_URL)).data;
export const fetchCategories = async () => (await axios.get(`${BASE_URL}/categories`)).data;
export const fetchProductById = async (id: number) => (await axios.get(`${BASE_URL}/${id}`)).data;
