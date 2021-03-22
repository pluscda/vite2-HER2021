import { reactive} from "vue";

const init = {
  count:999,
};

export const state = reactive({...init});

export const actions = {
  async sayHi() {
    return "hi"
  }

}


export const mutations = {
  
};

