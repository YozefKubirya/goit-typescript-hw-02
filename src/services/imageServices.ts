import axios from "axios";
const ACCESS_KEY='Uk9z8-OiNEJE_1qXBMBvAnhNnBaUO-Qh17y-NiozoAg';
axios.defaults.baseURL=`https://api.unsplash.com/`

 interface ImageData {
   id: string;
   description: string;
   urls: {
     small: string;
     regular: string;
   };
   
 }
 
 interface FetchImagesResponse {
   total_pages: number;
   results: ImageData[];
 }
export const fetchImages  = async (topic:string,page:number):Promise<ImageData[]>=>{
   const response= await axios.get<FetchImagesResponse>(`search/photos?`,{
      params:{
         client_id: ACCESS_KEY,
         query:topic,
         page:page,
         per_page:10
      }
      
   })
   console.log(response.data.total_pages)
   return response.data.results;
}