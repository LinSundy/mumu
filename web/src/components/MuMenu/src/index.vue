<template>
    <div class="leftContainer" :style="{height: ulHeight + 'px'}">
        <ul class="nav">
            <li v-for="(item, index) of lists" :key="index">
                <a :href="item.path">
                    <i :class="`iconfont icon-${item.icon}`"></i>
                    {{item.name}}
                </a>
            </li>
        </ul>
        <!--此处写的是跳转小图标-->
        <icons/>
    </div>
</template>

<script>
import * as api from '../api/index';
import icons from '../components/icons';
//  引入mock
if (process.env.NODE_ENV === 'development') {
    require('../mock');
}
export default {
    name: 'MuMenu',
    components: {
        icons
    },
    data() {
        return {
            lists: [] // 菜单数据
        };
    },
    methods: {
        getData() {
            api.leftNavs().then(res => {
                this.lists = res.data;
            });
        }
    },
    updated() {
        console.log(this.ulHeight);
    },
    computed: {
        ulHeight() {
            let height = window.innerHeight;
            return height;
        }
    },
    mounted() {
        this.getData();
    }
};
</script>

<style scoped lang="less">
@import './index.less';
</style>
