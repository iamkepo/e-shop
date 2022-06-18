const sayHello = () => {
    if (window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        const args = ['\n %c Made with ❤️ by e-shop 🚀 %c http://e-shop.github.io/ \n', 'border: 1px solid #000;color: #fff; background: #171717; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;'];
        window.console.log.apply(console, args);
    }
    else if (window.console) {
        window.console.log('Made with love ❤️ by e-shop 🚀 - http://e-shop.github.io/');
    }
};

export default sayHello;
