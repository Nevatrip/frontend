block('footer')(
    tag()('footer'),
    def()( ( node, ctx ) => {
            node._awards = ctx.awards;
            node._social = ctx.social;
            node._mainNav = ctx.mainNav;
            node._mainNavHeading = ctx.mainNavHeading;
            node._basicNav = ctx.basicNav;
            node._copyright = ctx.copyright;
            return applyNext()
        }
    ),
    content()((node, ctx) => {
        return [
            {
                elem: 'header',
            },
            {
                elem: 'main',
            },
            {
                elem: 'footer',
            },
        ]
    })
);
