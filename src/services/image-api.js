import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '32013797-e87f951a7cad07d86e92511f6',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: '12',
  },
});

export const searchImagesApi = async (name, page = 1) => {
  const { data } = await instance.get(`/?q=${name}&page=${page}`);
  return data;
};
