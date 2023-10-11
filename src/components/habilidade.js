import Skill from "./skill"
import Botao from "./botao"
import Formacao from "./formacaoEdit"

function Habilidade() {
    let habil = [{ id: 1, name: "habilidade1" }, { id: 2, name: "habilidade2" }, { id: 3, name: "habilidade3" }]

    return (
        <div>
            <h1>ADICIONAR FORMAÇÃO</h1>
            <Formacao />
        </div>
    )
}
export default Habilidade
