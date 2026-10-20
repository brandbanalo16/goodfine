import heroImg from '@/assets/images/bg/hero-inner-image.png'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
}

const Page = () => {
  return (
    <>
      <section className="relative size-full overflow-hidden py-20 md:py-25 lg:pt-55 lg:pb-35">
        <Image src={heroImg} className="absolute inset-0 -z-1 size-full object-cover opacity-90" alt="Decoration" />

        <div className="container">
          <div className="text-center">
            <h1 className="text-default-50 text-5xl leading-[1.2em] md:text-[64px]">Terms & Conditions</h1>
          </div>
        </div>
      </section>

      <section className="relative size-full overflow-hidden py-20 md:py-25 lg:py-35">
        <div className="relative z-10 container max-w-245!">
          <h2 className="mb-2.5 text-2xl lg:text-[28px]">
            Collecting Personal Information
            <br />
          </h2>
          <p className="mb-2.5">
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem
            Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
          <ul className="mb-10 list-inside list-disc space-y-2.5">
            <li>There are many variations of passages of Lorem Ipsum available.</li>
            <li>Iusto odio dignissimos ducimus qui blanditiis.</li>
            <li>Praesentium voluptatum deleniti atque.</li>
            <li>Quas molestias excepturi sint occaecati.</li>
          </ul>
          <p className="mb-2.5">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" <em>by Cicero are also reproduced in their exact original form</em>, accompanied by English versions from
            the 1914 translation by H. Rackham.
          </p>
          <h2 className="mb-2.5 text-2xl lg:text-[28px]">Sharing Personal Information</h2>
          <p className="mb-2.5">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing <strong>hidden in the middle of text.</strong> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200
            Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
          <p className="mb-2.5">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <ol className="mb-10 list-inside list-decimal space-y-2.5">
            <li>sometimes on purpose.</li>
            <li>classical Latin literature from 45 BC.</li>
            <li>The Extremes of Good and Evil.</li>
            <li>This book is a treatise on the theory.</li>
          </ol>
          <p>Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </div>
      </section>
    </>
  )
}

export default Page
