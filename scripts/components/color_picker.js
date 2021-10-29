Vue.component('color_picker',
{
    props:[],
    data: function ()
    {
        return {
            selected_theme:'blue',
        }
    },
    methods:
    {
        set_theme:function(index)
        {
            // console.log(index)
            //use index only not the value
            this.selected_theme = index
            this.$parent.tag_theme = this.selected_theme
            // console.log(this.selected_theme)
        },
        selected:function(index)
        {
            if(index==this.selected_theme)
                return "border border-black"
        }
    },
    computed:
    {
        get_themes:function()
        {
            return app.themes;
        }
    },
    template:`
                <div class='flex flex-col p-2'>
                    <div 
                    class='flex p-2 gap-y-4 justify-around bg-white rounded-xl shadow-md'>
                        <div
                        v-for='(theme,index) in get_themes'
                        v-on:click="set_theme(index)"
                        v-bind:class=[theme[1],selected(index)]
                        class='w-8 h-8 rounded-full p-4'>
                        </div>
                    </div>
                </div>
    `
})