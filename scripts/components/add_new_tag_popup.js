Vue.component('add_new_tag_popup',
{
    props:['visible'],
    data: function ()
    {
        return {
            tag_title:'',
            tag_theme:'blue',
            tag_icon:'calendar_today',
            
        }
    },
    methods:
    {
        add_new_tag:function()
        {
            if(this.tag_title.length!=0)
            {
                let tag = new Tags(this.tag_title,this.tag_theme,this.tag_icon)
                app.tag_array.push(tag)
                this.$parent.show_add_new_tag_popup = false;
                this.tag_title=''
                app.save();
            }
        },
        close:function()
        {
            this.$parent.show_add_new_tag_popup = false;
        }

    },
    template:`
                <div 
                v-if='visible'
                class="w-full absolute flex flex-col bottom-0 bg-gray-100 rounded shadow-xl">

                <!-- list icon picker -->
                <list_icon_picker v-bind:theme='tag_theme'></list_icon_picker>
                <!-- color picker -->
                <color_picker></color_picker>
                
                <div class="p-4">
                    <input 
                    class="text-xl w-full p-2 rounded-xl text-center" 
                    type="text" 
                    placeholder="List name..."
                    v-model='tag_title'
                    v-on:keypress.13='add_new_tag'
                    />
                </div>

                
                
                <div class="flex justify-between p-2">
                    <span
                    v-on:click='close'
                    class="cursor-pointer bg-red-50 rounded-full p-2 text-red-500 bold">Cancel</span>
                    <span
                    v-if='tag_title.length>0' 
                    v-on:click='add_new_tag' 
                    class="cursor-pointer bg-green-50 rounded-full p-2 text-green-500 bold">Done</span>
                </div>
                </div>


    `
})