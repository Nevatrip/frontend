block('filter').elem('result')(
    content()((node, ctx) => {
        return {
            elem: 'content',
            mix: {block: 'page', elem: 'content'},
            content: {
                block: 'tour',
                mods: {view: 'preview'},
                tour: {
                    name: 'Название экскурсии',
                    img: 'https://nevatrip.ru/assets/img/e/meteors/petergof.jpg',
                    features: [
                        'Unde deleniti deserunt fuga perspiciatis mollitia cum, dicta expedita natus debitis…',
                        'Harum a totam reiciendis vel, aspernatur numquam mollitia asperiores tenetur accusantium…',
                        'Labore magnam expedita iste sunt, atque a earum nemo voluptas fuga…',
                        'Consequuntur quam cum, odio tempore consequatur deserunt repellat eveniet totam accusantium…',
                        'Quam est numquam soluta quos dolorem non, laudantium, voluptates assumenda…',
                    ],
                    price: 100500,
                    pricePierce: 100500,
                    urlBuy: 'https://nevatrip.ru/meteors/petergof'
                }
            }
        }
    })
);
