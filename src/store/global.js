//https://www.codementor.io/@diegopalacios/to-do-app-composition-api-as-an-alternative-to-vuex-1b4ms6887l
import { reactive} from "vue";

const init = {
  count:999,
};

export let state = reactive({...init});

export const actions = {
  async sayHi() {
    return "hi DTC"
  }

}


export const mutations = {
  
};

