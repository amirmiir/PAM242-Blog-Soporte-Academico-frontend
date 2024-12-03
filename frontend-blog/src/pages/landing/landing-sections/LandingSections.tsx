import { FC } from 'react'
import SectionContact from './SectionContact'
import SectionAbout from './SectionAbout'
import SectionHome from './SectionHome'
import SectionUs from './SectionUs'


const LandingSections: FC = () => {
    return (
        <div className="">
            <section id="home">
                <SectionHome />
            </section>
            <section id="about">
                <SectionAbout />
            </section>
            <section id="us">
                <SectionUs />
            </section>
            <section id="contact">
                <SectionContact />
            </section>
        </div>
    )
}

export default LandingSections