import Image from "next/image"
import Mooshrom_Section from '../../public/NFT Highlight.svg'

const Index = () => {
  return (
    <section className="Card_Mooshrom mb-40">
      <Image src={Mooshrom_Section} alt="Mooshrom" className="ml-20"/>
  </section>
  )
}

export default Index
