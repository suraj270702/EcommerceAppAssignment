import React from 'react'

const Pagination = ({page,setPage}) => {
    const handleNext=(page)=>{
        if(page < 10){
            setPage(page+1)
        }
        
    }

    //console.log(page)

    const handlePrevious=(page)=>{
        if(page > 1){
            setPage(page - 1)
        }
    }
  return (
   <>
   <nav aria-label="Page navigation example">
  <ul className="inline-flex -space-x-px text-base h-10">
    <li>
      <button disabled={page === 1 ? true : false} onClick={()=>handlePrevious(page)}  className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
    </li>
    {
        [...Array(10)].map((_,index)=>(
            <li key={index}>
      <button onClick={()=>setPage(index+1)}  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{index + 1}</button>
    </li>
        ))
    }
    <li>
      <button disabled={page===10 ? true : false} onClick={()=>handleNext(page)}  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
    </li>
  </ul>
</nav>
   </>
  )
}

export default Pagination