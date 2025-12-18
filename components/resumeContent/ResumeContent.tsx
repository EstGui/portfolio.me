export default function ResumeContent() {
    const cursos = [
        {
            id: 1,
            title: "Desenvolvimento Web Moderno",
            start: "02/2022",
            end: "07/2022",
            description: "HTML, CSS, JavaScript, Git e fundamentos essenciais de desenvolvimento web."
        },
        {
            id: 2,
            title: "React Avançado",
            start: "09/2022",
            end: "12/2022",
            description: "React Hooks, Context API, otimização, roteamento e integração com APIs reais."
        },
        {
            id: 3,
            title: "UI/UX Design",
            start: "01/2023",
            end: "05/2023",
            description: "Princípios de design, heurísticas, prototipação, wireframes e testes de usabilidade."
        },
        {
            id: 4,
            title: "Node.js e APIs REST",
            start: "06/2023",
            end: "11/2023",
            description: "Criação de APIs escaláveis com Express, autenticação, validação e integração com banco de dados."
        }
    ];


    return (
        <>
            <section className="mb-7">
                <div className="flex items-center gap-3.5 mb-6">
                    <div className="relative w-[31px] h-[31px] rounded-[10px] bg-[linear-gradient(135deg,#7297E9,#22222200)]
                        before:content-[''] before:absolute before:inset-px before:bg-[#222] before:rounded-[inherit]">
                        {/* <ion-icon className="text-blue-900" name="book-outline"></ion-icon> */}
                    </div>
                    <h3 className="font-semibold text-xl">Education</h3>
                </div>

                <ol className="ml-11">
                    {cursos.map((curso, i) => {
                        const isLast = i === cursos.length - 1

                        return (
                            <li 
                                key={curso.id}
                                className={`timeline-item
                                relative 
                                mb-5
                                
                                ${!isLast ? `
                                    before:content-[''] before:absolute 
                                    before:top-[-25px]
                                    before:left-[-30px]
                                    before:w-px
                                    before:h-[calc(100%+50px)]
                                    before:bg-[#484848]
                                    ` : ""}
                                
                                    after:content-['']
                                    after:absolute
                                    after:top-[8px]
                                    after:left-[-33px]
                                    after:w-[7]
                                    after:h-[7]
                                    after:bg-[#6699ff]
                                    after:rounded
                                    after:shadow-[0_0_0_4px_#484848]
                                `}
                            >
                                <h4 className="mb-[7px] font-bold leading-[1.3] text-sm">
                                    {curso.title}
                                </h4>
                        
                                <span className="font-normal text-[#7297E9] leading-[1.6]">
                                    {`${curso.start} - ${curso.end}`}
                                </span>
                        
                                <p className="leading-[1.6] font-light">
                                    {curso.description}
                                </p>
                            </li>
                        )
                    })}
                </ol>
            </section>

            <section className="mb-7">
                <div className="flex items-center gap-3.5 mb-6">
                    <div className="relative w-[31px] h-[31px] rounded-[10px] bg-[linear-gradient(135deg,#7297E9,#22222200)]
                        before:content-[''] before:absolute before:inset-px before:bg-[#222] before:rounded-[inherit]">
                        {/* <ion-icon className="text-blue-900" name="book-outline"></ion-icon> */}
                    </div>
                    <h3 className="font-semibold text-xl">Experience</h3>
                </div>

                <ol className="ml-11">
                    {cursos.map((curso, i) => {
                        const isLast = i === cursos.length - 1

                        return (
                            <li 
                                key={curso.id}
                                className={`timeline-item
                                relative 
                                mb-5
                                
                                ${!isLast ? `
                                    before:content-[''] before:absolute 
                                    before:top-[-25px]
                                    before:left-[-30px]
                                    before:w-px
                                    before:h-[calc(100%+50px)]
                                    before:bg-[#484848]
                                    ` : ""}
                                
                                    after:content-['']
                                    after:absolute
                                    after:top-[8px]
                                    after:left-[-33px]
                                    after:w-[7]
                                    after:h-[7]
                                    after:bg-[#6699ff]
                                    after:rounded
                                    after:shadow-[0_0_0_4px_#484848]
                                `}
                            >
                                <h4 className="mb-[7px] font-bold leading-[1.3] text-sm">
                                    {curso.title}
                                </h4>
                        
                                <span className="font-normal text-[#7297E9] leading-[1.6]">
                                    {`${curso.start} - ${curso.end}`}
                                </span>
                        
                                <p className="leading-[1.6] font-light">
                                    {curso.description}
                                </p>
                            </li>
                        )
                    })}
                </ol>
            </section>
        </>
    )
}