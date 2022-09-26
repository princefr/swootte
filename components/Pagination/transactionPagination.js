


const TransactionPagination = ({data, currentPage, forward, backward, onButtonClicked}) => {
    if(data.pageTotal < 1) return null;
    if(data.pageTotal > 1) return (
        <ol className="flex justify-center space-x-1 text-xs font-medium pt-4">
            {
               currentPage > 0 ? <li>
                        <button onClick={backward} className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        </button>
                </li> : null
            }

               {
                Array.from({length: Math.ceil(data.pageTotal)+ 1}).map((value, index) => {
                    if(index == 0) return null;
                    if(Math.ceil(data.pageTotal) + 1 != (currentPage +1)) return <li key={index}>
                        <button onClick={((e) => {onButtonClicked(e, index)})}>
                            <p  className={`block w-8 h-8 leading-8 text-center border  rounded-full ${index == (currentPage +1) ? "bg-black border-black text-white" : "border-gray-100"}`}>{index}</p>
                        </button>
                    </li>
                })
               } 

            {
                (currentPage +1) != Math.ceil(data.pageTotal)  ? <li>
                <button onClick={forward} className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                </button>
            </li>: null
            }
            </ol>
    )

}


export default TransactionPagination