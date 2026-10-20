const Content = () => {
  return (
    <>
      <section className="relative size-full overflow-hidden py-20 md:py-25 lg:py-35">
        <div className="container max-w-245!">
          <h2 className="mb-2.5 text-[30px]">5 Proven strategies to extend your health</h2>

          <p className="mb-12.5">
            Early detection can make all the difference. Identifying potential health risks before they develop ensures timely intervention and better outcomes. Awareness, action, and regular checks are the pillars of preventative health. Proactive health measures often prevent
            complications before they escalate. Early screenings are not just tests—they are a way to safeguard your future, giving you control over your well-being. The sooner risks are identified, the more effective prevention becomes.
          </p>

          <ul className="mb-17.5 list-inside list-disc space-y-2.5" role="list">
            <li>The standard chunk of Lorem Ipsum used since the 1500s.</li>
            <li>reproduced below for those interested.</li>
            <li>It is a long-established fact that a reader will.</li>
            <li>distracted by the readable content of a page when looking at its layout.</li>
          </ul>

          <p className="mb-12.5">
            Machines now move in seamless coordination, handling tasks once tedious for humans, yet innovation and strategic thinking remain in human hands. Time once spent on repetitive work is now available for creativity, process improvement, and breakthrough ideas. SaaS is
            evolving into a smarter, faster, and more sustainable industry.
          </p>

          <div className="border-default-200 mb-10 h-150 min-w-full overflow-hidden rounded-lg border lg:-mx-15">
            <iframe
              className="size-full"
              src="https://www.youtube.com/embed/elgqxmdVms8?si=yYfzbunShGP15tde"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <h2 className="mb-2.5 text-[32px]">Ten questions you should answer truthfully</h2>
          <p className="mb-12.5">
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem
            Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>

          <blockquote className="bg-primary mb-10 rounded-lg p-12.5 text-white lg:-mx-15">
            <em className="text-lg italic">
              "True efficiency in SaaS is not measured by speed alone, but by the harmony of human ingenuity and machine precision. It is the relentless pursuit of smarter processes, sustainable practices, and innovative solutions that transforms ordinary production into
              extraordinary results. In a world where technology evolves daily, those who embrace breakthroughs, harness data, and empower their workforce will define the future of industry."
            </em>
          </blockquote>

          <p>
            Automation is no longer a choice — it is the engine driving modern SaaS. With smart machines, AI, and human expertise working together, industries achieve higher output, reduce waste, and maintain a competitive edge. Every process becomes smarter, greener, and
            future-ready, turning challenges into opportunities for innovation.
          </p>
        </div>
      </section>
    </>
  )
}

export default Content
