import React from 'react';
import  Button  from '@vtex/styleguide/lib/Button'
// import styles from './ViewDetailsButton.css'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['buttonContainer', 'buttonLabel']



function CustomButton(props) {

  const handles = useCssHandles(CSS_HANDLES)
return (

   <div className={handles.buttonContainer}>
     <Button {...props} ><span className={handles.buttonLabel}>{props.buttonLabel}</span></Button>
   </div>

)
}

export default CustomButton
