function FormTask() {
  return (
    <div>
      
      <form action="">

        <input 
          type="text" 
          name="title"
          className="bg-slate-400 rounded-md p-2 mb-2 block"   
        />
        <textarea 
          name="description"
          className="bg-slate-400 rounded-md p-2 mb-2 block"   
        ></textarea>
        <button>Save</button>

      </form>

    </div>
  )
}

export default FormTask
