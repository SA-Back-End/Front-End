import NameUser from "./nameUser"
import ProfilePicture from "./profilePicture"
import Status from "./status"

export default function EditProfile(){
    return (
        <div>
            <ProfilePicture/>
            <NameUser/>
            <Status/>
        </div>
    )
}