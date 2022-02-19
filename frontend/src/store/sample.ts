import { ActionContext } from 'vuex';

interface State {}

const state: State = {};

const sample = {
    namespaced: true,
    state: state,
    getters: {},
    mutations: {
        set(state: State, payload: Object) {
            const keys = Object.keys(payload);
            const stateKeys = Object.keys(state);
            keys.map((key, index) => {
                if (!stateKeys.includes(key)) {
                    console.error('payload is not part of state');
                }
            });
            Object.assign(state, payload);
        },
    },
    actions: {
        set(context: ActionContext<any, any>, payload: Object) {
            context.commit('set', payload);
        },
    },
};

export default sample;