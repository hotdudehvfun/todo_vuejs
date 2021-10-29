Vue.component('list_icon_picker',
{
    //theme is string based index blue red green
    props:['theme'],
    data: function ()
    {
        return {
            list_icons:[
                'calendar_today',
                'lightbulb',
                'view_list',
                'receipt',
                'sticky_note_2',
                'shopping_cart',


            ],
            current_icon:'calendar_today',
        }
    },
    methods:
    {
        set_icon:function(icon)
        {
            this.current_icon = icon
            // console.log(app.title)
            //list popup is parent of list icon picker
            this.$parent.tag_icon = this.current_icon
            console.log(this.theme)
        },
        get_theme:function()
        {
            //console.log(app.themes[this.theme][0])
            return app.themes[this.theme][0]
        },
        selected:function(icon_text)
        {
            if(icon_text == this.current_icon)
                return "border border-black"
        }
    },
    template:`
                <div class='flex flex-col p-2'>
                    
                    <div
                    v-bind:class=[get_theme()]
                    class='shadow-xl self-center flex items-center justify-center h-16 w-16 text-gray-500 rounded-full p-4'>
                        <span class="material-icons">
                            {{current_icon}}
                        </span>
                    </div>
                    
                    <div 
                    class='flex p-2 gap-y-4 justify-around bg-white rounded-xl mt-2 shadow-md'>
                    
                        <div
                        v-for='icon_text in list_icons'
                        v-on:click="set_icon(icon_text)"
                        v-bind:class=[selected(icon_text)]
                        class='flex items-center justify-center w-8 h-8 text-gray-500 rounded-full bg-gray-300 p-4'>
                            <span class="material-icons">
                                {{icon_text}}
                            </span>
                        </div>
                    </div>
                </div>
    `
})