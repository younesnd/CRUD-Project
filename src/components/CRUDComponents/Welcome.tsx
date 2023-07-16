export default function Welcome() {
  return (
    <div className=" wrapper flex flex-col items-center ml-44 mt-12 shadow-sm border border-rose-900 w-3/5 ">
        <div className="ml-8 mb-8 mr-8">
      <h1 className=" font-semibold text-lg mt-5">Welcome to Coding in React - CRUD Application !</h1>
      <p className=" font-mono">Today {new Date().toLocaleDateString()} you will learn:</p>
      
      </div>
    </div>
  )
}
