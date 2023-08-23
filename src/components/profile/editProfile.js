import NameUser from "./nameUser";
import ProfilePicture from "./profilePicture";
import "./Profile.css"

export default function EditProfile(){
    return (
        <div>
            <ProfilePicture/>
            <NameUser/>             
        </div>
    )
}