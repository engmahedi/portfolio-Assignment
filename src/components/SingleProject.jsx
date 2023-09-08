

const SingleProject = (props) => {

  const { image,title} = props;

  return (
    
    <>
    <div className="card w-[100%] bg-slate-100 border border-slate-500 rounded-[30px]">
  <figure className="px-10 pt-10">
    <img src={image} alt="image" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl font-bold py-3">{ title}</h2>
    
    <div className="card-actions">
      <button className="border border-slate-600 py-2 px-7 rounded-full font-semibold hover:bg-slate-700 hover:text-white transition">GitHub</button>
      <button className="border border-slate-600 py-2 px-4 rounded-full font-semibold hover:bg-slate-700 hover:text-white transition">Live Demo</button>
      
    </div>
  </div>
</div>
    
    </>

  )
}

export default SingleProject;