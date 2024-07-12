import ButtonComponent from "./components/button/button";
import { Heading1, Heading3 } from "./components/Headings/Heading";
import { ImageComponent } from "./components/image/image";
import { receipeData } from "./components/javascript/receipeData";

function App() {
  return (
    <>
      {receipeData.map((eachReceipe, index) => {
        const { name: amruth, ingredients, instructions, image } = eachReceipe;

        return (
          <>
            <Heading1 title={amruth} />
            <ImageComponent src={image} height={200} width={200} />
            <Heading3 title={`Ingredients for making ${amruth}`} Color="blue" />
            <ol>
              {ingredients.map((eachIngredient, index) => {
                return (
                  <>
                    <li key={index}>{eachIngredient}</li>
                  </>
                );
              })}
            </ol>
            <Heading3 title={`Instuctions to make ${amruth} `} Color="red" />
            <ol>
              {instructions.map((eachInstruction, index) => {
                return (
                  <>
                    <li key={index}>{eachInstruction}</li>
                  </>
                );
              })}
            </ol>
            <hr></hr>
          </>
        );
      })}
    </>
  );
}

export default App;
