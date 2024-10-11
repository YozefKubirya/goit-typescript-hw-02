import css from '../Loader/Loader.module.css'
import { RotatingLines } from "react-loader-spinner"
import { FC } from 'react';
interface LoaderProps {
   visible?: boolean; 
   width?: string; 
   strokeColor?: string; 
   ariaLabel?: string; 
 }
export const Loader:FC<LoaderProps>= ()=>{
   return<>
   <div className={css.loader}> 
      <RotatingLines
  visible={true}
  width="96"
  strokeColor='blue'
  ariaLabel="rotating-lines-loading">
      </RotatingLines>
   </div>
   </>
}