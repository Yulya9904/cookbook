import React from 'react';
import RLcss from './ResipeList/RecipeList.module.css';


const HomePage = () => {
  return (
    <div className={RLcss.content}>
      <div className={RLcss.form}>
        <h2>Кулинарная книга</h2>
        <div className={RLcss.content}>
          <div className={RLcss.formcontent}>
            <img className={RLcss.imgRecipe} src="https://ichef.bbci.co.uk/news/624/cpsprodpb/15FC/production/_105282650_gettyimages-968422832.jpg" />
            <img className={RLcss.imgRecipe}   src="https://ichef.bbci.co.uk/news/624/cpsprodpb/1500C/production/_105282068_gettyimages-159009806.jpg" />
            <img className={RLcss.imgRecipe}   src="https://ichef.bbci.co.uk/news/624/cpsprodpb/178C/production/_105282060_gettyimages-951500050.jpg" />
            <img className={RLcss.imgRecipe}   src="https://vokrugsveta.ua/wp-content/uploads/2017/06/shutterstock_666592684.jpg" />
            <h3>Описание</h3>
            <p>Кулинарная книга сайта "Рецепты с фото" представляет собой 
                сборник рецептов с пошаговыми фотографиями и описанием приготовления 
                различных блюд, которые условно делятся на салаты, закуски, супы, блюда из мяса, 
                блюда из птицы, а также, блюда из рыбы и морепродуктов. В процессе развития нашего
                 проекта, разделы в кулинарной книге будут добавляться. Все рецепты с фото, размещенные 
                 на нашем сайте, приготовлены нашими авторами, которые любят и ценят свое увлечение 
                 кулинарией. В кулинарной книге публикуются только проверенные рецепты, которые 
                 возможно повторить. Именно поэтому, любое блюдо, которое Вы решите приготовить по 
                 нашим рецептам, во-первых, 
                должно у Вас получиться, а во-вторых, оно должно получиться у Вас хорошо.</p>
           <br/>
          </div>
        </div>
      </div>
    </div>

  );
};

export default HomePage;