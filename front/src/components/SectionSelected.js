import { Button } from "./Button";
import { InputAutoComplet } from "./InputAutoComplet";
import { InputSelectContainer } from "./InputSelectContainer";
import { IntroForm } from "./IntroForm";
import { SectionSelectedContainer } from "./SectionSelectedContainer";
import { TitleForm } from "./TitleForm";

export function SectionSelected() {
  return (
    <SectionSelectedContainer>
      <TitleForm>Selecione um capitulo ou versiculo</TitleForm>
      <IntroForm>
        selecione o capitulo ou versiculo que vai se pergado e adicione a lista
        de pejeções
      </IntroForm>
      <InputSelectContainer>
        <InputAutoComplet type="text" />
        <Button>Adicionar</Button>
      </InputSelectContainer>
    </SectionSelectedContainer>
  );
}
