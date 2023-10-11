import { useState, useEffect } from "react";
import TitleCardMatch from "../component/title/titleCardMatch";

export default function ComponentPerson() {

    const [disableItens, setDisableItens] = useState(false);

    const handleDisableOutputProp = (flag) => {
        setDisableItens(flag);
    }

    useEffect(() => {
        setDisableItens(false)
    }, [])

    return (
        <div>
            {!disableItens && (
                <>
                    <TitleCardMatch
                        title="Buscando novos participantes"
                        subTitle="Para os seus"
                        subTitleEnphasisWord="projetos!"
                    />
                </>
            )}
        </div>
    )
}
