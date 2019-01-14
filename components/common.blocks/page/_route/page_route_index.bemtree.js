block('page').mod('route', 'index')(
  mods()(( node ) => {
    return [
      {
        block: 'service',
        mods: {view: 'banner'},
      },
      {
        block: 'features',
        features: [
          {
            name: 'Электронный билет',
            description: 'с открытым временем',
            img: '<svg class="utp__icon" xmlns="http://www.w3.org/2000/svg" width="80" height="100" viewBox="0 0 100 100"><g fill="#409ECE" fill-rule="evenodd"><path d="M46.2 53.2c.899 0 1.55-.651 1.55-1.55 0-.913-.816-1.55-1.55-1.55-.913 0-1.55.817-1.55 1.55 0 .913.818 1.55 1.55 1.55M49.791 23.212a1.005 1.005 0 0 0-.74.257.935.935 0 0 0-.302.684l-.041 3.705c-.003.34.166.662.453.863a1.09 1.09 0 0 0 .62.198.985.985 0 0 0 .675-.26.94.94 0 0 0 .3-.684l.042-3.705c.006-.548-.446-1.022-1.007-1.058M49.706 31.919a.977.977 0 0 0-.74.256.939.939 0 0 0-.302.685l-.041 3.706c0 .017.002.033.006.063.018.322.182.613.448.799.163.115.355.182.552.195l.06.002c.12 0 .242-.023.367-.07a.947.947 0 0 0 .615-.874l.042-3.704c.006-.55-.446-1.023-1.007-1.058M64.249 32.868a.953.953 0 0 0 .864.531.903.903 0 0 0 .76-.404l3.02-4.58a.891.891 0 0 0 .126-.673.949.949 0 0 0-.416-.6c-.438-.284-1.014-.17-1.29.246l-2.133 3.236-.985-1.96a.964.964 0 0 0-1.248-.447.872.872 0 0 0-.297.221.86.86 0 0 0-.173.29.897.897 0 0 0 .048.708l.125.25 1.599 3.182z"></path><path d="M79.57 34.895a6.507 6.507 0 0 0 2.222 1.514l-.023 6.759c-.001.321-.13.624-.363.856a1.221 1.221 0 0 1-.861.355h-.004l-17.891-.042v-4.913a8.995 8.995 0 0 0 2.862.482l.118-.001a9.207 9.207 0 0 0 1.706-.183 9.25 9.25 0 0 0 5.937-4.009 9.124 9.124 0 0 0 1.32-7.006 8.866 8.866 0 0 0-3.852-5.604c-2.456-1.592-5.45-1.851-8.091-.87a9.291 9.291 0 0 0-2.1 1.107 9.406 9.406 0 0 0-1.044.842l-.081.072a2.82 2.82 0 0 0-.128.119 9.43 9.43 0 0 0-1.211 1.48 9.172 9.172 0 0 0-.597 1.068 8.824 8.824 0 0 0-.377.893 9.134 9.134 0 0 0 .167 6.671c.117.275.254.553.418.848.054.097.12.183.177.277-.058-.002-.114-.01-.173-.01-2.684 0-4.95 2.267-4.95 4.95v3.764l-2.132-.004.01-2.886a1 1 0 0 0-.997-.998h-.002a1 1 0 0 0-1.002.992l-.01 2.887-7.97-.018a1.214 1.214 0 0 1-.863-.36 1.2 1.2 0 0 1-.358-.857l.022-6.761c.419-.17.839-.403 1.28-.71a6.518 6.518 0 0 0 2.572-3.627c.113-.41.184-.843.212-1.285.003-.048.008-.096.013-.144.009-.078.017-.157.018-.238.005-1.746-.698-3.395-1.978-4.642a6.5 6.5 0 0 0-2.077-1.382l.022-6.76c.002-.322.13-.626.364-.856.232-.229.537-.355.86-.355h.004l7.853.018.122.086a.406.406 0 0 0-.004.051l-.013 3.682c0 .339.17.651.453.835.164.106.359.17.549.162a.997.997 0 0 0 .999-.992l.013-3.682a.914.914 0 0 0-.011-.137l9.85.023 2.1.005 17.983.042c.326.001.63.129.862.36a1.2 1.2 0 0 1 .358.857l-.022 6.765c-2.441.984-4.085 3.391-4.094 6a6.433 6.433 0 0 0 1.834 4.51zM60.55 36.06a7.09 7.09 0 0 1-2.132-4.334 7.398 7.398 0 0 1 1.179-4.89c.282-.425.607-.802.953-1.15a7.441 7.441 0 0 1 2.1-1.485 7.438 7.438 0 0 1 3.17-.726c1.35 0 2.71.374 3.915 1.156 2.082 1.351 3.296 3.658 3.248 6.171a7.387 7.387 0 0 1-1.222 3.928 7.469 7.469 0 0 1-3.137 2.685c-1.94.885-4.097.889-5.974.063a7.199 7.199 0 0 1-1.026-.542 7.094 7.094 0 0 1-1.074-.876zm0 45.24h-22.9v-6.15c0-.543-.44-.996-1.057-1.055-1.377 0-6.942-1.218-6.942-6.846v-4.215l.898.18c.43.087.918.186 1.25.186.518 0 1.043-.088 1.568-.263 1.13-.403 2.005-1.202 2.693-2.481a1 1 0 0 0 .089-.207l.008-.799.744.05h10.117l-.922 1.206c-1.224 1.601-1.845 3.635-1.845 6.044 0 .589.46 1.05 1.049 1.05s1.05-.461 1.05-1.05c0-2.296.664-4.174 1.92-5.43 1.78-1.781 4.3-1.92 5.03-1.92h.2a1.69 1.69 0 0 0 1.05-.35c.185-.137.3-.406.3-.7v-18.1a2.853 2.853 0 0 1 2.85-2.85 2.819 2.819 0 0 1 2.85 2.85V81.3zm-22.9 10.1h22.9v-7.9h-22.9v7.9zM27.394 59.535c-.501-.251-1.106-.761-1.31-1.459-.295-.79-.073-1.523.127-2.021.379-.884 1.277-1.455 2.29-1.455.366 0 .637.097.874.182l.269.102 3.303 1.701c.584.29.993.744 1.259 1.407.252.497.2 1.222-.134 1.892-.297.595-.753 1.007-1.415 1.272a1.615 1.615 0 0 1-.737.163c-.515 0-.992-.191-1.187-.268l-3.34-1.516zm-1.321-10.203l-.006-.02c-.217-.644-.16-1.353.163-1.997.227-.455.729-1.059 1.422-1.276.325-.139.628-.139.849-.139.367 0 .638.097.872.181l.27.102 3.303 1.701c.585.293.994.746 1.26 1.407.252.498.2 1.223-.134 1.893-.297.595-.753 1.007-1.415 1.272a1.615 1.615 0 0 1-.737.163c-.515 0-.992-.191-1.187-.268l-3.335-1.515c-.5-.249-1.147-.793-1.325-1.504zm-.027-8.938a2.424 2.424 0 0 1 .193-1.897c.228-.448.729-1.044 1.413-1.258.325-.139.628-.139.849-.139.366 0 .635.096.869.18l.274.103 3.302 1.701c.585.293.994.747 1.26 1.407.252.498.2 1.223-.14 1.904a2.32 2.32 0 0 1-2.152 1.385c-.377 0-.753-.082-1.116-.243l-3.3-1.5c-.73-.365-1.233-.933-1.452-1.643zm-3.27-10.908c-.996-1.14-.954-2.918.094-3.966a2.781 2.781 0 0 1 1.98-.819c.749 0 1.452.291 1.98.819l2.82 2.819V34.9h-1.46l-5.414-5.414zM31.75 8H60.55v6.367l-19.803-.046h-.01c-.855 0-1.662.332-2.272.935a3.173 3.173 0 0 0-.955 2.26l-.027 8.228.735.203a4.516 4.516 0 0 1 2.143 1.335 4.478 4.478 0 0 1 1.088 2.149c.063.318.094.603.093.868-.007 2.022-1.386 3.806-3.354 4.338l-.735.199-.028 8.228a3.174 3.174 0 0 0 .94 2.266 3.22 3.22 0 0 0 2.274.945l12.112.028v11.196H36.293l-.19-.471c-.361-.905-.876-1.559-1.618-2.054l-.905-.602.885-.632a4.32 4.32 0 0 0 1.448-1.792c.536-1.159.604-2.446.189-3.525-.347-.953-.941-1.732-1.718-2.249l-.904-.603.885-.632a4.32 4.32 0 0 0 1.449-1.791c.535-1.16.603-2.446.189-3.523-.517-1.444-1.557-2.213-2.332-2.601L31.75 36V8zm51.34 18.053l.736-.2.028-8.228a3.167 3.167 0 0 0-.938-2.265 3.207 3.207 0 0 0-2.277-.946l-17.99-.042V7.05c0-.589-.461-1.05-1.05-1.05H30.8c-.588 0-1.05.461-1.05 1.05v18.31l-1.28-1.28c-.923-.923-2.174-1.432-3.52-1.432s-2.596.509-3.52 1.432c-.922.923-1.43 2.173-1.43 3.52s.508 2.597 1.43 3.52l4.53 4.53-.53.53c-.531.532-.932 1.053-1.163 1.513-.94 2.052-.321 4.468 1.469 5.746l.855.611-.854.61a4.792 4.792 0 0 0-1.47 1.733 4.75 4.75 0 0 0-.156 3.614c.373.933.928 1.69 1.65 2.251l.794.617-.82.585a4.797 4.797 0 0 0-1.468 1.733 4.752 4.752 0 0 0-.16 3.605c.43 1.204 1.285 2.153 2.42 2.676l.923.368v5.408c0 6.516 5.682 8.36 7.423 8.77l.577.137V92.55c0 .589.462 1.05 1.05 1.05h25.1c.589 0 1.05-.461 1.05-1.05V46.326l17.883.042h.008c.856 0 1.664-.332 2.274-.935a3.172 3.172 0 0 0 .954-2.26l.029-8.132v-.096l-.735-.202a4.513 4.513 0 0 1-2.311-1.523 4.493 4.493 0 0 1-1.013-2.83c.007-2.022 1.386-3.806 3.353-4.337z"></path></g></svg>',
          },
          {
            name: 'Выгодные цены',
            description: 'при покупке онлайн',
            img: '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="100" viewBox="0 0 100 100"><g fill="none" fill-rule="evenodd"><path fill="#409ECE" d="M34.584 24.735a.794.794 0 0 0 .586.265.794.794 0 0 0 .587-.265.963.963 0 0 0 0-1.28l-9.34-10.19a.78.78 0 0 0-1.174 0 .963.963 0 0 0 0 1.28l9.34 10.19zM20.122 68.95l-9.888 10.042a.82.82 0 0 0 0 1.15.786.786 0 0 0 1.132 0L21.254 70.1a.82.82 0 0 0 0-1.15.791.791 0 0 0-1.132 0M12.875 59a.876.876 0 0 0 .267-.041l7.25-2.277a.857.857 0 0 0 .566-1.082.873.873 0 0 0-1.1-.557l-7.25 2.277a.857.857 0 0 0-.566 1.082.873.873 0 0 0 .833.598M20.425 28.649l5.14 3.207c.156.097.33.144.504.144a.94.94 0 0 0 .782-.41.877.877 0 0 0-.276-1.24l-5.14-3.206a.95.95 0 0 0-1.286.265.877.877 0 0 0 .276 1.24M62.83 25a.794.794 0 0 0 .586-.265l9.34-10.19a.963.963 0 0 0 0-1.28.78.78 0 0 0-1.172 0l-9.34 10.19a.963.963 0 0 0 0 1.28.79.79 0 0 0 .586.265M76.878 68.95a.79.79 0 0 0-1.13 0 .82.82 0 0 0 0 1.149l9.886 10.042a.79.79 0 0 0 1.132 0 .82.82 0 0 0 0-1.149L76.878 68.95zM77.143 55.043a.873.873 0 0 0-1.1.557.857.857 0 0 0 .566 1.082l7.249 2.277a.874.874 0 0 0 1.1-.557.857.857 0 0 0-.567-1.082l-7.248-2.277zM71.15 31.59a.94.94 0 0 0 .78.41.945.945 0 0 0 .505-.144l5.14-3.207a.877.877 0 0 0 .276-1.24.95.95 0 0 0-1.286-.265l-5.14 3.207a.877.877 0 0 0-.276 1.24"></path><path fill="#419DCD" d="M49.61 49.946h-2.527V43h2.527a3.477 3.477 0 0 1 3.473 3.473 3.477 3.477 0 0 1-3.473 3.473m2.692-8.232A5.423 5.423 0 0 0 49.61 41h-3.527a.987.987 0 0 0-.943.714c-.028.091-.057.184-.057.286v10.813H44a1 1 0 1 0 0 2h1.083V57a1 1 0 1 0 2 0v-2.187H50a1 1 0 1 0 0-2h-2.917v-.867h2.527a5.479 5.479 0 0 0 5.473-5.473 5.472 5.472 0 0 0-2.781-4.759"></path><path fill="#409ECE" d="M49.392 67.82a.842.842 0 0 0-.784 0l-20.47 10.794 3.91-22.86a.846.846 0 0 0-.242-.747l-16.56-16.19 22.885-3.335a.84.84 0 0 0 .634-.462L49 14.22l10.236 20.8c.123.249.359.422.633.462l22.886 3.335-16.562 16.19a.845.845 0 0 0-.241.747l3.91 22.86-20.47-10.793zm18.292-11.915L85.15 38.83a.845.845 0 0 0-.467-1.438L60.55 33.876 49.754 11.942c-.283-.576-1.226-.576-1.508 0L37.453 33.876l-24.134 3.517a.842.842 0 0 0-.467 1.438l17.465 17.075-4.122 24.107a.84.84 0 1 0 1.22.89L49 69.521l21.587 11.382a.851.851 0 0 0 .886-.064.845.845 0 0 0 .334-.826l-4.123-24.108z"></path></g></svg>',
          },
          {
            name: 'Быстрая покупка',
            description: 'в 2 клика',
            img: '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="100" viewBox="0 0 100 100"><g fill="#419DCD" fill-rule="evenodd"><path d="M78.389 38.772c.84 0 1.523.683 1.523 1.522 0 .84-.683 1.523-1.523 1.523h-9.831v1.497h9.83c.84 0 1.524.682 1.524 1.522s-.683 1.523-1.523 1.523H67.074a.75.75 0 0 0-.658 1.105 8.338 8.338 0 0 1 1.006 3.968 8.364 8.364 0 0 1-4.165 7.211c-.228.133-.484.2-.746.2-.135 0-.27-.017-.405-.053a1.525 1.525 0 0 1-.93-.701 1.526 1.526 0 0 1 .552-2.08 5.309 5.309 0 0 0 2.648-4.577 5.296 5.296 0 0 0-5.29-5.29 5.41 5.41 0 0 0-.627.04 5.216 5.216 0 0 0-1.394.364 5.313 5.313 0 0 0-3.27 4.886c0 .535.094 1.087.28 1.642l.095.29-.259.162c-.225.14-.432.296-.642.45-.412.3-.804.617-1.15.964l-.396.399-.23-.513a8.228 8.228 0 0 1-.74-3.394c0-.986.181-1.97.54-2.926a.75.75 0 0 0-.7-1.011h-20.28V34.23H78.389a1.523 1.523 0 0 1 0 3.045h-9.831v1.497h9.83zm-19.93 13.293v-4.363c.205-.034.413-.063.627-.063a3.798 3.798 0 0 1 3.794 3.793c0 .262-.037.538-.115.866l-.1.414-.402-.138a9.713 9.713 0 0 0-3.804-.51zm8.963 9.803v2.659h-8.963V58.47a3.001 3.001 0 0 0 0-2.291v-2.605a8.166 8.166 0 0 1 2.687.224l.809.206-.68.485a.838.838 0 0 0-.08.066 1.638 1.638 0 0 1-.217.16 3.023 3.023 0 0 0-1.098 4.125 3.032 3.032 0 0 0 2.615 1.506c.529 0 1.051-.14 1.511-.407a9.843 9.843 0 0 0 2.043-1.575l.396-.4.23.514a8.238 8.238 0 0 1 .747 3.39zm2.192 4.155l-2.122 21.213H46.29l1.614-16.145.14-1.394.367-3.667v-.007h21.204zm.975 5.287l2.39 15.926h-3.982l1.592-15.926zm-52.195-1.613v-1.268h6.051c.268 0 .527-.024.78-.06.082-.01.158-.03.238-.046.167-.031.33-.066.488-.113.088-.026.171-.057.257-.088a4.474 4.474 0 0 0 .644-.288c.122-.067.237-.14.35-.217.069-.05.138-.096.202-.148.11-.089.208-.183.304-.28.05-.052.104-.1.15-.155.112-.13.207-.269.292-.413.017-.028.038-.053.055-.081.088-.163.16-.332.21-.51h18.49l-.367 3.667H18.394zm0-3.667h8.477a1.65 1.65 0 0 1-.202.233c-.017.017-.04.033-.058.05a2.513 2.513 0 0 1-.237.182l-.096.06a2.95 2.95 0 0 1-.304.161c-.02.008-.037.019-.056.028a3.378 3.378 0 0 1-.406.141l-.114.03c-.111.027-.225.05-.342.068l-.133.02a4.024 4.024 0 0 1-.478.031h-6.05V66.03zm34.875-6.694v5.19h-2.517v-2.658c0-1.175.246-2.32.733-3.403l.231-.516.397.402a9.72 9.72 0 0 0 1.156.985zm3.796.663v4.528h-2.401V60.16A3.03 3.03 0 0 0 57.065 60zm-.622-3.99c.281.161.493.404.622.695.033.074.064.148.085.229.092.34.057.69-.085 1.006-.022.05-.04.102-.068.149-.203.35-.53.603-.924.708a1.505 1.505 0 0 1-1.157-.153c-.087-.05-.168-.11-.252-.162a8.652 8.652 0 0 1-1.84-1.586l-.224-.256.224-.255c.138-.158.296-.294.445-.44a8.323 8.323 0 0 1 1.357-1.106l.038-.023.242-.155.219.25c.398.452.84.821 1.318 1.099zm.622-2.217v.825c-.028-.021-.058-.04-.084-.062a.943.943 0 0 0-.082-.065l-.68-.484.81-.207.036-.007zm-1.155-1.22l-.404.139-.098-.415a3.704 3.704 0 0 1-.115-.864c0-1.347.71-2.524 1.772-3.197v4.027c-.388.08-.774.18-1.155.31zM18.394 20.404H53.27v12.329H30.313v-2.27h-1.497v20.799h1.497v-2.271h19.244l-.097.467a9.637 9.637 0 0 0-.206 1.974c0 1.75.483 3.485 1.396 5.017l.118.198-.118.198a9.8 9.8 0 0 0-1.396 5.023v2.659h-1.522a.733.733 0 0 0-.369.109H18.394V20.404zm0-5.165h34.307c2.407 0 4.364 1.928 4.364 4.297v13.197h-2.401V19.011h-36.27v-3.772zm63.014 25.055a3.01 3.01 0 0 0-.786-2.012l-.233-.258.234-.26a3.008 3.008 0 0 0 .785-2.011 3.023 3.023 0 0 0-3.02-3.02H58.46V19.536c0-3.137-2.583-5.691-5.758-5.691H17V71.09h29.398l-1.682 16.817c-.02.21.049.422.19.579a.752.752 0 0 0 .555.245h28.387a.75.75 0 0 0 .74-.86l-3.43-22.706a.73.73 0 0 0-.163-.395.75.75 0 0 0-.555-.244h-1.522v-2.659a9.847 9.847 0 0 0-1.392-5.027l-.118-.198.118-.199a9.8 9.8 0 0 0 1.392-5.012 9.836 9.836 0 0 0-.49-3.068l-.168-.509H78.39a3.023 3.023 0 0 0 3.02-3.019c0-.733-.28-1.449-.787-2.012l-.233-.259.234-.26a3.008 3.008 0 0 0 .785-2.01z"></path><path d="M58.204 77.464h-1.956v-5.377h1.956a2.692 2.692 0 0 1 2.69 2.689 2.692 2.692 0 0 1-2.69 2.688m2.084-6.373a4.198 4.198 0 0 0-2.084-.552h-2.73a.764.764 0 0 0-.73.552c-.022.07-.044.143-.044.222v8.371h-.839a.773.773 0 1 0 0 1.548h.839v1.693a.774.774 0 1 0 1.548 0v-1.693h2.258a.774.774 0 1 0 0-1.548h-2.258v-.671h1.956c2.337 0 4.237-1.9 4.237-4.237 0-1.579-.869-2.956-2.153-3.685"></path></g></svg>',
          },
          {
            name: 'Все маршруты',
            description: 'Самый широкий выбор прогулок',
            img: '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="100" viewBox="0 0 100 100"><g fill="#409ECE" fill-rule="evenodd" stroke="#409ECE" stroke-width=".5"><path d="M50.205 51.557a5.848 5.848 0 0 1-5.842-5.842 5.85 5.85 0 0 1 5.842-5.843 5.85 5.85 0 0 1 5.842 5.843 5.847 5.847 0 0 1-5.842 5.842m0-13.389c-4.161 0-7.546 3.387-7.546 7.546 0 4.16 3.386 7.545 7.546 7.545s7.545-3.385 7.545-7.545c0-4.159-3.384-7.546-7.545-7.546M20.786 84.235a5.32 5.32 0 0 1-5.313-5.313 5.32 5.32 0 0 1 5.313-5.315 5.321 5.321 0 0 1 5.314 5.315 5.32 5.32 0 0 1-5.314 5.313m0-12.33a7.024 7.024 0 0 0-7.016 7.016 7.023 7.023 0 0 0 7.016 7.016 7.024 7.024 0 0 0 7.017-7.016 7.024 7.024 0 0 0-7.017-7.017"></path><path d="M20.786 76.788a2.132 2.132 0 1 0 0 4.265 2.132 2.132 0 0 0 0-4.265M73.33 12.703a5.32 5.32 0 0 1 5.313 5.314 5.32 5.32 0 0 1-5.313 5.313 5.32 5.32 0 0 1-5.314-5.313 5.32 5.32 0 0 1 5.314-5.314m0 12.331a7.025 7.025 0 0 0 7.017-7.017A7.025 7.025 0 0 0 73.33 11a7.025 7.025 0 0 0-7.018 7.017 7.025 7.025 0 0 0 7.018 7.017"></path><path d="M73.33 20.15a2.132 2.132 0 1 0 0-4.264 2.132 2.132 0 0 0 0 4.264M49.91 74.686c-2.825-3.21-14.134-16.815-14.134-28.992 0-7.545 5.894-13.754 13.42-14.136.228-.012.456-.018.686-.018 3.562 0 7.07 1.398 9.717 3.89 2.847 2.682 4.435 6.27 4.47 10.102.105 11.614-11.34 25.832-14.159 29.154m19.632-27.718H65.73c.03-.486.048-.97.043-1.45-.039-4.301-1.817-8.323-5.004-11.326-3.153-2.97-7.407-4.533-11.658-4.335-8.43.427-15.035 7.384-15.035 15.837 0 .424.015.848.04 1.274h-7.15c-7.998 0-14.26-6.288-14.26-14.316 0-3.847 1.496-7.462 4.212-10.18 2.875-2.875 6.443-4.458 10.047-4.458H59.17v1.696l4.412-2.547-4.412-2.548v1.696H26.963c-4.059 0-8.054 1.76-11.25 4.958A15.992 15.992 0 0 0 11 32.652c0 8.982 7.012 16.019 15.963 16.019h7.31c1.732 13.604 14.45 27.27 15.03 27.885a.85.85 0 0 0 .62.268h.01a.852.852 0 0 0 .623-.282c.58-.642 13.205-14.798 14.997-27.871h3.99c7.963 0 14.442 6.494 14.442 14.478v1.048c0 7.874-6.479 14.279-14.443 14.279H30.37a.851.851 0 0 0 0 1.703h39.173c8.903 0 16.146-7.17 16.146-15.982v-1.048c0-8.922-7.243-16.181-16.146-16.181"></path></g></svg>',
          },
        ]
      },
      {
        block: 'filter',
        bg: '/filter__header.jpg',
        dayHeading: 'Время суток',
        dayTags: [
          {
            name: 'День',
            img: '<svg style="overflow: visible" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23"><g fill="none" fill-rule="evenodd" stroke="#FFD84A"><path d="M11.5 7.429a4.071 4.071 0 1 1 0 8.142 4.071 4.071 0 0 1 0-8.142z"></path><path stroke-linecap="round" d="M11.5 5.071V1M11.5 22v-4.071M17.929 11.5H22M1 11.5h4.071M17 7.357L18.357 6M6 18.357L7.357 17M17 17l1.357 1.357M6 6l1.357 1.357"></path></g></svg>',
          },
          {
            name: 'Вечер',
            img: '<svg style="overflow: visible" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17"><g fill="#FFD84A" fill-rule="evenodd"><path d="M9.5 17a.59.59 0 0 1-.42-.177l-2.2-2.252H.593A.6.6 0 0 1 0 13.964c0-.334.266-.607.594-.607h6.531c.158 0 .309.064.42.177l1.955 2 1.955-1.998a.588.588 0 0 1 .42-.179h6.531c.328 0 .594.273.594.607a.6.6 0 0 1-.594.607h-6.285l-2.202 2.252A.585.585 0 0 1 9.5 17M14.535 12.143a.581.581 0 0 1-.202-.037.61.61 0 0 1-.357-.777 4.787 4.787 0 0 0 .274-1.615c0-2.679-2.13-4.857-4.75-4.857S4.75 7.035 4.75 9.714c0 .56.092 1.103.273 1.615a.611.611 0 0 1-.356.777.588.588 0 0 1-.76-.364 6.067 6.067 0 0 1-.344-2.028c0-3.348 2.663-6.071 5.937-6.071 3.274 0 5.938 2.723 5.938 6.071 0 .7-.117 1.383-.345 2.028a.595.595 0 0 1-.558.4M9.5 2.428a.6.6 0 0 1-.594-.607V.607A.6.6 0 0 1 9.5 0a.6.6 0 0 1 .594.607v1.214a.6.6 0 0 1-.594.607M1.781 10.321H.594A.6.6 0 0 1 0 9.714a.6.6 0 0 1 .594-.607H1.78a.6.6 0 0 1 .594.607.6.6 0 0 1-.594.607M18.406 10.321H17.22a.6.6 0 0 1-.594-.607.6.6 0 0 1 .594-.607h1.187a.6.6 0 0 1 .594.607.6.6 0 0 1-.594.607M4.042 4.74a.59.59 0 0 1-.42-.176l-.84-.86a.617.617 0 0 1 0-.859.585.585 0 0 1 .84 0l.84.859a.617.617 0 0 1 0 .858.581.581 0 0 1-.42.179M14.957 4.74a.59.59 0 0 1-.42-.176.617.617 0 0 1 0-.859l.84-.858a.585.585 0 0 1 .84 0 .62.62 0 0 1 0 .858l-.84.859a.59.59 0 0 1-.42.177"></path></g></svg>',
          },
          {
            name: 'Ночь',
            img: '<svg style="overflow: visible" xmlns="http://www.w3.org/2000/svg" width="22" height="13" viewBox="0 0 22 13"><g fill="none" fill-rule="evenodd"><path d="M0 9.032h14.864v.941H0z"></path><path fill="#FFD84A" d="M14.864 9.503c0-.26-.238-.47-.53-.47H.53c-.291 0-.53.21-.53.47s.239.47.53.47h13.806a.56.56 0 0 0 .374-.137.443.443 0 0 0 .155-.333M1.548 7h5.904C7.754 7 8 6.776 8 6.5S7.754 6 7.452 6H1.548C1.246 6 1 6.224 1 6.5s.246.5.548.5M13 6.5c0-.276-.265-.5-.591-.5h-1.817c-.327 0-.592.224-.592.5s.265.5.592.5h1.817c.326 0 .591-.224.591-.5M8.485 12h-3.97a.509.509 0 0 0-.515.5c0 .275.231.5.515.5h3.97A.509.509 0 0 0 9 12.5c0-.276-.231-.5-.515-.5"></path><path fill="#FFD84A" d="M21.34 9.42a5.406 5.406 0 0 1-4.433-2.96 5.208 5.208 0 0 1-.547-2.337c0-1.094.337-2.147.975-3.045a.535.535 0 0 0 .04-.542.562.562 0 0 0-.46-.308c-3.067-.225-5.9 1.778-6.713 4.668h1.144a5.347 5.347 0 0 1 4.048-3.51l.523-.102-.197.49a6.27 6.27 0 0 0-.453 2.349c0 .986.222 1.933.659 2.813a6.498 6.498 0 0 0 3.842 3.273l.506.16-.41.334a5.427 5.427 0 0 1-5.875.63H12.09A6.527 6.527 0 0 0 16.444 13a6.509 6.509 0 0 0 5.303-2.732.536.536 0 0 0-.407-.848"></path></g></svg>',
          }
        ],
        basicHeading: 'Параметры прогулки',
        basicTags: ['С экскурсией', 'Для двоих', 'Для компаний', 'Для туристических групп', 'С детьми', 'Билет на целый день', 'По рекам и каналам', 'Кафе', 'С выходом в Финский залив', 'Бар', 'Ресторан', 'Ужин-круиз', 'Развод мостов', 'С живой музыкой', 'Метеор', 'Петергоф', 'Пригороды', 'Активный отдых',],
        sorting: ['По популярности', 'По цене от наименьшей', 'По цене от наибольшей'],
      },
      {
        block: 'service',
        mods: {view: 'list-item-lg'},
        service: node._service,
      },
      {
        block: 'page',
        elem: 'article',
        content: [
          {
            block: 'title',
            mods: { view: 'sm' },
            url: 'why-nevatrip.jpg',
            title: 'Почему NevaTrip?'
          },
          {
            block: 'features',
            features: [
              {
                description: 'Лучшие маршруты по лучшим ценам',
                img: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 475.099 475.099"><path d="M442.829 265.532c9.328-14.089 13.986-29.598 13.986-46.538 0-19.607-7.225-36.637-21.687-51.117-14.469-14.465-31.601-21.696-51.394-21.696h-50.251c9.134-18.842 13.709-37.117 13.709-54.816 0-22.271-3.34-39.971-9.996-53.105-6.663-13.138-16.372-22.795-29.126-28.984C295.313 3.09 280.947 0 264.959 0c-9.712 0-18.274 3.521-25.697 10.566-8.183 7.993-14.084 18.274-17.699 30.837-3.617 12.559-6.521 24.6-8.708 36.116-2.187 11.515-5.569 19.652-10.135 24.41-9.329 10.088-19.511 22.273-30.551 36.547-19.224 24.932-32.264 39.685-39.113 44.255H54.828c-10.088 0-18.702 3.574-25.84 10.706-7.135 7.139-10.705 15.752-10.705 25.841v182.723c0 10.089 3.566 18.699 10.705 25.838 7.142 7.139 15.752 10.711 25.84 10.711h82.221c4.188 0 17.319 3.806 39.399 11.42 23.413 8.186 44.017 14.418 61.812 18.702a230.392 230.392 0 0 0 54.106 6.427h36.829c26.836 0 48.438-7.666 64.809-22.99 16.365-15.324 24.458-36.213 24.27-62.67 11.42-14.657 17.129-31.597 17.129-50.819 0-4.185-.281-8.277-.855-12.278 7.23-12.748 10.854-26.453 10.854-41.11-.003-6.853-.858-13.423-2.573-19.7zM85.949 396.58c-3.616 3.614-7.898 5.428-12.847 5.428-4.95 0-9.233-1.813-12.85-5.428-3.615-3.613-5.424-7.897-5.424-12.85 0-4.948 1.805-9.229 5.424-12.847 3.621-3.617 7.9-5.425 12.85-5.425 4.949 0 9.231 1.808 12.847 5.425 3.617 3.617 5.426 7.898 5.426 12.847 0 4.953-1.809 9.237-5.426 12.85zm328.196-154.161c-4.093 8.754-9.186 13.227-15.276 13.415 2.854 3.237 5.235 7.762 7.139 13.562 1.902 5.807 2.847 11.087 2.847 15.848 0 13.127-5.037 24.455-15.126 33.969 3.43 6.088 5.141 12.658 5.141 19.697 0 7.043-1.663 14.038-4.996 20.984-3.327 6.94-7.851 11.938-13.559 14.982.951 5.709 1.423 11.04 1.423 15.988 0 31.785-18.274 47.678-54.823 47.678h-34.536c-24.94 0-57.483-6.943-97.648-20.841-.953-.38-3.709-1.383-8.28-2.998s-7.948-2.806-10.138-3.565c-2.19-.767-5.518-1.861-9.994-3.285-4.475-1.431-8.087-2.479-10.849-3.142-2.758-.664-5.901-1.283-9.419-1.855-3.52-.571-6.519-.855-8.993-.855h-9.136V219.285h9.136c3.045 0 6.423-.859 10.135-2.568 3.711-1.714 7.52-4.283 11.421-7.71a294.593 294.593 0 0 0 10.992-10.138c3.427-3.33 7.233-7.517 11.422-12.559 4.187-5.046 7.47-9.089 9.851-12.135a1179.86 1179.86 0 0 0 8.992-11.707c3.615-4.757 5.806-7.613 6.567-8.566 10.467-12.941 17.795-21.601 21.982-25.981 7.804-8.182 13.466-18.603 16.987-31.261 3.525-12.66 6.427-24.604 8.703-35.832 2.282-11.229 5.903-19.321 10.858-24.27 18.268 0 30.453 4.471 36.542 13.418 6.088 8.945 9.134 22.746 9.134 41.399 0 11.229-4.572 26.503-13.71 45.821-9.134 19.32-13.698 34.5-13.698 45.539h100.495c9.527 0 17.993 3.662 25.413 10.994 7.426 7.327 11.143 15.843 11.143 25.553-.003 6.661-2.05 14.371-6.142 23.137z" fill="#5397cb"/></svg>'},
              {
                description: 'Только надежные теплоходные компании: Нева Тревел компани, Астра Марин, Минхерц',
                img: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 511.626 511.626"><path d="M509.053 333.753c-1.711-1.711-3.901-2.566-6.563-2.566H401.991c-4.186 0-7.039 1.902-8.565 5.711-1.523 3.617-.855 6.951 1.995 9.996l28.551 28.548c-12.751 17.323-30.785 31.929-54.101 43.828-23.315 11.898-49.152 19.745-77.516 23.555V258.096h54.816c4.948 0 9.236-1.812 12.854-5.424 3.613-3.612 5.424-7.898 5.424-12.847v-36.547c0-4.947-1.811-9.229-5.424-12.847-3.617-3.616-7.905-5.424-12.854-5.424h-54.816v-46.536c11.04-6.473 19.89-15.275 26.553-26.409 6.663-11.138 9.996-23.363 9.996-36.691 0-20.174-7.139-37.401-21.412-51.673-14.275-14.277-31.498-21.416-51.675-21.416-20.177 0-37.404 7.139-51.682 21.416-14.272 14.272-21.411 31.499-21.411 51.673 0 13.328 3.333 25.553 9.994 36.691 6.662 11.134 15.513 19.936 26.551 26.409v46.536h-54.816c-4.952 0-9.235 1.809-12.85 5.424-3.618 3.617-5.426 7.9-5.426 12.847v36.547c0 4.949 1.809 9.235 5.426 12.847 3.619 3.616 7.902 5.424 12.85 5.424h54.816v184.729c-28.359-3.812-54.2-11.663-77.514-23.559-23.315-11.902-41.352-26.508-54.103-43.831l28.549-28.541c2.853-3.053 3.521-6.379 1.997-9.999-1.521-3.812-4.377-5.715-8.564-5.715H9.135c-2.666 0-4.856.855-6.567 2.573C.859 335.464 0 337.654 0 340.323v100.495c0 4.182 1.903 7.043 5.708 8.562 1.525.38 2.667.568 3.427.568 2.667 0 4.854-.856 6.567-2.561l26.552-26.556c22.648 27.217 52.96 48.772 90.932 64.665s78.847 23.846 122.626 23.846c43.776 0 84.651-7.953 122.623-23.846 37.973-15.893 68.286-37.445 90.934-64.665l26.556 26.556c1.903 1.704 4.086 2.561 6.564 2.561.76 0 1.902-.192 3.429-.568 3.806-1.52 5.708-4.381 5.708-8.562V340.323c0-2.669-.859-4.859-2.573-6.57zM268.66 88.218c-3.613 3.617-7.895 5.43-12.847 5.43s-9.232-1.812-12.85-5.43c-3.617-3.612-5.424-7.898-5.424-12.847 0-4.947 1.807-9.229 5.424-12.847 3.621-3.616 7.902-5.424 12.85-5.424s9.233 1.809 12.847 5.424c3.614 3.617 5.428 7.9 5.428 12.847-.001 4.948-1.814 9.235-5.428 12.847z" fill="#5397cb"/></svg>'
              },
              {
                description: 'Более 30 партнеров в городе',
                img: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 548.169 548.169"><g fill="#5397cb"><path d="M109.634 164.452c20.179 0 37.402-7.135 51.674-21.411 14.277-14.275 21.416-31.503 21.416-51.678 0-20.173-7.139-37.401-21.416-51.678-14.272-14.275-31.496-21.414-51.674-21.414-20.177 0-37.401 7.139-51.676 21.414-14.274 14.277-21.413 31.501-21.413 51.678 0 20.179 7.139 37.403 21.413 51.678 14.275 14.272 31.499 21.411 51.676 21.411zM196.569 278.519c21.413 21.406 47.248 32.114 77.516 32.114 30.269 0 56.103-10.708 77.515-32.114 21.409-21.42 32.117-47.258 32.117-77.52 0-30.264-10.708-56.101-32.117-77.515-21.412-21.414-47.246-32.121-77.515-32.121-30.268 0-56.105 10.709-77.516 32.121-21.411 21.411-32.12 47.248-32.12 77.515s10.709 56.103 32.12 77.52zM438.543 164.452c20.17 0 37.397-7.135 51.671-21.411 14.274-14.275 21.409-31.503 21.409-51.678 0-20.173-7.135-37.401-21.409-51.678-14.273-14.275-31.501-21.414-51.671-21.414-20.184 0-37.407 7.139-51.682 21.414-14.271 14.277-21.409 31.501-21.409 51.678 0 20.179 7.139 37.403 21.409 51.678 14.275 14.272 31.498 21.411 51.682 21.411zM512.763 164.456c-1.136 0-5.276 1.999-12.415 5.996-7.132 3.999-16.416 8.044-27.833 12.137-11.416 4.089-22.747 6.136-33.972 6.136-12.758 0-25.406-2.187-37.973-6.567.945 7.039 1.424 13.322 1.424 18.842 0 26.457-7.71 50.819-23.134 73.089 30.841.955 56.056 13.134 75.668 36.552h38.256c15.605 0 28.739-3.863 39.396-11.57 10.657-7.703 15.989-18.986 15.989-33.83.003-67.194-11.793-100.789-35.406-100.785z"/><path d="M470.096 395.284c-1.999-11.136-4.524-21.464-7.57-30.978-3.046-9.521-7.139-18.794-12.271-27.836-5.141-9.034-11.044-16.748-17.706-23.127-6.667-6.379-14.805-11.464-24.414-15.276-9.609-3.806-20.225-5.708-31.833-5.708-1.906 0-5.996 2.047-12.278 6.14a3489 3489 0 0 0-20.841 13.702c-7.615 5.037-17.789 9.609-30.55 13.702-12.762 4.093-25.608 6.14-38.544 6.14-12.941 0-25.791-2.047-38.544-6.14-12.756-4.093-22.936-8.665-30.55-13.702a3554.86 3554.86 0 0 0-20.841-13.702c-6.283-4.093-10.373-6.14-12.279-6.14-11.609 0-22.22 1.902-31.833 5.708-9.613 3.812-17.749 8.897-24.41 15.276-6.667 6.372-12.562 14.093-17.705 23.127-5.137 9.042-9.229 18.315-12.275 27.836-3.045 9.514-5.564 19.842-7.566 30.978-2 11.136-3.331 21.505-3.997 31.121a427.043 427.043 0 0 0-.999 29.554c0 22.836 6.945 40.874 20.839 54.098 13.899 13.223 32.363 19.842 55.389 19.842h249.535c23.028 0 41.49-6.619 55.392-19.842 13.894-13.224 20.841-31.262 20.841-54.098 0-10.088-.335-19.938-.992-29.554-.676-9.616-2.007-19.986-3.998-31.121zM169.303 274.088c-15.418-22.27-23.125-46.632-23.122-73.089 0-5.52.477-11.799 1.427-18.842-12.564 4.377-25.221 6.567-37.974 6.567-11.23 0-22.552-2.046-33.974-6.136-11.417-4.093-20.699-8.138-27.834-12.137-7.138-3.997-11.281-5.996-12.422-5.996C11.801 164.456 0 198.051 0 265.24c0 14.844 5.33 26.127 15.987 33.83 10.66 7.707 23.794 11.563 39.397 11.563h38.26c19.607-23.411 44.823-35.591 75.659-36.545z"/></g></svg>'},
              {
                description: {html:'Лучший проект 2014 и 2015 года всероссийской программы «Ты&nbsp;—&nbsp;пред­при­ни­ма­тель»'},
                img: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 475.084 475.084"><path d="M467.087 99.355c-5.328-5.327-11.797-7.993-19.411-7.993h-82.228V63.955c0-12.562-4.466-23.313-13.415-32.261-8.945-8.945-19.704-13.417-32.264-13.417H155.318c-12.562 0-23.318 4.471-32.264 13.417-8.947 8.947-13.418 19.698-13.418 32.261v27.408H27.408c-7.612 0-14.083 2.663-19.414 7.993S0 111.158 0 118.772v36.544c0 13.512 3.949 27.122 11.849 40.828 7.898 13.703 18.555 26.079 31.977 37.114 13.417 11.04 29.881 20.32 49.392 27.839 19.512 7.519 40.019 11.755 61.529 12.703 7.996 10.284 17.034 19.321 27.122 27.121 7.235 6.471 12.228 13.366 14.989 20.704 2.758 7.323 4.138 15.841 4.138 25.55 0 10.28-2.9 18.938-8.708 25.974-5.802 7.05-15.082 10.568-27.834 10.568-14.277 0-26.98 4.332-38.116 12.99-11.134 8.665-16.702 19.561-16.702 32.695v18.268c0 2.669.855 4.859 2.568 6.57 1.714 1.711 3.901 2.566 6.567 2.566h237.544c2.67 0 4.853-.855 6.571-2.566 1.704-1.711 2.56-3.901 2.56-6.57v-18.268c0-13.135-5.564-24.027-16.707-32.695-11.136-8.658-23.839-12.99-38.116-12.99-12.748 0-22.032-3.519-27.829-10.568-5.804-7.036-8.699-15.693-8.699-25.974 0-9.713 1.376-18.227 4.134-25.55 2.766-7.338 7.762-14.229 14.989-20.704 10.089-7.803 19.13-16.845 27.117-27.121 21.519-.948 42.021-5.185 61.537-12.703 19.503-7.519 35.974-16.799 49.389-27.839 13.422-11.039 24.079-23.411 31.977-37.114 7.898-13.706 11.848-27.315 11.848-40.828v-36.544c-.004-7.61-2.67-14.084-7.999-19.417zM63.525 201.565c-17.987-15.987-26.979-31.405-26.979-46.252v-27.408h73.089c0 39.784 7.04 75.09 21.126 105.924-26.834-5.518-49.247-16.277-67.236-32.264zm375.011-46.249c0 14.847-8.986 30.269-26.973 46.255-17.994 15.987-40.406 26.743-67.239 32.261 14.086-30.833 21.125-66.14 21.125-105.924h73.087v27.408z" fill="#5397cb"/></svg>'
              },
            ]
          },
          {
            block: 'page',
            elem: 'hr',
            elemMods: {size: 'md'}
          },
          {
            block: 'page',
            elem: 'content',
            elemMods: {view: 'narrow'},
            content: {
              html: '<p>Nevatrip - это сайт экс&shy;кур&shy;сий в Пе&shy;тер&shy;бур&shy;ге. Мы пред&shy;ла&shy;га&shy;ем луч&shy;шие вод&shy;ные про&shy;гул&shy;ки по Пе&shy;тер&shy;бур&shy;гу, са&shy;мые ин&shy;те&shy;рес&shy;ные марш&shy;ру&shy;ты экс&shy;кур&shy;сий на теп&shy;ло&shy;хо&shy;де от из&shy;вест&shy;ных теп&shy;ло&shy;ход&shy;ных ком&shy;па&shy;ний по дей&shy;стви&shy;тель&shy;но луч&shy;шим це&shy;нам. На&shy;ши це&shy;ны на экс&shy;кур&shy;сии по ре&shy;кам и ка&shy;на&shy;лам Пе&shy;тер&shy;бур&shy;га &ndash; са&shy;мые вы&shy;год&shy;ные не толь&shy;ко по срав&shy;не&shy;нию с це&shy;ной на при&shy;ча&shy;лах, но и в ин&shy;тер&shy;не&shy;те. Мы с удо&shy;воль&shy;стви&shy;ем де&shy;ла&shy;ем скид&shy;ки го&shy;стям и жи&shy;те&shy;лям пре&shy;крас&shy;но&shy;го го&shy;ро&shy;да!<br /> <br /> Под&shy;держ&shy;ка 24/7 и мак&shy;си&shy;маль&shy;ная кли&shy;ен&shy;то&shy;ори&shy;ен&shy;ти&shy;ро&shy;ван&shy;ность - это то, что мы пред&shy;ла&shy;га&shy;ем на&shy;шим бу&shy;ду&shy;щим и дей&shy;ству&shy;ю&shy;щим кли&shy;ен&shy;там и то, чем мы гор&shy;дим&shy;ся.</p><p>За&shy;ка&shy;зать экс&shy;кур&shy;сию в Пе&shy;тер&shy;бур&shy;ге очень лег&shy;ко и удоб&shy;но, мы пред&shy;ла&shy;га&shy;ем вам ку&shy;пить би&shy;лет он&shy;лайн на на&shy;шем сай&shy;те. Вам не при&shy;дет&shy;ся сто&shy;ять в оче&shy;ре&shy;ди и ждать, все&shy;го несколь&shy;ко ми&shy;нут, и ва&shy;ше ме&shy;сто на экс&shy;кур&shy;сии на теп&shy;ло&shy;хо&shy;де бу&shy;дет за&shy;бро&shy;ни&shy;ро&shy;ва&shy;но.</p><p>Толь&shy;ко по&shy;ку&shy;пая би&shy;лет на на&shy;шем сай&shy;те, вам не при&shy;дет&shy;ся фик&shy;си&shy;ро&shy;вать вре&shy;мя от&shy;прав&shy;ле&shy;ния. Для боль&shy;шин&shy;ства днев&shy;ных экс&shy;кур&shy;сий вы про&shy;сто вы&shy;бе&shy;ре&shy;те удоб&shy;ное вре&shy;мя уже в день теп&shy;ло&shy;ход&shy;ной про&shy;гул&shy;ки, что осо&shy;бен&shy;но ак&shy;ту&shy;аль&shy;но для Пе&shy;тер&shy;бур&shy;га с его пе&shy;ре&shy;мен&shy;чи&shy;вой по&shy;го&shy;дой.</p><p>На&shy;чи&shy;на&shy;ют свою ра&shy;бо&shy;ту экс&shy;кур&shy;сии в Пе&shy;тер&shy;бур&shy;ге в мае, а уже в бе&shy;лые но&shy;чи в июне би&shy;ле&shy;ты на про&shy;гул&shy;ку бы&shy;ва&shy;ет не так про&shy;сто ку&shy;пить. По&shy;это&shy;му наш офи&shy;ци&shy;аль&shy;ный сайт экс&shy;кур&shy;сий в Санкт-Пе&shy;тер&shy;бур&shy;ге поз&shy;во&shy;ля&shy;ет при&shy;об&shy;ре&shy;сти их за&shy;ра&shy;нее и на&shy;сла&shy;ждать&shy;ся сво&shy;им от&shy;ды&shy;хом.</p><p>&nbsp;</p><p>На&shy;ша ком&shy;па&shy;ния пред&shy;ла&shy;га&shy;ет вам не про&shy;сто би&shy;ле&shy;ты на са&shy;мые увле&shy;ка&shy;тель&shy;ные про&shy;гул&shy;ки по ка&shy;на&shy;лам и ре&shy;кам Пе&shy;тер&shy;бур&shy;га и его окрест&shy;но&shy;стям. Вод&shy;ные экс&shy;кур&shy;сии по пре&shy;крас&shy;ной Се&shy;вер&shy;ной сто&shy;ли&shy;це - это уни&shy;каль&shy;ная воз&shy;мож&shy;ность уви&shy;деть Пе&shy;тер&shy;бург с во&shy;ды, та&shy;кая про&shy;гул&shy;ка по&shy;да&shy;рит вам неза&shy;бы&shy;ва&shy;е&shy;мые впе&shy;чат&shy;ле&shy;ния, ко&shy;то&shy;рые оста&shy;нут&shy;ся с ва&shy;ми на&shy;дол&shy;го. С на&shy;ми вы мо&shy;же&shy;те от&shy;пра&shy;вить&shy;ся на теп&shy;ло&shy;ход&shy;ную экс&shy;кур&shy;сию по ре&shy;кам и ка&shy;на&shy;лам Пе&shy;тер&shy;бур&shy;га, по Неве, по&shy;се&shy;тить Пе&shy;тер&shy;гоф и кре&shy;пость &laquo;Оре&shy;шек&raquo; и про&shy;гу&shy;лять&shy;ся по слав&shy;но&shy;му го&shy;ро&shy;ду-ге&shy;рою Крон&shy;штад&shy;ту.</p><p>Вод&shy;ные про&shy;гул&shy;ки от&shy;кро&shy;ют для вас уди&shy;ви&shy;тель&shy;ные па&shy;мят&shy;ни&shy;ки ис&shy;то&shy;рии и ар&shy;хи&shy;тек&shy;ту&shy;ры с но&shy;вой сто&shy;ро&shy;ны. Вод&shy;ные экс&shy;кур&shy;сии поз&shy;во&shy;лят узнать но&shy;вые фак&shy;ты о Кунст&shy;ка&shy;ме&shy;ре, Зим&shy;нем двор&shy;це, Ми&shy;хай&shy;лов&shy;ском зам&shy;ке, крей&shy;се&shy;ре &laquo;Ав&shy;ро&shy;ра&raquo; и дру&shy;гих до&shy;сто&shy;при&shy;ме&shy;ча&shy;тель&shy;но&shy;стях Пи&shy;те&shy;ра. Та&shy;кие про&shy;гул&shy;ки бу&shy;дут ин&shy;те&shy;рес&shy;ны как го&shy;стям Пе&shy;тер&shy;бур&shy;га, так и тем, кто жи&shy;вет здесь дав&shy;но, но хо&shy;чет узнать что-то но&shy;вое о род&shy;ном го&shy;ро&shy;де. Реч&shy;ные про&shy;гул&shy;ки предо&shy;ста&shy;вят воз&shy;мож&shy;ность уви&shy;деть го&shy;род с но&shy;во&shy;го ра&shy;кур&shy;са, ви&shy;ды Пе&shy;тер&shy;бур&shy;га с во&shy;ды ни&shy;ко&shy;го не оста&shy;вят рав&shy;но&shy;душ&shy;ным.&nbsp;</p><p>Вод&shy;ные про&shy;гул&shy;ки в Пе&shy;тер&shy;бур&shy;ге за&shy;ин&shy;те&shy;ре&shy;су&shy;ют не толь&shy;ко го&shy;стей го&shy;ро&shy;да, но и его жи&shy;те&shy;лей, неза&shy;бы&shy;ва&shy;е&shy;мым бу&shy;дет ве&shy;чер на теп&shy;ло&shy;хо&shy;де в ком&shy;па&shy;нии с близ&shy;ким че&shy;ло&shy;ве&shy;ком. Об&shy;ра&shy;ти&shy;те вни&shy;ма&shy;ние на ро&shy;ман&shy;ти&shy;че&shy;ский джа&shy;зо&shy;вый теп&shy;ло&shy;ход и экс&shy;кур&shy;сию под раз&shy;вод мо&shy;стов. Оце&shy;нят экс&shy;кур&shy;сию по ре&shy;кам и ка&shy;на&shy;лам СПб и де&shy;ти, по&shy;это&shy;му ча&shy;сто к нам об&shy;ра&shy;ща&shy;ют&shy;ся шко&shy;лы и дру&shy;гие об&shy;ра&shy;зо&shy;ва&shy;тель&shy;ные учре&shy;жде&shy;ния, ведь во вре&shy;мя та&shy;ких пу&shy;те&shy;ше&shy;ствий быст&shy;рее усва&shy;и&shy;ва&shy;ют&shy;ся но&shy;вые зна&shy;ния.</p>ля то&shy;го чтобы экс&shy;кур&shy;сии по ре&shy;кам и ка&shy;на&shy;лам Санкт-Пе&shy;тер&shy;бур&shy;га про&shy;хо&shy;ди&shy;ли в ком&shy;форт&shy;ной об&shy;ста&shy;нов&shy;ке, все ко&shy;раб&shy;ли&shy;ки по Неве осна&shy;ще&shy;ны по по&shy;след&shy;не&shy;му сло&shy;ву тех&shy;ни&shy;ки. Во вре&shy;мя вод&shy;ных экс&shy;кур&shy;сий по Пе&shy;тер&shy;бур&shy;гу из окон ком&shy;фор&shy;та&shy;бель&shy;но&shy;го са&shy;ло&shy;на от&shy;кро&shy;ет&shy;ся пре&shy;крас&shy;ный вид на пей&shy;за&shy;жи Пе&shy;тер&shy;бур&shy;га с во&shy;ды, а по&shy;ка вы бу&shy;де&shy;те на&shy;блю&shy;дать за ни&shy;ми, экс&shy;кур&shy;со&shy;вод бу&shy;дет рас&shy;ска&shy;зы&shy;вать ин&shy;те&shy;рес&shy;ные фак&shy;ты об ис&shy;то&shy;рии го&shy;ро&shy;да. Во вре&shy;мя дли&shy;тель&shy;ных реч&shy;ных про&shy;гу&shy;лок мож&shy;но пе&shy;ре&shy;ку&shy;сить в ба&shy;ре. Так&shy;же на неко&shy;то&shy;рых экс&shy;кур&shy;си&shy;ях ра&shy;бо&shy;та&shy;ет ре&shy;сто&shy;ран.</p><p>&nbsp;</p><p>Ес&shy;ли вы при&shy;е&shy;ха&shy;ли в го&shy;род впер&shy;вые, то мы ре&shy;ко&shy;мен&shy;ду&shy;ем вам обя&shy;за&shy;тель&shy;но по&shy;се&shy;тить экс&shy;кур&shy;сию по ка&shy;на&shy;лам Санкт-Пе&shy;тер&shy;бур&shy;га, на ко&shy;то&shy;рой го&shy;род по&shy;ка&shy;жет&shy;ся вам с са&shy;мо&shy;го луч&shy;ше&shy;го ра&shy;кур&shy;са. От&shy;ды&shy;хай&shy;те увле&shy;ка&shy;тель&shy;но и с ком&shy;фор&shy;том с на&shy;шим сай&shy;том экс&shy;кур&shy;сий по Санкт-Пе&shy;тер&shy;бур&shy;гу.</p><p>Мы успеш&shy;но раз&shy;ви&shy;ва&shy;ем&shy;ся не толь&shy;ко в Санкт-Пе&shy;тер&shy;бур&shy;ге, но и в Москве. С 2016 го&shy;да мы ра&shy;бо&shy;та&shy;ем в Москве под ре&shy;гио&shy;наль&shy;ным брен&shy;дом &laquo;<a href="https://moskvatrip.ru/">MoskvaTrip</a>&raquo; - луч&shy;шие про&shy;гул&shy;ки по Москве ре&shy;ке на теп&shy;ло&shy;хо&shy;де. Так же мы за&shy;пу&shy;сти&shy;ли сов&shy;мест&shy;ный парт&shy;нер&shy;ский про&shy;ект по ав&shy;то&shy;бус&shy;ны&shy;ми экс&shy;кур&shy;си&shy;ям с ком&shy;па&shy;ни&shy;ей&nbsp;&laquo;<a href="https://busguide.ru/">BusGuide</a>&raquo;.</p><p>ООО "Центр ор&shy;га&shy;ни&shy;за&shy;ции и про&shy;дви&shy;же&shy;ния со&shy;бы&shy;тий "Про Со&shy;бы&shy;тие", ИНН 7802873242, КПП 780201001, ОГРН 1147847350133. г. Санкт-Пе&shy;тер&shy;бург, ул. Ма&shy;лая Мор&shy;ская 11</p>'
            }
          },
          {
            block: 'page',
            elem: 'hr',
            elemMods: {size: 'md'}
          },
        ]
      },
    ];
  }),
);

