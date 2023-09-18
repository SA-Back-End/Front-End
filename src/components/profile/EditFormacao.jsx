/*import './Formacao.css';*/

function EditFormacao() {
    return (
        <div>
            <form action="." /*method="get"*/>
                <label>Instituição:</label>
                <input type="text" name="instituicao" />
                <label>Nível de formação:</label>
                <input type="text" name="areaEstudo" />
                <label>Área de estudo:</label>
                <input type="text" name="cargo" />
                <label>Data de início:</label>
                <input type="date" name="dataInicio" />
                <label>Data de conclusão:</label>
                <input type="date" name="dataConclusao" />
                <label>Descrição:</label>
                <textarea name="comment" form="usrform" placeholder="Descrição"></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default EditFormacao;