import axios from "axios";
const REACT_APP_API = "/api";

export const getSubs = async () => await axios.get(`${REACT_APP_API}/subs`);

export const getSub = async (slug) =>
  await axios.get(`${REACT_APP_API}/sub/${slug}`);

export const removeSub = async (slug, authtoken) =>
  await axios.delete(`${REACT_APP_API}/sub/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const updateSub = async (slug, sub, authtoken) =>
  await axios.put(`${REACT_APP_API}/sub/${slug}`, sub, {
    headers: {
      authtoken,
    },
  });

export const createSub = async (sub, authtoken) =>
  await axios.post(`${REACT_APP_API}/sub`, sub, {
    headers: {
      authtoken,
    },
  });
