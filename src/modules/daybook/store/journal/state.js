//se aplica la funcion, para que el objeto que esta dentro sea reactivo
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), //fecha actual
            date: new Date().toDateString(), //sat 23, julio
            text: "Aliqua dolore aute sunt labore eiusmod.Aliqua dolore aute sunt labore eiusmod.Aliqua dolore aute sunt labore eiusmod.",
            picture: null, //https://www.picture.com
        },
        {
            id: new Date().getTime() + 1000, //fecha actual
            date: new Date().toDateString(), //sat 23, julio
            text: "Consectetur id non officia aliquip. Commodo nulla magna dolore voluptate cillum ad deserunt eu laborum. Dolor laboris aliqua esse quis elit reprehenderit. Reprehenderit exercitation cillum consequat officia aute excepteur eiusmod occaecat reprehenderit ipsum proident do.",
            picture: null, //https://www.picture.com
        },
        {
            id: new Date().getTime() + 2000, //fecha actual
            date: new Date().toDateString(), //sat 23, julio
            text: "Mollit duis dolore pariatur consectetur ea cillum. Cupidatat eiusmod anim ea mollit commodo fugiat. Dolore aliquip quis nulla quis consequat cupidatat. Et veniam enim excepteur duis qui aliquip ea consectetur reprehenderit labore enim incididunt. Dolore ea cillum cillum consequat nostrud velit elit. Id amet deserunt mollit aliqua ullamco nostrud sint ex.",
            picture: null, //https://www.picture.com
        },
    ],
});
