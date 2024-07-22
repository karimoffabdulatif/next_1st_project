import Image from "next/image";
import Wallet from '../../public/Icon_Wollet.svg'

const Index = () => {
  return (
    <section className="Creators container mx-auto px-28 py-8 mt-16 mb-20">
    <p className="text-gray-50 text-5xl font-semibold" >How It Works</p>
    <div className='flex'>
    <p className=" text-gray-50 text-3xl font-sans mt-4">Find out how to get started</p>
    </div>

    <div className="flex gap-32 mt-14">
        <div className="bg-transparent hover:bg-zinc-600 rounded-2xl bg-zinc-700 hover:border-zinc-600 w-80">
        <Image src={Wallet} alt="wallet" className="mt-7 ml-7"/>
        <p className="text-2xl font-semibold text-gray-50 ml-16">Setup Your wallet</p>
        <p className="w-56 text-center text-gray-50 ml-12  mt-3">Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
        </div>

        <div className="bg-transparent hover:bg-zinc-600 rounded-2xl bg-zinc-700 hover:border-zinc-600 w-80">
        <Image src={Wallet} alt="wallet" className="mt-7 ml-7"/>
        <p className="text-2xl font-semibold text-gray-50 ml-16">Setup Your wallet</p>
        <p className="w-56 text-center text-gray-50 ml-12  mt-3">Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
        </div>

        <div className="bg-transparent hover:bg-zinc-600 rounded-2xl bg-zinc-700 hover:border-zinc-600 w-80">
        <Image src={Wallet} alt="wallet" className="mt-7 ml-7"/>
        <p className="text-2xl font-semibold text-gray-50 ml-16">Setup Your wallet</p>
        <p className="w-56 text-center text-gray-50 ml-12  mt-3">Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
        </div>
    </div>
    
    </section>
  )
}

export default Index
