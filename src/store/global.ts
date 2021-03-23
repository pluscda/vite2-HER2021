//https://www.codementor.io/@diegopalacios/to-do-app-composition-api-as-an-alternative-to-vuex-1b4ms6887l
import { reactive,defineProps, ref, Ref} from "vue";

interface Order{
  id: string,
  name?: string,
  total: number,
}
const order = ref<Order>({id:"1", total:100});


const init = {
  count:999,
  order
};

export let state = reactive({...init});

export const actions = {
  async sayHi() {
    return "hi DTC"
  }

}


export const mutations = {
  
};

