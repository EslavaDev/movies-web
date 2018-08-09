import { createStore } from 'redux';

/*Elementos DOM*/
const $form = document.getElementById('form');

/*Handle para el formulario*/
const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData($form);
    const title = data.get('title');
    console.log(title)
    store.dispatch({
        type: 'ADD_SONG',
        payload: {
            title
        }
    })
    document.getElementById('form').reset()

}


$form.addEventListener('submit', handleSubmit);

/*Valores iniciales*/
const initialState = [
    {
        "title": "Despacito",
    },
    {
        "title": "One more time",
    },
    {
        "title": "Echame la culpa"
    }
]

/*Nuestro reducer*/
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_SONG':
            return [...state, action.payload]
            break;

        default:
            return state
            break;
    }
}
/*Creación de nuestro Store*/
const store = createStore(
    /*     reducer,
        initialState,
        enhancer */
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

/*Funcion para mi render*/
const render = () => {
    /*Elementos DOM donde renderizamos todo*/
    const $container = document.getElementById('playlist');
    /*Asignación de nuestro Store */
    const playlist = store.getState();
    console.log(store.getState());
    $container.innerHTML = '';
/*Recorrer nuestra playlist*/
    playlist.forEach(element => {
        const template = document.createElement('p');
        template.textContent = element.title
        $container.appendChild(template)
    });
}

/*Funcion handleChange*/
const handleChange = () => {
    render()
}

/*Actualizacion de la aplicacion en cada cambio con Subscribe*/
store.subscribe(handleChange)

render()