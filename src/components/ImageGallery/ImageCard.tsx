
import css from '../ImageGallery/ImageGallery.module.css'
import { FC } from 'react'
import { CurrentImageModalProps } from '../../types/types'
interface ImageCardProps{
   onImageClick:(image:CurrentImageModalProps)=>void,
   regularImage:string,
   smallImage:string,
   id:string,
}

export const ImageCard:FC<ImageCardProps>= ({
  onImageClick,regularImage,smallImage,id
})=>{
   return <>
      <img src={smallImage} className={css.smallGalleryImage}  alt='small-Image' onClick={() => onImageClick({ id, urls: { regular: regularImage } })}/>
   </>
}