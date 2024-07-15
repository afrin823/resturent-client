import { IoLogoGoogleplus } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";


const SocialLogIn = () => {
    const { googleLogIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const form = location?.state || '/';

    const handelSocialLogIn = socialProvider => {
        socialProvider()
        .then(result => {
            if(result.user){
                navigate(form);
            }
        })
    }
    return (
        <div>
            <div className="divider">Continue With</div>
            <div className="flex items-center justify-center gap-2">
            
                <button onClick={() => handelSocialLogIn(googleLogIn)}
                className=""><IoLogoGoogleplus className="text-4xl"/></button>                
            </div>
        </div>
    );
};

export default SocialLogIn;