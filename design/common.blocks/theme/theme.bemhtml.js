block( '*' )(
  def()( node => {
    node.mods.size = node.mods.size || 'm';
    node.mods.theme = node.mods.theme || node.defaultTheme || 'light';

    node.defaultTheme = node.mods.theme;

    return applyNext();
  } )
);
