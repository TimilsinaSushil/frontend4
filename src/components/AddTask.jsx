export default function AddTask() {

   return (
    
      <form className="flex flex-col justify-center max-w-lg mx-auto px-4 space-y-6 mt-10">
        <h1>Add New Task</h1>
         <div>
            <label htmlFor="full-name-small" className="mb-2 text-slate-900 font-medium text-sm inline-block">Task Name</label>
            <input type="text" id="full-name-small" placeholder="Task Name"
               className="px-2.5 py-2 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
         </div>

         <div>
            <label htmlFor="full-name-base" className="mb-2 text-slate-900 font-medium text-sm inline-block">Task description</label>
            <input type="text" id="full-name-base" placeholder="Task Description"
               className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
         </div>

         <button type="submit" class="mt-2! py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Submit</button>
   
      </form>
   );
}