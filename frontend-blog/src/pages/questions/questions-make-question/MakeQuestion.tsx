import { FC } from 'react'
import NavBar from '../../../components/nav-bar/NavBar'
import Footer from '../../../components/footer/Footer'

/**
 * Given that we chose a similar platform to stackExchange, we will be using
 * MathJax for rendering our LaTex documentation.
 */
const MakeQuestion: FC = () => {
    return (
        <div>
            <NavBar />
            MakeQuestion
            <Footer />
        </div>
    )
}

export default MakeQuestion