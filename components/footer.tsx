import Image from 'next/image'
import headerIcon from '../public/header-icon.png'
import Icons from '../public/Icons_Insta.svg'

const Index = () => {
  return (
    <footer className=' container mx-auto px-28 py-8 mt-3 '>

    <div className='flex gap-44'>
     
   <div>
   <div className="flex text-2xl gap-3 font-mono font-semibold transition ease- hover:-translate-y-1 hover:scale-100 mb-6">
      <Image src={headerIcon} alt="Header Icon"/>
        <h2 className= 'text-gray-400'>NFT Marketplace</h2>
      </div>
        <p className='text-lg text-gray-400 w-64 mb-3'>NFT marketplace UI created with Anima for Figma.</p>
        <p className='text-lg text-gray-400 w-64 mb-4'>Join our community</p>
        <Image src={Icons} alt='Icons'/>
   </div>


   <div>
      <div className=" text-2xl gap-3 font-mono font-semibold transition ease- hover:-translate-y-1 hover:scale-100 mb-6">
      <h2 className= 'text-gray-400'>Explore</h2>
      </div>
      <p className='text-lg text-gray-400 w-64 mb-3'>Marketplace</p>
      <p className='text-lg text-gray-400 w-64 mb-4'>Renkings</p>
      <p className='text-lg text-gray-400 w-64 mb-4'>Connct a wallet</p>

   </div>

        <div >
            <p className="text-2xl text-gray-400 font-semibold flex gap-3 font-mono  transition ease- hover:-translate-y-1 hover:scale-100 mb-6 w-96">Join our weekly digest</p>
             <p className="text-lg text-gray-400 w-96 mt-7 mb-16">Get exclusive promotions & updates straight to your inbox.</p>
             <div>
                <input placeholder="Enter Your Email" className="w-48 h-12 pl-3  rounded-ss-2xl rounded-bl-2xl" />
                <button className="text-white w-48 h-12 bg-purple-600 hover:bg-purple-700  rounded-2xl absolute -ml-12">
                Subscribe
                </button>
             </div>
            </div>
    </div>
    </footer>
        
  )
}

export default Index
