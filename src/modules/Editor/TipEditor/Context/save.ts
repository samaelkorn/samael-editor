export const save = () => {
    const store = localStorage.getItem('saveHtml')
    return store ?? ''
}