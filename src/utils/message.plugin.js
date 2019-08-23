export default {
  install(Vue, options) {
    Vue.prototype.$message = html => {
      M.toast({ html });
    };
  }
};
