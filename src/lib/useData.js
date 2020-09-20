import { initStorage } from './storage'
import { onBeforeMount } from 'vue';

const storage = initStorage();

export function useData(data, key) {

  const loadData = () => {
    const storageData = storage.get(key)
    if (storageData) {
      data.value = storageData;
    }
  }
  onBeforeMount(() => {
    loadData();
  })

  const save = (value) => {
    storage.set(key, value);
  }

  return {
    save,
  }
}