import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import ToogleBtn from "./component/filter/Toogle.btn";
import TitleCardMatch from "./component/title/titleCardMatch";
import BtnDrop from "./component/buttonDropdown/btn-drop";
import ProjectCardMatch from "./component/cardMatch/projectCardMatch";

const TelaMatch = () => {
  const logState = (state) => {
    // Usar o state para fazer o bgl de trocar tela
    console.log("Toggled:", state);
  };

  const [disableItens, setDisableItens] = useState(false);

  const handleDisableOutputProp = (flag) => {
    setDisableItens(flag);
  }

  useEffect(() => {
    setDisableItens(false)
  }, [])

  const actingAreaList = [
    "Ciências Exatas",
    "Ciências Biológicas",
    "Engenharia",
    "Tecnologia",
    "Ciências da Saúde",
    "Ciências Agrárias",
    "Ciências Sociais",
    "Ciências Humanas",
    "Linguística",
    "Letras e Artes",
  ];

  const workTypeList = ["Híbrido", "Remoto", "Presencial"];

  /**
   *
   * @param {string} item
   */
  function addItemFilter(item) {
    console.log(item);
  }

  return (
    <Main>
      <div>
        { !disableItens && (          
          <>
            <Filter>
              <ToogleBtn toFilter={logState} />
              <BtnDrop
                onItemSelect={addItemFilter}
                btnText={"Área de atuação"}
                itensList={actingAreaList}
              />
              <BtnDrop
                onItemSelect={addItemFilter}
                btnText={"Modalidade"}
                itensList={workTypeList}
              />
              <Button type="button" className="btn-filter">
                {" "}
                Filtrar{" "}
              </Button>
            </Filter>
            <TitleCardMatch
              title="Buscando novos projetos"
              subTitle="Para o seu"
              subTitleEnphasisWord="portfólio"
            />
          </>
        )}
        <ProjectCardMatch disableItensParent={handleDisableOutputProp}/>
      </div>
    </Main>
  );
};

const Main = styled.main`
  padding: 50px;
    
  .card-applications { 
		display: flex;
		justify-content: center;
		margin-top: 20px;
    }
	}
`;

const Filter = styled.div`
  display: flex;
  justify-content: flex-start;

  .btn-filter {
    background-color: blue;
    color: white;
  }
`;

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
`;

export default TelaMatch;
