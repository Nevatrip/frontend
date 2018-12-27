block('footer').elem('heading')(
    replace()((node, ctx) => {
        return [
            {
                block: 'heading',
                mods: {size: 'xl'},
                mix: {block: node.block, elem: node.elem},
                content: {html: node._mainNavHeading} ,
            },
        ]
    })
);
