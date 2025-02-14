import Input from "./index.vue";

Input.install = (Vue) => {
  Vue.component(Input.name, Input);
};

export { Input }
export default Input;