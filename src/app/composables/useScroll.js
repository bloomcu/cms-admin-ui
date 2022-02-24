const scrollToElement = function (elementId) {
    document.getElementById(elementId).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
}

export {
    scrollToElement
}
