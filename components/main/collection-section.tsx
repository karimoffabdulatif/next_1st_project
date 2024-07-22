import Image from 'next/image';
import Card_Dog from '../../public/Photo Dog.svg'
import Card_Cat from '../../public/Card_Cat.svg'
import Card_Bear from '../../public/Card_bear.svg'
import Card_1025 from '../../public/Card_1025.svg'
import Avatar_Fox from '../../public/Avatar_Fox.svg'
import Card_Mushroom from '../../public/Card_Mushroom.svg'
import Smal_Mushroom from '../../public/Card_small_mushroom.svg'
import Small_Mushroom from '../../public/Cars_small_mushroom2.svg'
import Avatar_Shmove from '../../public/Avatar_shrove.svg'
import Card_Robot from '../../public/Card_Robot.svg'
import Card_Small_R from '../../public/Cars_small_robot.svg'
import Card_Small_R2 from '../../public/Card_Small_Robot 2.svg'
import Avatar_B from '../../public/Avatar_b.svg' 

const Index = () => {
  return (
   <section className="Collection container mx-auto px-28 py-8 mt-16 mb-36">
    <p className=" text-gray-50 text-5xl font-semibold">Trending Collection</p>
    <p className=" text-gray-50 text-2xl font-sans mt-4">Checkout our weekly updated trending collection.</p>
    
<div className='flex gap-40 mt-20'>
<div>
   <Image src={Card_Dog} alt='dog' className='transition ease- hover:-translate-y-1 hover:scale-110'/>
   <div className='flex gap-2 mt-3 ml-1'>
    <Image src={Card_Cat} alt='cat' className='transition ease- hover:-translate-y-1 hover:scale-110'/>
    <Image src={Card_Bear} alt='Bear' className='transition ease- hover:-translate-y-1 hover:scale-110'/>
    <Image src={Card_1025} alt='1025' className='transition ease- hover:-translate-y-1 hover:scale-110'/>
   </div>
    <p className='text-gray-50 text-2xl font-semibold mt-3'>DSGN Animals</p>
   <div className='flex mt-3'>
   <Image src={Avatar_Fox} alt='a_Fox'className='transition ease- hover:-translate-y-1 hover:scale-110'/>
   <p className='text-gray-50 text-xl ml-4'>MrFox</p>
   </div>
   </div>

   <div>
   <Image src={Card_Mushroom} alt='mushroom' className='transition ease- hover:-translate-y-1 hover:scale-110'/>
   <div className='flex gap-2 mt-3 ml-1'>
    <Image src={Smal_Mushroom} alt='mushroom' className='transition ease- hover:-translate-y-1 hover:scale-110'/>
    <Image src={Small_Mushroom} alt='mushroom' className='transition ease- hover:-translate-y-1 hover:scale-110'/>
    <Image src={Card_1025} alt='1025' className='transition ease- hover:-translate-y-1 hover:scale-110'/>
   </div>
    <p className='text-gray-50 text-2xl font-semibold mt-3'>Magic Mushrooms</p>
   <div className='flex mt-3'>
   <Image src={Avatar_Shmove} alt='avatar'className='transition ease- hover:-translate-y-1 hover:scale-110'/>
   <p className='text-gray-50 text-xl ml-3'>Shromie</p>
   </div>
   </div>

   <div>
   <Image src={Card_Robot} alt='robot' className='transition ease- hover:-translate-y-1 hover:scale-110'/>
   <div className='flex gap-2 mt-3 ml-1'>
    <Image src={Card_Small_R} alt='smal_r' className='transition ease- hover:-translate-y-1 hover:scale-110'/>
    <Image src={Card_Small_R2} alt='smal_r' className='transition ease- hover:-translate-y-1 hover:scale-110'/>
    <Image src={Card_1025} alt='1025' className='transition ease- hover:-translate-y-1 hover:scale-110'/>
   </div>
    <p className='text-gray-50 text-2xl font-semibold mt-3'>Disco Machines</p>
   <div className='flex mt-3'>
   <Image src={Avatar_B} alt='a_b'className='transition ease- hover:-translate-y-1 hover:scale-110'/>
   <p className='text-gray-50 text-xl ml-2'>BeKind2Robots</p>
   </div>
   </div>
</div>



   </section>
  )
}

export default Index
