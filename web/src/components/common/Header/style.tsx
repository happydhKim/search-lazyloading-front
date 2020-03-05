import styled from 'styled-components';
import { DEVICE } from '@/constants';

const S = {
  HeaderWrapper: styled.div`
    position: fixed;
    line-height: 1.5;
    letter-spacing: -0.2px;
    z-index: 100;
    top: 0;
    height: 66px;
    width: 100%;
    button {
      border: 0 none;
      background-color: transparent;
      cursor: pointer;
    }
  `,
  HeaderContents: styled.div`
    position: relative;
    height: 100%;
    @media ${DEVICE.DESKTOP} {
      margin: 0px auto;
      width: 1080px;
    }
    @media ${DEVICE.MOBILE} {
      /* background-color: blue; */
    }
  `,
  HeaderTitle: styled.h1`
    position: relative;
    width: 139px;
    padding-top: 23px;
    padding-left: 1px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px auto;
    @media ${DEVICE.DESKTOP} {
      width: 168px;
      padding-top: 24px;
    }
  `,
  HeaderTitleImage: styled.a`
    background-image: url(https://t1.kakaocdn.net/friends/kfo-common/mo/m640/img_gnb_181002.png);
    background-size: 200px 95px;
    display: block;
    width: 140px;
    height: 14px;
    font-size: 1px;
    line-height: 0;
    color: transparent;
    text-indent: 0px;
    background-repeat: no-repeat;
    @media ${DEVICE.DESKTOP} {
      background-image: url(https://t1.kakaocdn.net/friends/new_store/2.0/pc/friends-logo.png);
      background-size: 168px;
      width: 168px;
      height: 18px;
    }
  `,
  SearchBar: styled.div`
    @media ${DEVICE.MOBILE} {
      display: none;
    }
    position: absolute;
    right: 135px;
    top: 13px;
    width: 216px;
    height: 40px;
    box-sizing: border-box;
    border-radius: 3.2px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(227, 229, 232);
    border-image: initial;
  `,
  SearchInput: styled.input`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 150px;
    margin-left: 32px;
    height: 18px;
    font-size: 15px;
    line-height: 1.17;
    color: rgb(137, 137, 141);
    padding: 10px 0px;
    border-width: 0px;
    border-style: none;
    border-color: initial;
    border-image: initial;
    outline: none;
  `,
  SearchButton: styled.button`
    position: absolute;
    left: 0px;
    width: 24.4px;
    height: 38px;
    padding-left: 9px;
    outline: none;
  `,
  SearchButtonImage: styled.span`
    display: block;
    width: 14.4px;
    height: 14.4px;
    background-image: url(https://t1.kakaocdn.net/friends/new_store/2.0/pc/ico-header-search.png);
    background-size: 14.4px 14.4px;
  `,
  HeaderBasket: styled.a`
    position: absolute;
    right: 40px;
    top: 0px;
    margin-right: -3px;
    background-color: rgb(255, 255, 255);
    padding: 21px 8px 21px 10px;
    @media ${DEVICE.DESKTOP} {
      right: 50px;
      padding: 0px;
      margin: 22.5px 0px;
    }
  `,
  HeaderBasketImage: styled.span`
    background-image: url(https://t1.kakaocdn.net/friends/kfo-common/mo/m640/img_gnb_181002.png);
    background-size: 200px 95px;
    width: 19px;
    height: 18px;
    display: block;
    background-position: -144px -40px;
    @media ${DEVICE.DESKTOP} {
      background-image: url(https://t1.kakaocdn.net/friends/new_store/2.0/pc/ico-header-basket.png);
      background-size: 17px 21px;
      width: 17px;
      height: 21px;
      background-repeat: no-repeat;
      background-position: center center;
    }
  `,
  LanguageButton: styled.button`
    position: absolute;
    right: 0px;
    top: 0px;
    display: inline-block;
    vertical-align: top;
    background-color: white;
    padding: 21px 10px 20px 8px;
    outline: none;
    @media ${DEVICE.DESKTOP} {
      padding: 0px;
      margin: 21.5px 0px;
    }
  `,
  LanguageButtonImage: styled.span`
    background-size: 200px 95px;
    width: 19px;
    height: 19px;
    display: block;
    background-image: url(https://t1.kakaocdn.net/friends/kfo-common/mo/m640/img_gnb_181002.png);
    background-position: -82px -40px;
    @media ${DEVICE.DESKTOP} {
      width: 23px;
      height: 23px;
      background-image: url(https://t1.kakaocdn.net/friends/new_store/2.0/pc/ico-header-lang-en.png);
      background-size: 23px;
      background-repeat: no-repeat;
      background-position: center center;
    }
  `,
  HeaderMyPage: styled.a`
    @media ${DEVICE.MOBILE} {
      display: none;
    }
    position: absolute;
    right: 94px;
    top: 0px;
    display: inline-block;
    vertical-align: top;
    background-color: white;
    padding: 0px;
    margin: 23.5px 0px;
    @media ${DEVICE.DESKTOP} {
    }
  `,
  HeaderMyPageImage: styled.span`
    display: block;
    width: 18px;
    height: 19px;
    background-image: url(https://t1.kakaocdn.net/friends/new_store/2.0/pc/ico-header-mypage.png);
    background-size: 18px 19px;
    background-repeat: no-repeat;
    background-position: center center;
    @media ${DEVICE.DESKTOP} {
    }
  `,
  HeaderMobileCategory: styled.button`
    @media ${DEVICE.DESKTOP} {
      display: none;
    }
    @media ${DEVICE.MOBILE} {
      display: block;
      position: absolute;
      top: 0px;
      left: 0px;
      height: 60px;
      padding: 0px 10px;
      outline: none;
    }
  `,
  HeaderMobileCategoryImage: styled.span`
    background-image: url(https://t1.kakaocdn.net/friends/kfo-common/mo/m640/img_gnb_181002.png);
    background-size: 200px 95px;
    display: block;
    width: 19px;
    height: 14px;
    background-position: -180px 0px;
  `,
  HeaderMobileSearch: styled.button`
    @media ${DEVICE.DESKTOP} {
      display: none;
    }
    @media ${DEVICE.MOBILE} {
      display: block;
      position: absolute;
      left: 39px;
      right: auto;
      top: 0px;
      width: 32px;
      overflow: hidden;
      padding: 22px 8px;
    }
  `,
  HeaderMobileSearchImage: styled.span`
    display: block;
    width: 16px;
    height: 16px;
    background-image: url(https://t1.kakaocdn.net/friends/kfo-common/mo/m640/img_gnb_181002.png);
    background-size: 200px 95px;
    background-position: -126px -42px;
  `,
  HeaderLeftMenuList: styled.ul`
    @media ${DEVICE.MOBILE} {
      display: none;
    }
    @media ${DEVICE.DESKTOP} {
      display: flex;
      position: absolute;
      top: 0px;
      left: 0px;
      height: 66px;
      -webkit-box-align: center;
      align-items: center;
      li {
        position: relative;
        height: 66px;
        font-size: 15px;
        color: rgb(30,30,30);
        margin-right: 24px;
      }
      li > a {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 66px;
      }
    }
  `,
  CategoryList: styled.li`
    li > a {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      height: 66px;
    }
    a::after {
    content: "";
    display: inline-block;
    width: 7px;
    height: 4px;
    margin-left: 6px;
    background: url(https://t1.kakaocdn.net/friends/new_store/2.0/pc/ico-header-triangle.png) center center / 7px no-repeat;
    background-position: center center;
    }
  `,
};

export default S;
