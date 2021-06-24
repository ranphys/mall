import BackTop from '@/components/content/backtop/BackTop'

export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0)
        }
    }
}