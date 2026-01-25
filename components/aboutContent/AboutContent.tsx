import LinkButton from "../button/LinkButton";
import ServiceCard from "../serviceCard/ServiceCard";

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
      <section className="flex flex-col gap-4">
        <p className="text-muted text-justify indent-4">
          Software developer with experience across backend and frontend,
          focused on building well-structured systems, clean code, system
          integration, and continuous process improvement.
        </p>

        <div className="mt-4 flex justify-end">
          <LinkButton tab="resume" text="View Resume" />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">What I Do</h3>

        <div className="flex justify-between gap-5 overflow-x-auto">
          {services_arr.map((service, index) => (
            <ServiceCard key={index} title={service} />
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <LinkButton tab="projects" text="View Projects" />
        </div>
      </section>
    </>
  );
}
