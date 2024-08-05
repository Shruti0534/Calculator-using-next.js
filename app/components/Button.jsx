import React from 'react'

const Button = (props) => {
  return (
    <div 
    className={`${ props.w === 120 ? "w-[135px]" : "w-[60px]"} border-0 outline-0  h-[60px] rounded-md text-xl cursor-pointer m-2 bg-gray-600 items-center justify-center flex shadow`}
    >
        {props.val}
    </div>
  )
}

export default Button