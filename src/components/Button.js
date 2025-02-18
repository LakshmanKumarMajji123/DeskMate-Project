export const Button = ({children}) => {
    return (   
        <section className="max-w-7xl mx-auto px-3 py-7 flex justify-end">
    <div >
      <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >{children}</button>
    </div>
  </section>
    )
  }


  