import client1 from '@/assets/images/client/client-1.svg'
import client2 from '@/assets/images/client/client-2.svg'
import client3 from '@/assets/images/client/client-3.svg'
import client4 from '@/assets/images/client/client-4.svg'
import client5 from '@/assets/images/client/client-5.svg'
import client6 from '@/assets/images/client/client-6.svg'
import Image, { StaticImageData } from 'next/image'

export type ClientLogoType = {
  image: StaticImageData
  alt: string
}

const clientsData: ClientLogoType[] = [
  { image: client1, alt: 'Client 1' },
  { image: client2, alt: 'Client 2' },
  { image: client3, alt: 'Client 3' },
  { image: client4, alt: 'Client 4' },
  { image: client5, alt: 'Client 5' },
  { image: client6, alt: 'Client 6' },
]

const Clients = () => {
  return (
    <section className="relative size-full overflow-hidden pb-20 md:pb-25 lg:pb-35">
      <div className="container">
        <div className="relative flex w-full flex-nowrap overflow-hidden">
          <div className="animate-marquee flex text-sm whitespace-nowrap opacity-70 *:mx-12 *:flex *:px-9">
            {clientsData.map((client, index) => (
              <Image key={index} src={client.image} alt={client.alt} className="client-image" width="242" height="42" />
            ))}
          </div>

          <div className="animate-marquee flex text-sm whitespace-nowrap opacity-70 *:mx-12 *:flex *:px-9">
            {clientsData.map((client, index) => (
              <Image key={index} src={client.image} alt={client.alt} className="client-image" width="242" height="42" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
