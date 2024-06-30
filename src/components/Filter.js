import React from 'react'

const Filter = ({filterData}) => {
  return (
    <div className='w-11/12 flex flex-wrap gap-y-4 space-x-4 max-w-max mx-auto py-4 justify-center'>
      {
         filterData.map((data)=>
            {
                return(
                    <button key={data.id} className='p-2 bg-black text-white rounded-lg hover:bg-slate-500 hover:text-black'>
                    {data.title}
                    </button>
                )
            }
         )
      }
    </div>
  )
}

export default Filter
