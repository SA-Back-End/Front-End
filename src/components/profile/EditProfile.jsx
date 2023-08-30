import './EditProfile.css';

function EditProfile() {
    return (
        <div>
            <form action="." /*method="get"*/>
                <label>Instituição:</label>
                <input type="text" name="instituicao" />
                <label>Área de estudo:</label>
                <input type="text" name="areaEstudo" />
                <label>Cargo:</label>
                <input type="text" name="cargo" />
                <label>Data de início:</label>
                <input type="date" name="dataInicio" />
                <label>Data de conclusão:</label>
                <input type="date" name="dataConclusao" />
                <label>Funções:</label>
                <textarea name="comment" form="usrform">Descrição</textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default EditProfile;