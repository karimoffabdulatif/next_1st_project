import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Image from 'next/image';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Moon from "../../public/Moon.svg"
import Animakidn from "../../public/Avatar Placeholder.svg"

const Index = () => {
  return (
   <section className="Discover_Section mb-20">
         <div className="flex gap-8 pt-16 px-28">
      <section>
        <div style={{width: "500px"}}>
        <h1 className="text-7xl text-gray-50  font-bold">Discover Digital Art & Collect NFTs</h1>
        <p className= 'text-gray-200 text-3xl font-sans my-6'>NFT Marketplace UI Created With Anima For Figma. Collect, Buy And Sell Art From More Than 20k NFT Artists</p>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 w-64 rounded-3xl my-8 h-16 flex items-center justify-center space-x-2">
          <RocketLaunchIcon className="text-gray-50"/>
          <p className="text-gray-50">Get Started</p>
        </button>
        <div className= 'text-gray-50 flex gap-20 text-2xl font-mono my-10'>
          <div>
            <h2>240k+</h2>
            <p >Total Sale</p>
          </div>
          <div>
            <h2 >100k+</h2>
            <p>Auctions</p>
          </div>
          <div>
            <h2>240k+</h2>
            <p>Artists</p>
          </div>
        </div>
      </section>
      <aside>
    <div className="ml-44 pt-5">
    <Image src={Moon} alt="Moon" style={{width: "700px"}} />
        <div className="border-spacing-2  bg-neutral-700 -my-4 rounded-b-2xl">
        <h2 className= 'text-gray-50 text-3xl font-semibold ml-8 my-4'>Space Walking</h2>
      <div className="flex w-20 -my-4">
      <Image src={Animakidn} alt="Animakidn" className="w-9 ml-8"/>
      <p className='text-gray-50 ml-2 my-3'>Animakid</p>
      </div>
        </div>
    </div>
      </aside>
    </div>
   </section>
  )
}

export default Index
