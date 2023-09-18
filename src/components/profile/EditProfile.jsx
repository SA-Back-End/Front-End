import './EditProfile.css';

function EditProfile() {
    return (
        <div>
            <form action="." /*method="get"*/>
                <label>Instituição:</label>
                <input type="text" name="instituition_name" />
                <label>Área de estudo:</label>
                <input type="text" name="areaEstudo" />
                <label>Cargo:</label>
                <input type="text" name="cargo" />
                <label>Data de início:</label>
                <input type="date" name="dataInicio" />
                <label>Data de conclusão:</label>
                <input type="date" name="dataConclusao" />
                <label>Funções:</label>
                <textarea name="comment" form="usrform" placeholder="Descrição das funções"></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

/*function Formacao() {
    return (
        <>
            <input type="text" class="forma"></input>
            <button onClick={add}>Confirmar</button>
            <div id="forma-lista">
                {/Olhar tabela no banco sobre Formação!/}
            </div>
        </>
    )
}*/

/*function add() {
    alert('funciona sim, sua trouxa!')
    let inputText = document.querySelector(".forma").value;
    let lista = document.querySelector("#forma-lista").value;
    lista += `<p type='text'> ${inputText} </p> <button onclick="Excluir(${inputText})">Excluir</button>`
    document.getElementById("forma-lista").innerHTML += lista;

}*/

export default EditProfile;