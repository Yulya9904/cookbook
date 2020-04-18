import React from 'react';
import RLcss from './RecipeList.module.css';
import Change from '../image/9314.png';

const DataRecipe = (props) => {
  const onGetDataChangeRecipe = () => {
    props.GetDataRecipe();
    return{
      
    }
  }; // , this.props.url
  const onChangeRecipe = () => {
    props.ChangeRecipe(props.url);
  };
  const onChangeCategory = (event) => {
    const SelectCat = event.target.value;
    props.ChangeCategory(SelectCat);
  };
  const onChangeNameRecipe = (event) => {
    const name = event.target.value;
    props.ChangeNameRecipe(name);
  };
  const onChangeIngridients = (event) => {
    const Ingridients = event.target.value;
    props.ChangeIngridients(Ingridients);
  };
  const onChangeUrlImage = (event) => {
    const UrlImage = event.target.value;
    props.ChangeUrlImage(UrlImage);
  };
  const onChangeNameEctionList = (event) => {
    const EctionList = event.target.value;
    props.ChangeNameEctionList(EctionList);
  };
  return (
    <div className={RLcss.content}>
      <div className={RLcss.form}>
        <h2>{props.ActiveRecipe.name}</h2>
        <div className={RLcss.content}>
          <div className={RLcss.formcontent}>
            <img className={RLcss.imgRecipe} src={props.ActiveRecipe.urlImage} />
            <img className={RLcss.change} value={props.ActiveRecipe} onClick={onGetDataChangeRecipe} src={Change} />
            <h3>Ингридиенты</h3>
            <p>{props.ActiveRecipe.ingridients}</p>
            <h3>Способ приготовления</h3>
            <p>{props.ActiveRecipe.actionList}</p>
            <h3><b>Заполните поля для изменения</b></h3>
            <h3>Название блюда</h3>
            <p><input type="text" onChange={onChangeNameRecipe} value={props.TextNameRecipe} /></p>
            <h3>Ссылка на картинку:</h3>
            <p><input type="text" onChange={onChangeUrlImage} value={props.TextUrlImage} /></p>
            <h3>Ингредиенты:</h3>
            <p><textarea onChange={onChangeIngridients} value={props.TextNameIngridients} /></p>
            <h3>Способ приготовление:</h3>
            <p><textarea onChange={onChangeNameEctionList} value={props.TextActionList} /></p>
            <p><input type="submit" onClick={onChangeRecipe} value="Изменить" /></p>
            <br />
          </div>
        </div>
      </div>
    </div>

  );
};

export default DataRecipe;
