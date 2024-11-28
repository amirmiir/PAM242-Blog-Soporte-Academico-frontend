import { FC } from 'react'
import HomeBanner from './HomeBanner'


const SectionHome: FC = () => {
    return (
        <div className="space-y-3 h-screen w-full">
            
            {/* Banner */}
            <HomeBanner/>
        </div>
    )
}

export default SectionHome