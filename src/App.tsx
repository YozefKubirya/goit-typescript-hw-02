import './App.css'

import { useEffect, useState } from 'react'
import {SearchBar} from './components/SearchBar/SearchBar';
import {LoadMoreBtn} from './components/LoadMoreBtn/LoadMoreBtn';
import {ImageGallery} from './components/ImageGallery/ImageGallery';
import { fetchImages } from './services/imageServices';
import {Loader} from './components/Loader/Loader';
import {ErrorMessage} from './components/ErrorMessage/ErrorMessage';
import {ImageModal} from './components/ImageModal/ImageModal';
import css from '../src/components/ImageGallery/ImageGallery.module.css'
import { Item } from './types/types';
import { CurrentImageModalProps } from './types/types';



function App() {
const [items,setItems]=useState<Item[]>([])  
const [topic,setTopic]=useState<string>("")
const [page,setPage]=useState<number>(1)
const [error,setError]=useState<boolean>(false)
const [loading,setLoading]=useState<boolean>(false)
const [isModalOpen,setModal]=useState<boolean>(false)
const [currentImage, setCurrentImage] = useState<CurrentImageModalProps | null>(null);

useEffect(()=>{
  if(topic === ""){
    return;
  }
  const getImages = async (): Promise<void>=>{
    try{
    setLoading(true);
    setError(false);
    const fetchedImages:Item[]=await fetchImages(topic,page);
      setItems((prevItems)=>[...prevItems,...fetchedImages]);
      
    } catch (error){
     setError(true);
    console.log(error)
    }finally{
      setLoading(false)
    }   
  }
console.log(topic,page)
getImages()
},[topic,page])

const handleSearch= (newTopic:string):void=>{

setTopic(newTopic);
setPage(1)  ;
setItems([]);
};

const handleLoadMore =():void=>{
setPage(page+1);
}
const openModal=(image:CurrentImageModalProps):void=>{
  setCurrentImage(image)
  setModal(true);
}
const closeModal=():void=>{
  setModal(false)
  setCurrentImage(null)
}
  return (
    <>
     <SearchBar onSearch={handleSearch}/> 
     <ImageGallery items={items} onImageClick={openModal}/>
     {items.length>0 && !loading&& <LoadMoreBtn onLoadMore={handleLoadMore}/>}
     {error && <ErrorMessage/>}
    {loading && <Loader/>} 
    {isModalOpen && currentImage && (
        <ImageModal  onClose={closeModal}>
           <img src={currentImage.urls.regular} alt="big-Image" className={css.imageCardRegular}/>
        </ImageModal>
      )}
   
    </>
  )
}

export default App
