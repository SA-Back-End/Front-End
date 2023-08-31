const Filtro = () => {
    return (
        <div className="filtro">
            <label>
                <input type="checkbox" id="area_de_atuacao" name="opciones" value="opcion1" />
                Área de atuação
            </label>
            <label>
                <input type="checkbox" id="status" name="opciones" value="opcion1" />
                Status
            </label>
            <label>
                <input type="checkbox" id="nivel_de_formacao" name="opciones" value="opcion1" />
                Nível de formação
            </label>
        </div>
    )
}
export default Filtro