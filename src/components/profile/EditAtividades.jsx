function EditAtividades() {
    return (
        <div>
            <form action="." /*method="get"*/>
                <label>Selecione o projeto:</label>
                <select name="project" id="project">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </form>
        </div>
    );
}

export default EditAtividades;