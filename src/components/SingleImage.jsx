



const SingleImage = (props) => {
  const {Image } = props;
  return (
    <div>
      <div className="card w-96 bg-base-100 ">
          <figure className="p-5 pt-10 bg-slate-100 rounded-lg">
            <img src={Image} alt="Image" className=""/>
          </figure>
          
      </div>
    </div>
    
  );
};

export default SingleImage;