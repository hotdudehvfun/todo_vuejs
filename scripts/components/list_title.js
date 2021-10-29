Vue.component('list_title',
{
    props:['text','icon'],
    data: function ()
    {
        return {
        }
    },
    methods:
    {
        get_theme:function()
        {
            if(this.$parent.view_what=='tasks')
            {
                return this.$parent.themes[this.$parent.tag_in_focus.theme][0]
            }
            return "text-blue-500"
        },
    },
    template:`
                <div 
                v-bind:class=[get_theme()]
                class='flex items-center p-2'>
                    <span class="material-icons text-2xl">{{icon}}</span>
                    <div
                    class='capitalize flex text-2xl font-bold  p-2 w-full'>
                        {{text}}
                    </div>
                </div>
    `
})