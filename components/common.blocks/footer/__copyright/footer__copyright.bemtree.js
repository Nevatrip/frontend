block('footer').elem('copyright')(
    content()((node, ctx) => {
        return [
            {
                content: {
                    html: node._copyright
                },
            },
        ]
    })
);
