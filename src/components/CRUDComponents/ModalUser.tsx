import { UsersExpData } from "@/api/CRUDApi/fetchCRUDApi"
export type TypesetShowModal = (M:boolean) => any


export default function Modal(props:{setShowModal:TypesetShowModal,crudata : UsersExpData[] , index:number}) {
  const {setShowModal,crudata , index} = props
  return (
  
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 items-center rounded-lg shadow-lg relative flex flex-col bg-white w-72 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-5 rounded-t">
                  <h2 className='font-semibold text-center'>User Details</h2>
                </div>
                {/*body*/}
                  <div className="flex flex-col ml-4 mr-4 text-slate-400  leading-relaxed ">
                    <span>Name : {crudata[index].name}</span>
                    <span>Website : {crudata[index].website}</span>
                    <span>Address  : {crudata[index].address}</span>
                    
                  </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6  rounded-b">
                  <button
                    className="text-blue-900 ml-5 background-transparent font-bold uppercase py-0 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        
    
    
  )
}
