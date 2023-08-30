import NameUser from "./nameUser";
import ProfilePicture from "./editProfilePicture"
import Status from "./editStatus"; 
import Address from "./editAdress";

export default function EditProfile(){
    return (
        <div>
            <ProfilePicture/>
            <NameUser/> 
            <Status/>
            <Address/>            
        </div>
    )
}