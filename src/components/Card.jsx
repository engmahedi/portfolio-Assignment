

const Card = (props) => {

  const {img,title,subTitle,Disc } = props;
  return (
    <>
      <div className="card rounded-[40px] w-[100%] border border-slate-500 text-center">
        <div className="card-body">
        <div className="flex justify-center">
        <img src={img} className="w-10 "/>
        </div>
        
        <h2 className="text-3xl text-slate-600 font-semibold">{title }</h2>
        <h3 className="text-xl">{subTitle }</h3>
        <h3 className="text-xl">{Disc }</h3>
          
        </div>
      </div>
      

      
    
    </>
  )
}

export default Card;