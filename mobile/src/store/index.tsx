import { createStore } from 'redux';

function reducer() {
    return { name: 'Gabriel Tsunoda' };
}

const store = createStore(reducer);

export default store;