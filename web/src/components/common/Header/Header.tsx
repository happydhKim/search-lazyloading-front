import * as React from 'react';
import S from './style';

const Header: React.FC = () => {
  const a = 3;

  return (
    <S.HeaderWrapper>
      <S.HeaderContents>
        <S.HeaderTitle>
          <S.HeaderTitleImage />
        </S.HeaderTitle>
        <S.HeaderMobileCategory>
          <S.HeaderMobileCategoryImage />
        </S.HeaderMobileCategory>
        <S.HeaderMobileSearch>
          <S.HeaderMobileSearchImage />
        </S.HeaderMobileSearch>
        <S.HeaderLeftMenuList>
          <S.CategoryList>
            <a href="/">카테고리</a>
          </S.CategoryList>
          <li>
            <a href="/">매장안내</a>
          </li>
          <li>
            <a href="/">고객센터</a>
          </li>
        </S.HeaderLeftMenuList>
        <S.SearchBar>
          <S.SearchInput placeholder="무엇을 찾으세요?" />
          <S.SearchButton>
            <S.SearchButtonImage />
          </S.SearchButton>
        </S.SearchBar>
        <S.HeaderBasket>
          <S.HeaderBasketImage />
        </S.HeaderBasket>
        <S.LanguageButton>
          <S.LanguageButtonImage />
        </S.LanguageButton>
        <S.HeaderMyPage>
          <S.HeaderMyPageImage />
        </S.HeaderMyPage>
      </S.HeaderContents>
    </S.HeaderWrapper>
  );
};

export default Header;
