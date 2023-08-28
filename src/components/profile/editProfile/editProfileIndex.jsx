import NameUser from "./nameUser";
import ProfilePicture from "./editProfilePicture"
import Status from "./editStatus"; 

export default function EditProfile(){
    return (
        <div>
            <ProfilePicture/>
            <NameUser/> 
            <Status/>            
        </div>
    )
}