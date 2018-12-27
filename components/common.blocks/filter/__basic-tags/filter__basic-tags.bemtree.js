block('filter').elem('basic-tags')(
    replace()((node, ctx) => {
        return {
            block: 'checkbox-group',
            mix: {block: node.block, elem: node.elem},
            mods: {
                type: 'button'
            },
            name: 'filter__basic-tags',
            options: node._basicTags.map(item => ({
                val: item,
                text: {
                    html: item,
                }
            }))
        }
    })
);
