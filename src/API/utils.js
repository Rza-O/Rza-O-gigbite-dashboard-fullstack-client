import axios from "axios";


export const imageUpload = async (imageData) => {
   const formData = new FormData();
   formData.append('image', imageData);

   const {data} = await axios.post()
}