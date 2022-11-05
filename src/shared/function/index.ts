import { regex } from "../regex"

const debounce = (func: Function, delay: any) => {
    let debounceTimer: any
    return function () {
        // @ts-ignore
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => func.apply(context, args), delay)
    }
}
const autoTrimDebounceInput = debounce(
    async ({ formInstance, name, value }: any) => {
        if (value && regex.space_full.test(value) && formInstance) {
            formInstance.setFieldsValue({
                [name]: value.trim()
            })
            return
        }

        if (value && regex.space_top_or_end.test(value) && formInstance) {
            formInstance.setFieldsValue({
                [name]: value.trim()
            })
            await formInstance
                .validateFields([name])
                .catch((e: any) => e.outOfDate)
        }
    },
    1000
)


export {
    autoTrimDebounceInput
}