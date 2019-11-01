block( 'breadcrumbs' )(


//       <ol class="breadcrumbs" style="max-width: 940px; margin-left: auto; margin-right: auto;" itemscope itemtype="http://schema.org/BreadcrumbList">
//         <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
//           <a itemprop="item" href="https://nevatrip.ru/">
//             <span itemprop="name">Главная</span>
//           </a>
//           <meta itemprop="position" content="1" />
//         </li>
//         /
//         <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
//           <a itemprop="item" href="https://nevatrip.ru/[[~[[*parent]]]]">
//             <span itemprop="name">[[!pdoField?id=`[[*parent]]`&field=`menutitle`]]</span>
//           </a>
//           <meta itemprop="position" content="2" />
//         </li>
//         /
//         <li>
//           <span>[[*menutitle:is=``:then=`[[*pagetitle]]`:else=`[[*menutitle]]`]]</span>
//         </li>
//       </ol>

  content()( () => [
    {
      block: 'text',
      content: 'Я - корзина!'
    }
  ] )
);
