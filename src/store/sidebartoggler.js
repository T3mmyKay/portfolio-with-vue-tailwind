import { ref } from 'vue'
import { createGlobalState } from '@vueuse/core'

export const useGlobalState = createGlobalState(
    () => {
        // state
        let isOpen = ref(false)


        //
        // actions
        function toggle() {
            return isOpen.value = !isOpen.value
        }

        return {isOpen, toggle}
    }
)