import iconDark from '@/assets/images/other/icon-dark.svg'
import team1 from '@/assets/images/team/1.png'
import team2 from '@/assets/images/team/2.png'
import team3 from '@/assets/images/team/3.png'
import team4 from '@/assets/images/team/4.png'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

export type TeamType = {
  name: string
  role: string
  description: string
  image: StaticImageData
}

const teamData: TeamType[] = [
  {
    name: 'Sophia Martinez',
    role: 'Head of Product',
    description: 'Designing seamless tools that connect people to their health data.',
    image: team2,
  },
  {
    name: 'Marcus Allen',
    role: 'Partnerships & Growth Lead',
    description: 'Expanding reach through strategic healthcare collaborations.',
    image: team4,
  },
  {
    name: 'Dr. Emily Carter',
    role: 'Chief Medical Officer',
    description: 'Guiding our clinical standards with 15+ years in functional medicine.',
    image: team1,
  },
  {
    name: 'Ethan Williams',
    role: 'Head of Customer Experience',
    description: 'Creating supportive, reliable experiences for every member.',
    image: team3,
  },
]

const Team = () => {
  return (
    <section className="bg-default-950 relative size-full overflow-hidden py-25">
      <div className="container-fluid">
        <div className="mb-12.5">
          <h2 className="text-primary mb-20 text-center text-4xl font-medium lg:text-5xl">
            Meet the people <span className="text-default-400">behind Healia</span>
          </h2>

          <div className="mb-5 grid gap-5 lg:mb-7.5 lg:grid-cols-4 lg:gap-7.5">
            {teamData.map((member, index) => (
              <div key={index} className="bg-default-700 rounded-2xl p-7.5">
                <p className="text-default-300 mb-12.5 text-sm lg:mb-35">{member.description}</p>

                <div className="inline-flex items-center gap-5">
                  <Image src={member.image} alt="Team Image" className="size-17.5 rounded-lg" />
                  <div>
                    <h3 className="text-primary mb-1 text-xl">{member.name}</h3>
                    <div className="text-default-300 text-sm">{member.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-default-700 flex justify-between rounded-2xl border p-7.5">
            <div>
              <h3 className="text-default-50 text-[26px]">
                A complete wellness membership designed to{' '}
                <span className="text-default-400">
                  give you the <br /> answers, clarity, and care you deserve
                </span>
              </h3>
            </div>
            <div>
              <Link href="/contact" className="bg-primary text-default-950 group inline-flex items-center justify-center gap-2.5 rounded-md px-7.5 py-5 text-lg transition-all">
                Contact Us
                <i className="flex size-5 items-center justify-center transition-all duration-700 group-hover:rotate-180">
                  <Image src={iconDark} alt="Icon" />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
