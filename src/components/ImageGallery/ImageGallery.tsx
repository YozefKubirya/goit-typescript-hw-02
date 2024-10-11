import { ImageCard } from './ImageCard';
import css from '../ImageGallery/ImageGallery.module.css'
import { Item,CurrentImageModalProps } from '../../types/types';
import { FC } from 'react';

interface ImageGalleryProps{
   onImageClick:(image:CurrentImageModalProps)=>void,
    items:Item[]
}

export const ImageGallery:FC<ImageGalleryProps>=({items,onImageClick})=>{

return <>
<ul className={css.gallery}>
   {items.map((item)=>{
return <li  key={item.id} className={css.galleryItem}>

<ImageCard
id={item.id}
onImageClick={onImageClick}
regularImage={item.urls.regular}
smallImage={
   item.urls.small
}
/>

</li>
   })}
   
</ul>
</>
}