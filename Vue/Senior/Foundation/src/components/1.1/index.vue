<template>
    <div>
        <a-tabs>
            <a-tab-pane tab="属性" key="props">
                <Props 
                    name="Hello Vue! "
                    :type="type"
                    :is-visible="false"
                    :on-change="handlePropChange"
                    title="属性Demo"
                    class="test1"
                    :style="{marginTop: '20px'}"
                    style="margin-top: 10px"
                />
            </a-tab-pane>

            <a-tab-pane tab="事件">
            </a-tab-pane>

            <a-tab-pane tab="插槽">
            </a-tab-pane>

            <a-tab-pane tab="大属性">
            </a-tab-pane>
        </a-tabs>
    </div>
</template>


<script>
import Props from "./Props"
export default {
    components: {
        Props,
    },
    data: ()=> {
        return {
            name: "",
            type: "success", 
            bigPropsName: "Hello world!"
        };
    },

    methods: {
        handlePropChange(val) {
            this.type = val;
        },
    }
}
</script>

