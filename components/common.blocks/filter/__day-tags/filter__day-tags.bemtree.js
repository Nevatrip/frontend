block('filter').elem('day-tags')(
    replace()((node, ctx) => {
        return {
            block: 'radio-group',
            mix: {block: node.block, elem: node.elem},
            mods: {
                type: 'button'
            },
            name: 'filter__day-tags',
            options: node._dayTags.map(item => ({
                val: item.name,
                text: {
                    html: item.img + '&nbsp;' + item.name,
                }
            }))
        }
    })
);
