import { FC } from 'react'
import HomeBanner from './HomeBanner'


const SectionHome: FC = () => {
    return (
        <div className="space-y-3 pt-3 text-center">
            {/* Texto superior */}
            <h1 className="text-4xl font-semibold">Blog Académico</h1>
            {/* Banner */}
            <HomeBanner/>
        </div>
    )
}

export default SectionHome