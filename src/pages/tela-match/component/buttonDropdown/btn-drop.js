import { styled } from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function BtnDrop( { btnText, itensList, onItemSelect } ) {

    const [isOpen, setIsOpen] = useState(false);

    const handleDropdown = () => {
        setIsOpen(!isOpen);
    }


    return (

        <DropContainer>
             <Button type='button' onClick={handleDropdown} > { btnText } <span> <IoIosArrowDown /> </span> </Button>
             <div className={`dropdown dropdown-open-${isOpen}`}>
                <ul>

                    { itensList.map( element => (
                        <li onClick={action => {onItemSelect(element)}}> {element} </li>
                    ) ) }
                    
                </ul>
             </div>
        </DropContainer>

    )

}

const DropContainer = styled.div`

    .dropdown {
        transition: .4s ease;
        position: relative;
        width: 0px;
    }

    .dropdown-open-true {
        top:20px;
        opacity: 1;
    }

    .dropdown-open-false {
        opacity: 0;
        top:-500px;
    }

    li {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
`


const Button = styled.button`
    background-color: white;
    border: 1px solid gray;
    border-radius: 10px;
    box-shadow: 0 5px 9px -5px black;
    cursor: pointer;
    height: 30px;
    margin: 0 10px;
    min-width: 100px;
    padding: 0 5px;
`