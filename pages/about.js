import Head from "next/head"

export default function About() {

  return (
    <>
      <Head>
        <title>Ryan Benhase // Cincinnati, OH</title>
        <meta name="description" content="Strategic thinker, creative problem solver, developer, and marketer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>About Me</h1>
        <p>
          {`I've been coding for twenty years, with over a decade of professional experience in 
          the marketing and advertising industry. Since 2017, I've served as Director 
          of Web Development at a fast-growing digital agency.`}
        </p>
        <p>
          {`But while experience is nice, success in today's (unpredictable, post-COVID, always-paradigm-shifting) 
            world requires adapatability above all else. It doesn't matter that I learned Python when I was sixteen if I'm 
            not prepared for what's coming tomorrow.`}
        </p>
        <p>
          {`Fortunately, I'm an analytical, strategic thinker with a passion for understanding the world around me 
          (and figuring out how to improve it). I regularly define problems, identify opportunities, build strategies,
          and engage in methodical scenario planning. After each endeavor, I measure my success, 
          evaluate new opportunities, and iterate.`}
        </p>
        <p>
          {`I currently lead a dynamic, multidisciplinary team of digital experts all aligned in a mission to create
          outstanding websites and web apps (while also supporting and tracking a veritable smorgasboard of digital advertising
          campaigns). I'm committed to working hard, serving others, improving processes, and growing continually—both 
          as a person and as a professional. So, no matter what happens next, I'll be as ready as anyone.`}
        </p>
        <p>
          {`When I'm not working, I enjoy travel, cooking, podcasts, photography, learning new things, and being a dad 
          to two children (most of the time).`}
        </p>
      </main>
    </>    
  )
}
