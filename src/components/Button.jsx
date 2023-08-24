import React from 'react'

const Button = () => {

    const handleRefresh = () => {
        window.location.reload();
      };

  return (
    <div className='w-full h-auto justify-center items-center flex '>
        <div onClick={handleRefresh} className='w-[100px] h-[50px] bg-slate-600 flex justify-center items-center rounded-xl hover:bg-slate-50 hover:text-slate-600 cursor-pointer hover:border-2'>
                <h1>REFRESH</h1>
        </div>
    </div>
  )
}

export default Button