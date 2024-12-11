import { FC } from 'react'
import SectionContact from './SectionContact'
import SectionAbout from './SectionAbout'
import SectionHome from './SectionHome'
import SectionUs from './SectionUs'
import Separator from '../../../components/separator/Separator'


const LandingSections: FC = () => {
    return (
        <div className="space-y-32">
            <section id="home">
                <SectionHome />
            </section>
            <section id="about">
                <SectionAbout />
            </section>
            <Separator/>
            <section id="us">
                <SectionUs />
            </section>
            <Separator/>
            <section id="contact">
                <SectionContact />
            </section>
        </div>
    )
}

export default LandingSections