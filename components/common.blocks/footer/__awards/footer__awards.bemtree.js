block('footer').elem('awards')(
    content()((node, ctx) => {
        return node._awards.map(item => ({
            elem: 'awards-item',
            content: item
        }))
    })
);
