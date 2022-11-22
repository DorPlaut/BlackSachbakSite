import React, { useState, useEffect } from 'react';
import TagBtn from './TagBtn';

function TagsFilter({ fullProductsList, setProducts }) {
  const [isAll, setIsAll] = useState(true);
  const [tagsArr, setTagsArr] = useState([]);
  const [isTshirts, setIsTshirts] = useState(false);
  const [isHoodies, setIsHoodies] = useState(false);
  const [isHats, setIsHats] = useState(false);
  const [isAccessories, setIsAccessories] = useState(false);
  const [isHomeNLiving, setIsHomeNLiving] = useState(false);
  const [isSportswear, setIsSportswear] = useState(false);

  //   FILTER PRODUCTS
  const handleTagsArr = (tag) => {
    if (!tagsArr.includes(tag)) {
      setTagsArr([...tagsArr, tag]);
    }
    if (tagsArr.includes(tag)) {
      setTagsArr(tagsArr.filter((i) => i != tag));
    }
  };
  // filter the list
  const filterProducts = () => {
    let newArr = [];
    if (tagsArr.length < 1) {
      setIsAll(true);
    }
    if (tagsArr.length > 0) {
      setIsAll(false);
    }
    if (isAll) {
      setProducts(fullProductsList);
    }
    if (!isAll) {
      fullProductsList.map((product) => {
        tagsArr.map((tag) => {
          if (product.categories.includes(tag)) {
            newArr.push(product);
          }
        });
      });
      setProducts(
        newArr.filter((value, index, self) => {
          return self.indexOf(value) === index;
        })
      );
    }
  };
  useEffect(() => {
    filterProducts();
  }, [isAll, tagsArr]);

  return (
    <>
      <div className="tags-contaienr">
        <p>categories:</p>
        <TagBtn
          handleTagsArr={handleTagsArr}
          setIsTag={setIsTshirts}
          isTag={isTshirts}
          tag={'T-shirts'}
        />
        <TagBtn
          handleTagsArr={handleTagsArr}
          setIsTag={setIsHoodies}
          isTag={isHoodies}
          tag={'Hoodies'}
        />
        <TagBtn
          handleTagsArr={handleTagsArr}
          setIsTag={setIsSportswear}
          isTag={isSportswear}
          tag={'Sportswear'}
        />
        <TagBtn
          handleTagsArr={handleTagsArr}
          setIsTag={setIsHats}
          isTag={isHats}
          tag={'Hats'}
        />
        <TagBtn
          handleTagsArr={handleTagsArr}
          setIsTag={setIsAccessories}
          isTag={isAccessories}
          tag={'Accessories'}
        />
        <TagBtn
          handleTagsArr={handleTagsArr}
          setIsTag={setIsHomeNLiving}
          isTag={isHomeNLiving}
          tag={'Home & Living'}
        />
      </div>
    </>
  );
}

export default TagsFilter;
