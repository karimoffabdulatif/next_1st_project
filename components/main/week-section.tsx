import Image from "next/image"
import Cosmonaft from '../../public/Card_Cosmonaft.svg'
import EmailIcon from '@mui/icons-material/Email';

const Index = () => {
  return (
    <section className="Weeks container mx-auto px-28 py-8 mt-16 mb-20">
        <div className=" bg-zinc-700 pt-12 pb-12 rounded-3xl">
            <div className="flex gap-80 ml-12">
             <Image src={Cosmonaft} alt="Cosmos" className="transition ease- hover:-translate-y-1 hover:scale-110"/>
            <div >
            <p className="text-5xl text-gray-50 font-semibold w-96">Join our weekly digest</p>
             <p className="text-2xl text-gray-50  w-96 mt-7 mb-16">Get exclusive promotions & updates straight to your inbox.</p>
             <div>
                <input placeholder="Enter Your Email" className="w-48 h-12 pl-3  rounded-ss-2xl rounded-bl-2xl" />
                <button className="text-white w-48 h-12 bg-purple-600 hover:bg-purple-700  rounded-2xl absolute -ml-12">
                <EmailIcon className="text-white "/>
                Subscribe
                </button>
             </div>
            </div>
            </div>
        </div>

    </section>
  )
}

export default Index
