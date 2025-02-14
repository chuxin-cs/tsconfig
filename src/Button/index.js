import Button from "./index.vue";

Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

if (typeof window !== 'undefined' && window.Vue) {
  Button.install(window.Vue);
}

export { Button }
export default Button;