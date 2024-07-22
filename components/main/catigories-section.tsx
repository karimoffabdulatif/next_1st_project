import Image from 'next/image'
import Card_Pencil from '../../public/Card_pencil.svg'
import Card_Monkey from '../../public/Card_Monkey.svg'
import Card_Music from '../../public/Card_Music.svg'
import Card_Father from '../../public/Card_Father.svg'
import Card_Video from '../../public/Card_Video.svg'
import Card_Utility from '../../public/Card_Utility.svg'
import Card_Sport from '../../public/Card_Sport.svg'
import Card_Net from '../../public/Card_Net.svg'






const Index = () => {
  return (
    <section className="Categories container mx-auto px-28 py-8 mt-16 mb-32">
     <p className="text-5xl font-semibold text-gray-50 mb-16">Browse Catigories</p>

     <div>
        <div className='flex gap-20 mb-12 '>
           <Image src={Card_Pencil} alt='Pencil' className='rounded-2xl transition ease- hover:-translate-y-1 hover:scale-110'/>
           <Image src={Card_Monkey} alt='Monkey'className='rounded-2xl transition ease- hover:-translate-y-1 hover:scale-110'/>
           <Image src={Card_Music} alt='Music'className='rounded-2xl transition ease- hover:-translate-y-1 hover:scale-110'/>
           <Image src={Card_Father} alt='Father'className='rounded-2xl transition ease- hover:-translate-y-1 hover:scale-110'/>
        </div>
        <div className='flex gap-20'>
           <Image src={Card_Video} alt='Video'className='rounded-2xl transition ease- hover:-translate-y-1 hover:scale-110'/>
           <Image src={Card_Utility} alt='Utility'className='rounded-2xl transition ease- hover:-translate-y-1 hover:scale-110'/>
           <Image src={Card_Sport} alt='Sport'className='rounded-2xl transition ease- hover:-translate-y-1 hover:scale-110'/>
           <Image src={Card_Net} alt='Net'className='rounded-2xl transition ease- hover:-translate-y-1 hover:scale-110'/>
        </div>
     </div>
    </section>
  )
}

export default Index
