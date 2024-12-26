import { FC } from 'react'
import NavBar from '../../components/nav-bar/NavBar'
import Footer from '../../components/footer/Footer';
import { FaRegUserCircle } from "react-icons/fa";

type User = {
    'username': string,
    'date-joined': string
}

const MyProfile: FC = () => {
    /**
     *  Given it is the profile of the current user, and information for each token is unique,
     * the fetch utilized the token information for the user and retrieves user data.
     * 
     * For different users, it will certainly be similar, only difference is that the user id
     * will act as our key for the data. 
     * 
     */
    const userDetails: string[] = ['username', 'date-joined']
    const userData = {
        "username": "example_user",
        "date-joined": "2024-12-26"
    }


    return (
        <>
            <NavBar />
            <div className="flex flex-col md:flex-row justify-between md:w-2/3 mx-auto items-center h-[calc(100vh-10rem)]">
                <div className="flex flex-col text-center md:w-min items-center space-y-2">
                    <FaRegUserCircle className="size-32 border-2 border-black" />
                    <span className="text-gray-500">{userData.username}</span>
                </div>
                <div className="items-start text-start w-11/12 md:w-2/5 space-y-2">
                    <span className="tracking-wider font-bold">Mis detalles:</span>
                    <div className="flex flex-col items-start">
                        {
                            userDetails.map((detail: string, index: number) => (
                                <div className="flex flex-row space-x-2">
                                    <span key={index} className="font-semibold tracking-wide text-gray-700">{detail+": "}</span>
                                    <span className="text-gray-500">{userData[detail]}</span>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default MyProfile;