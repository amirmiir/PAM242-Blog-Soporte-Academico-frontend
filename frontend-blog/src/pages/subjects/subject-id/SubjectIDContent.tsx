import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { FC, useEffect, useState } from 'react'
import YouTube from 'react-youtube';

type Section = {
    'id': string,
    'description': string,
    'subtitle': string,
    'videoID': string,
    'content': string
}

type Subject = {
    'id': string,
    'level': string,
    'name': string,
    sections: Section[]
}

type SubjectIDContentProps = {
    subject: Subject
}

const SubjectIDContent: FC<SubjectIDContentProps> = ({ subject }) => {

    const [selectedSection, setSelectedSection] = useState<string>('Presentation');
    const [displayedSection, setDisplayedSelection] = useState<Section | null>(null)

    useEffect(() => {
        const sectionToDisplay = subject.sections.find((section) => section.id === selectedSection);
        setDisplayedSelection(sectionToDisplay || null);

    }, [selectedSection, subject.sections])

    const handleSectionClick = (id: string) => setSelectedSection(id);

    return (
        <div className="flex flex-col md:w-5/6 mx-auto">
            <div className="flex flex-col font-thin tracking-wider text-2xl bg-gray-300 my-6 p-4">
                <h2>{subject.level}</h2>
                <h1 className="font-semibold tracking-wide text-4xl">{subject.name}</h1>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8">
                <div className="flex flex-col items-start md:w-1/5 bg-gray-200 p-4 space-y-2">
                    {/* Similar to a filter section */}
                    <span className="text-xl font-bold tracking-wider">Secciones</span>
                    <div className="flex flex-col items-start w-full -space-y-1">
                        {
                            subject.sections.map((item: Section, index: number) => (
                                <button key={index} onClick={() => handleSectionClick(item.id)} className={`${item.id === selectedSection ? "font-semibold text-red-500" : ""} tracking-wide`}>
                                    {item.id}
                                </button>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col md:w-4/5 bg-gray-200 p-4">
                    {/* Heading for a filter */}
                    <h2 className="text-2xl">{displayedSection?.subtitle}</h2>
                    <p>{displayedSection?.description}</p>
                    {
                        displayedSection?.videoID && (
                            <YouTube videoId={displayedSection?.videoID} />
                        )
                    }
                    {
                        displayedSection?.content && (
                            <MathJaxContext>
                                <MathJax>{displayedSection?.content}</MathJax>
                            </MathJaxContext>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default SubjectIDContent