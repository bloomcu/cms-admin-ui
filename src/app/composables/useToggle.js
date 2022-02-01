import { ref, computed } from '@vue/composition-api'

export default function useToggle() {
    const toggled = ref()

    function toggle(item) {
        item == toggled.value ? toggled.value = '' : toggled.value = item
    }

    return {
        toggled: computed(() => toggled.value),
        toggle
    }
}
