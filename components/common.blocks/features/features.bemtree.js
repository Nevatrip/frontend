block('features')(
    tag()('section'),
    def()((node, ctx) => {
            node._features = ctx.features;
            return applyNext()
        }
    ),
    content()((node, ctx) => {
        return [
            {
                elem: 'content',
                tag: 'ul',
                mix: {block: 'page', elem: 'content'},
                content: node._features.map(item => ({
                    tag: 'li',
                    elem: 'item',
                    content: [
                        {
                            elem: 'item-img',
                            content: {
                                html: item.img,
                            },
                        },
                        {
                            elem: 'item-name',
                            content: item.name,
                        },
                        {
                            elem: 'item-description',
                            content: item.description,
                        },
                    ],
                })),
            },
        ]

    })
);
