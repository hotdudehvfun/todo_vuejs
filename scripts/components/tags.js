Vue.component('tags',
{
    props:['tags'],
    data: function ()
    {
        return {
            states:[],
        }
    },
    methods:
    {
        get_theme:function(theme)
        {
            // console.log(this.$parent.themes[theme])
            return this.$parent.themes[theme][0]
        },
        handle_click:function(item)
        {
            app.tag_in_focus=item;
            console.log(app.tag_in_focus)
            app.view_what='tasks'
            app.title=item.title
            app.icon=item.icon
            //transition animation
            app.tags_holder_translate_class="-translate-x-full"
            app.tags_holder_scale_class="scale-50"
            app.tasks_holder_translate_class="-translate-x-full"
        },
        get_task_count:function(tag)
        {
            let count=0
            this.$parent.task_array.forEach(task =>
            {
                count+=task.tags.filter(x => x==tag).length;
                
            });
            // console.log(count)
            return count;
        }
    },
    template:`
                <div class='flex flex-col p-4 gap-2'>
                    
                    <div v-if='tags.length==0' class='flex flex-col items-center'>
                        <svg class='w-32' viewBox="0 0 240 285" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="17" y="47" width="206" height="238" rx="65" fill="#F0F0F0"/><rect x="102" y="171" width="53" height="13" rx="6.5" fill="#CACACA"/><rect y="47" width="240" height="33" rx="12" fill="#CACACA"/><rect x="38" width="164" height="64" rx="12" fill="#CACACA"/><rect x="53" y="96" width="43" height="16" rx="8" fill="#CACACA"/><rect x="152" y="96" width="43" height="16" rx="8" fill="#CACACA"/></svg>
                        <div class='text-gray-400'>You have not created any List </div>
                    </div>
                    
                    
                    <div
                    v-on:click="handle_click(item)" 
                    v-for='(item,index) in tags'
                    :key='index'
                    :class="[get_theme(item.theme)]"
                    class="rounded flex items-center gap-2 p-2">
                        <span class="material-icons">
                                {{item.icon}}
                        </span>    
                        <span 
                            class='capitalize w-full p-2'>{{item.title}}
                        </span>
                        <span
                        class='rounded-full p-2 text-sm'>
                            {{get_task_count(item.title)}}
                        </span>
                    </div>
                    
                </div>
    `
})