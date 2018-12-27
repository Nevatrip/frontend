block('filter').elem('sorting')(
    content()( (node, ctx)=>{
        return{
            elem: 'content',
            mix: {block: 'page', elem: 'content'},
            content: [
                {
                    html: '<b>Сортировка:&nbsp;</b>'
                },
                {
                    block: 'select',
                    mods: {
                        mode: 'radio',
                        theme: 'islands',
                        size: 'm'
                    },
                    name: 'select',
                    val: 1,
                    options: node._sorting.map(item => ({
                        val: item,
                        text: {
                            html: item,
                        }
                    }))
                }
            ]
        }
    })
);
