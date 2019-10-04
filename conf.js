exports.config = {
    seleniumAddress : 'http://localhost:4444/wd/hub/',
    specs : ['spec1.js'],

    //If you want to execute on more than 1 browser then do below setting in conf.js filem
    multiCapabilities:[{
        broswerName:'firefox'
    },
    {
        browserName:'chrome'
}]
};