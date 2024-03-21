import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  
  const {page,totalPages, handlePageChange} = useContext(AppContext)
  
  return (
    <div className='fixed bottom-0 bg-white flex w-full justify-center items-center border-2'>
      <div className=' w-11/12 max-w-[650px] flex justify-between py-2'> 
       <div className='flex gap-x-2'>
       { page > 1 &&
          (<button
          className='rounded-md  border-2 px-4 py-1'
          onClick={()=> handlePageChange(page-1)}>
            Previous
          </button>)
        }

        { 
        
        page <  totalPages && 
          (<button
            className='rounded-md border-2 px-4 py-1'
          onClick={()=> handlePageChange(page + 1)} >
          Next
        </button>)
        }
       </div>
        <p  className='font-bold text-sm'>
          page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination