import { useState, useEffect } from "react";
import TitleCardMatch from "./title/titleCardMatch";
import ProjectCardMatch from "./cardMatch/projectCardMatch";

export default function ComponentProject() {

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
                        title="Buscando novos projetos"
                        subTitle="Para o seu"
                        subTitleEnphasisWord="portfólio"
                    />
                </>
            )}
            <ProjectCardMatch disableItensParent={handleDisableOutputProp} />
        </div>
    )
}
