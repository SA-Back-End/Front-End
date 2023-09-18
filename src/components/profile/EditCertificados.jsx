function EditCertificados() {
    return (
        <div>
            <form action="." /*method="get"*/>
                <label>Instituição:</label>
                <input type="text" name="instituicao" />
                <label>Nome da certificação:</label>
                <input type="text" name="areaEstudo" />
                <label>Data de início:</label>
                <input type="date" name="dataInicio" />
                <label>Data de conclusão:</label>
                <input type="date" name="dataConclusao" />
                <label>URL:</label>
                <textarea name="comment" form="usrform" placeholder="URL do certificado"></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default EditCertificados;