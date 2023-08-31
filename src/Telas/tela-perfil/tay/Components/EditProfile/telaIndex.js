import NameUser from "./userName";
import ProfilePicture from "./userPicture"
import Status from "./userStatus";
import Address from "./address";

export default function EditProfile() {
    return (
        <div>
            <ProfilePicture />
            <NameUser />
            <Status />
            <Address />
        </div>
    )
}