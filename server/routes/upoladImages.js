'use strict';

const pathToImage = require( '../request/_imageBuilder' );
const getSettingSocials = require( '../request/getSettingSocials' );
const getArticles = require( '../request/getArticles' );
const getSettingBlog = require( '../request/getSettingBlog' );
const getServiceBasedData = require( '../request/getServiceBasedData' );
const getBlogArticles = require( '../request/getBlogArticles' );
const getServices = require( '../request/getServices' );
const getSettingMainBanner = require( '../request/getSettingMainBanner' );
const getServiceCategory = require( '../request/getServiceCategory' );
const getServiceCollection = require( '../request/getServiceCollection' );
const getSettingTopFeatures = require( '../request/getSettingTopFeatures' );
const getSettingBottomFeatures = require( '../request/getSettingBottomFeatures' );


const action = async ( context, params ) => {
  const {
    lang,
    project
  } = params;

  const allImagesArray = [];

  const [
    settingSocials,
    articles,
    settingBlog,
    serviceBasedData,
    blogArticles,
    services,
    serviceCategory,
    serviceCollection,
    settingTopFeatures,
    settingBottomFeatures,
  ] = await Promise.all(
    [
      getSettingSocials( project, lang ),
      getArticles( project, lang ),
      getSettingBlog( project, lang ),
      getServiceBasedData( project, lang ),
      getBlogArticles( project, lang ),
      getServices( project, lang ),
      getServiceCategory( project, lang ),
      getServiceCollection( project, lang ),
      getSettingTopFeatures( project, lang ),
      getSettingBottomFeatures( project, lang ),
    ]
  )

  const bannerFull = await getSettingMainBanner( project, lang );

  //соц сети
  settingSocials && settingSocials.forEach( item => {
    allImagesArray.push( pathToImage( item.imgSrc ).url() );
  } );

  //превью статей
  articles && articles.forEach( item => {
    allImagesArray.push( pathToImage( item.titleImage ).url() );
  } );

  //настойки блога
  ( settingBlog || {} ).image && allImagesArray.push( pathToImage( settingBlog.image ).url() );
  ( settingBlog || {} ).logo && allImagesArray.push( pathToImage( settingBlog.logo ).url() );

  //logo
  ( serviceBasedData || {} ).logo && allImagesArray.push( pathToImage( serviceBasedData.logo ).url() );
  ( ( serviceBasedData || {} ).logoSm || {} )[lang] && allImagesArray.push( pathToImage( serviceBasedData.logoSm[lang] ).url() );
  ( serviceBasedData || {} ).articleImage && allImagesArray.push( pathToImage( serviceBasedData.articleImage ).url() );

  //превью блогов
  blogArticles && blogArticles.forEach( item => {
    allImagesArray.push( pathToImage( item.img ).url() );
  } );

  //превью туров
  services && services.forEach( item => {
    allImagesArray.push( pathToImage( item.titleImage ).url() );
    if( item.titleImage.hotspot ) {
      allImagesArray.push( pathToImage( item.titleImage )
        .focalPoint( item.titleImage.hotspot.x.toFixed( 2 ), item.titleImage.hotspot.y.toFixed( 2 ) )
        .fit( 'crop' )
        .width( 404 )
        .height( 277 )
        .url() )
    } else if( item.titleImage ) {
      allImagesArray.push( pathToImage( item.titleImage )
        .fit( 'crop' )
        .width( 404 )
        .height( 277 )
        .url() )
    }
  } );

  //banner
  allImagesArray.push( pathToImage( bannerFull.image ).url() );
  allImagesArray.push( pathToImage( bannerFull.imageSm ).url() );

  //превью категорий
  serviceCategory && serviceCategory.forEach( item => {
    allImagesArray.push( pathToImage( item.titleImage ).url() );
  } );

  //превью подборок
  serviceCollection && serviceCollection.forEach( item => {
    allImagesArray.push( pathToImage( item.titleImage ).url() );
  } );

  //утп
  settingTopFeatures && settingTopFeatures.forEach( item => {
    allImagesArray.push( pathToImage( item.img ).url() );
  } );
  settingBottomFeatures && settingBottomFeatures.forEach( item => {
    allImagesArray.push( pathToImage( item.img ).url() );
  } );


  return {
    allImagesArray
  };
};

module.exports = action;
