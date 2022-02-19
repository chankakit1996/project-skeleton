import { count } from 'console';
import { ActionContext } from 'vuex';

interface State {
    count: number;
}

const state: State = {
    count: 0,
};

const loading = {
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
        addCount(state: State) {
            state.count++;
        },
        minusCount(state: State) {
            state.count--;
        },
    },
    actions: {
        set(context: ActionContext<any, any>, payload: Object) {
            context.commit('set', payload);
        },
        async load(context: ActionContext<any, any>, func: () => void) {
            context.commit('addCount');
            await func();
            context.commit('minusCount');
        },
    },
};

export default loading;
