block('footer').elem('header')(
    tag()('header'),
    content()((node, ctx) => ({
        elem: 'content',
        content: [
            {
                elem: 'awards'
            },
            {
                elem: 'address'
            }
        ]
    }))
);
