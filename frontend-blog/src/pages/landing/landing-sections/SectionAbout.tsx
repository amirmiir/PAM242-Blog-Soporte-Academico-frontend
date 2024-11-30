import { FC } from 'react'

const about: string = "El Blog de Soporte Académico (BSA) es un proyecto desarrollado como parte del Proceso de Admisión de Miembros (PAM) de Acecom, grupo de estudios de la Facultad de Ciencias, en la Universidad Nacional de Ingeniería. Nuestro propósito es brindar una plataforma en la cual se complemente las sesiones de clases, a través de materiales recolectados a lo largo de los años, y con la disponibilidad para que los alumnos realicen consultas sobre sus materias, y obtengan respuestas por parte de otros miembros de la comunidad."

const SectionAbout: FC = () => {
    return (
        <div className="pl-16">
            <h1 className="text-2xl font-semibold">Acerca del proyecto</h1>
            <p>
                {about}
            </p>

        </div>

    )
}

export default SectionAbout