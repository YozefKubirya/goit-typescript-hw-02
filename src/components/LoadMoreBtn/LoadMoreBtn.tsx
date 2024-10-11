import { FC } from 'react'
import css from '../LoadMoreBtn/LoadMoreBtn.module.css'
interface LoadMoreBtnProps{
  onLoadMore:()=>void
}
export const LoadMoreBtn:FC<LoadMoreBtnProps>=({onLoadMore})=>{
 return  <>
 
   <button className={css.loadMoreBtn} type='button' onClick={onLoadMore}>
    Load More
   </button>
   
   </>
}