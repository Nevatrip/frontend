block('filter')(
    tag()('section'),
    def()( ( node, ctx ) => {
            node._bg = ctx.bg;
            node._dayHeading = ctx.dayHeading;
            node._dayTags = ctx.dayTags;
            node._basicHeading = ctx.basicHeading;
            node._basicTags = ctx.basicTags;
            node._sorting = ctx.sorting;
            node._result = ctx.result;
            return applyNext()
        }
    ),
    content()((node, ctx) => {
        return [
            {
                elem: 'header',
            },
            {
                elem: 'result',
            }
        ]
    })
);
