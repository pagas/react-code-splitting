export const delay = () => {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    })
}
