import { FC } from 'react'
import NavBar from '../../../components/nav-bar/NavBar'
import Footer from '../../../components/footer/Footer'
import SubjectIDContent from './SubjectIDContent'

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

type SubjectIDProps = {
    'id': string
}

const SubjectID: FC<SubjectIDProps> = ({ id }) => {
    /**
     * Standard page for every Subject given a certain ID
     * This page is dedicated to holding the information for proper display
     * passing it to SubjectIDContent
     */

    const subject: Subject = { //subject-test
        'id': 'bma-01',
        'level': 'Undergrade',
        'name': 'Differential Calculus',
        sections: [
            {
                'id': 'Introducción',
                'description': 'Esta es una descripción introductoria',
                'subtitle': 'Sílabo',
                'videoID': '',
                'content': ""
            },
            {
                'id': 'Semana 1',
                'description': 'Esta es una descripción introductoria',
                'subtitle': 'Funciones: Generalidades',
                'videoID': '2g811Eo7K8U',
                'content': "\\(\\mathcal{P}^2 \\xleftarrow{} \\emptyset\\)"
            },
            {
                'id': 'Semana 2',
                'description': 'Esta es una descripción introductoria',
                'subtitle': 'Funciones definidas por partes',
                'videoID': '2g811Eo7K8U',
                'content': "\\(\\mathcal{P}^2 \\xleftarrow{} \\emptyset\\)"
            }
        ]
    }

    return (
        <div>
            <NavBar />

            <SubjectIDContent subject={subject} />

            <Footer />
        </div>


    )
}

export default SubjectID