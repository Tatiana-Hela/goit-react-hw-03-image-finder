import axios from 'axios';

export const searchImages = async (name, page = 1) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=32013797-e87f951a7cad07d86e92511f6&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
