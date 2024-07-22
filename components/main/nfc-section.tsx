import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Image from 'next/image';
import Galaxy from '../../public/Card_Galaxy.svg'
import Life from '../../public/Card_Life.svg'
import Skafander from '../../public/Card_Skafandr.svg'



const Index = () => {
  return (
    <section className="Discover-NFC container mx-auto px-28 py-8 mt-16 mb-32">
     <div>
      <p className="text-gray-50 text-5xl font-semibold mt-2" >Discover More NFTs</p>
      <div className='flex '>
      <p className=" text-gray-50 text-3xl font-sans mt-4">Explore new trending NFTs</p>
      <button className=" bg-transparent hover:bg-purple-700 border border-purple-600 hover:border-purple-700 hover:text-gray-50 w-64 rounded-3xl my-8 h-16 flex items-center justify-center space-x-3 ml-auto -mt-6">
          <RemoveRedEyeIcon className=" text-purple-600"/>
          <p className="text-purple-600 ">See All</p>
        </button>
      </div>
    </div>


    <div className='flex gap-24 mt-14'>
      <Image src={Galaxy} alt='Galacticos'className='rounded-2xl transition ease- hover:-translate-y-1 hover:scale-110'/>
      <Image src={Life} alt='Life'className='rounded-2xl transition ease- hover:-translate-y-1 hover:scale-110'/>
      <Image src={Skafander} alt='Skafander'className='rounded-2xl transition ease- hover:-translate-y-1 hover:scale-110'/>
    </div>
   </section>
  )
}

export default Index
