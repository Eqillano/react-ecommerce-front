import axios from "axios";
const REACT_APP_API = "/api";

export const getCategories = async () =>
  await axios.get(`${REACT_APP_API}/categories`);

export const getCategory = async (slug) =>
  await axios.get(`${REACT_APP_API}/category/${slug}`);

export const removeCategory = async (slug, authtoken) =>
  await axios.delete(`${REACT_APP_API}/category/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const updateCategory = async (slug, category, authtoken) =>
  await axios.put(`${REACT_APP_API}/category/${slug}`, category, {
    headers: {
      authtoken,
    },
  });

export const createCategory = async (category, authtoken) =>
  await axios.post(`${REACT_APP_API}/category`, category, {
    headers: {
      authtoken,
    },
  });

export const getCategorySubs = async (_id) =>
  await axios.get(`${REACT_APP_API}/category/subs/${_id}`);
