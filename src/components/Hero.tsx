function Hero() {
  return (
    <section className="bg-hero w-screen h-screen">
      <div className="container mx-auto flex flex-col justify-center items-center h-full pb-20">
        <h1 className="text-white hero-title text-hero text-center font-thin">
          <span>
            Transforming&nbsp;Ideas into <br /> Seamless Digital Experiences
          </span>
        </h1>
        <h6 className="text-[#94a3b8] px-4 lg:px-40 text-hero-tag text-center mt-4 font-extralight">
          <span className="whitespace-nowrap block lg:inline">
            Front-end Heavy Full Stack Developer
          </span>{" "}
          | <span className="whitespace-nowrap">Web Application Architect</span>{" "}
          |{" "}
          <span className="whitespace-nowrap block lg:inline">
            Problem Solver
          </span>
        </h6>
      </div>
    </section>
  );
}

export default Hero;
