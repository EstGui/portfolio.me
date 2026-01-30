import LinkButton from "../button/LinkButton";
import ServiceCard from "../serviceCard/ServiceCard";
import ServicesCarousel from "../servicesCarousel/ServicesCarousel";
import TextHighlight from "../textHighlight/TextHighlight";

export default function AboutContent() {
  const services_arr = [
    "APIs & Backend",
    "Web Apps",
    "Clean & Scalable Code",
    "Worflow Automation",
    "Code Maintenance & Refactoring",
  ];

  return (
    <>
      <section className="text-muted flex flex-col gap-4 text-justify indent-4 font-normal">
        {/* Desktop */}
        <p className="hidden md:block">
          Focused on<TextHighlight> backend and frontend </TextHighlight>
          development, with a strong emphasis on{" "}
          <TextHighlight>clean code</TextHighlight>,{" "}
          <TextHighlight>performance</TextHighlight>, and{" "}
          <TextHighlight>automation</TextHighlight>, delivering well-structured,
          efficient, and maintainable software.
        </p>

        <p className="hidden md:block">
          Professional experience combined with personal projects using
          <TextHighlight>
            {" "}
            Next.js, C#, Python, TypeScript, and SQL
          </TextHighlight>
          . Quick adaptation to new technologies and environments, seeking
          junior to mid-level full-time roles and freelance projects where real
          impact can be delivered.
        </p>

        {/* Mobile */}
        <p className="block md:hidden">
          Focused on <TextHighlight>backend and frontend</TextHighlight>{" "}
          development with emphasis on <TextHighlight>clean code</TextHighlight>
          , <TextHighlight>performance</TextHighlight>, and{" "}
          <TextHighlight>automation</TextHighlight>.
        </p>
        <p className="block md:hidden">
          Experience with Next.js, C#, Python, TypeScript, and SQL. Adaptable,
          quick to learn, and open to junior to mid-level roles and freelance
          projects.
        </p>
        <div className="flex justify-end">
          <LinkButton tab="resume" text="Resume" />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        {/* <h3 className="-mb-10 text-lg font-semibold">Tools & Technologies</h3> */}
        <ServicesCarousel />

        <div className="-mt-6 flex justify-end">
          <LinkButton tab="skills" text="Skills" />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">What I Do</h3>

        <div className="relative flex justify-between gap-5 overflow-x-auto">
          {services_arr.map((service, index) => (
            <ServiceCard key={index} title={service} />
          ))}
        </div>

        <div className="flex justify-end">
          <LinkButton tab="projects" text="Projects" />
        </div>
      </section>
    </>
  );
}
