
import { BsPatchCheckFill } from 'react-icons/bs';

const SingleExperience = (props) => {

  const {title,subtitle } = props;
  return (
    <>
      <div className="grid grid-cols-2">
        <div className='flex justify-end pr-5'>
          
          <BsPatchCheckFill className='text-2xl'/>
        </div>
        <div className='text-left'>
          <h2 className='text-xl font-bold'>{ title}</h2>
          <h5 className='text-lg text-slate-500 '>{ subtitle}</h5>
        </div>
      </div>
    </>
  )
}

export default SingleExperience;