import { definePinia } from "pinia";
const useCaseStore = definePinia("case", {
  state: () => {
    return {};
  },
  getters: {},
  actions: {},
});
export default useCaseStore;
