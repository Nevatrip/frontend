block('service').elem('more')(
  replace()((node, ctx) => {
    return {
      block: 'link',
      mix: {block: node.block, elem: node.elem},
      content: {
        html: 'Подробнее об&nbsp;экскурсии&nbsp;&rarr;'
      },
      to: ctx.route,
      params: ctx.params,
      title: ctx.title
    }
  })
);
