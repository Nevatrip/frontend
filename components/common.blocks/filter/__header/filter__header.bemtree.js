block('filter').elem('header')(
    tag()('header'),
    content()((node, ctx) => {
        return [
            {
                elem: 'header-top',
                content: {
                    elem: 'content',
                    mix: {block:'page', elem:'content'},
                    content: [
                        {
                            elem: 'heading',
                            content: node._dayHeading,
                        },
                        {
                            elem: 'day-tags',
                        },
                        {
                            elem: 'heading',
                            content: node._basicHeading,
                        },
                        {
                            elem: 'basic-tags',
                        }
                    ],
                }
            },
            {
                elem: 'sorting',
            }
        ]
    })
);
