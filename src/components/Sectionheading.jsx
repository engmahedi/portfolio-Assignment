

const Sectionheading = (props) => {
  
  const {subtitle, title} = props;

  return (
    <>
      <div className=" text-center py-20 mb-10">

        <h4 className="text-xl text-slate-600 ">{subtitle}</h4>
        <h2 className="text-5xl font-bold py-3">{title}</h2>

      </div>
    </>
  )
}

export default Sectionheading;
