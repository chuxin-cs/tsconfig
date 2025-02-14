import Input from "./index.vue";

Input.install = (Vue) => {
  Vue.component(Input.name, Input);
};

if (typeof window !== 'undefined' && window.Vue) {
  Input.install(window.Vue);
}


export { Input }
export default Input;