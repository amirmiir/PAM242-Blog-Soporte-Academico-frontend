import { FC } from 'react'


const SectionAbout: FC = () => {
    return (
        <div className="w-full md:w-1/2 mx-auto place-content-center text-center space-y-5">
            <h1 className="text-5xl font-semibold">Acerca del proyecto</h1>
            <p className="text-3xl">
            El Blog de Soporte Académico <strong>(BSA)</strong> es un proyecto desarrollado como parte del Proceso de Admisión de Miembros <strong>(PAM)</strong> de Acecom, grupo de estudios de la Facultad de Ciencias, en la Universidad Nacional de Ingeniería, Perú, dedicado a apoyar a nuestra comunidad estudiantil
            </p>
        </div>

    )
}

export default SectionAbout