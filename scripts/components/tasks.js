Vue.component('tasks',
{
    props:['task_array','filter_tag'],
    data: function ()
    {
        return {
            selected_tasks:[],
        }
    },
    methods:
    {
        handle_change:function()
        {
            console.log(this.selected_tasks)
            app.selected_tasks=this.selected_tasks
        },
        check_class:function(id)
        {
            //console.log('running check class')
            return -1!=this.selected_tasks.indexOf(id);
        }
    },
    computed:{
        filter_array:function()
        {
            let that = this;
            if(that.filter_tag!=null)
            {
                return this.task_array.filter(function (task)
                {
                    // console.log(task.tags.indexOf(that.filter_tag.title))
                    return task.tags.indexOf(that.filter_tag.title) != -1;
                })
            }
            return []
        }
    },
    template:`
                <div class='flex flex-col p-4'>
                    
                    <div v-if='filter_array.length==0' class='flex flex-col items-center'>
                        <svg class='w-32' viewBox="0 0 240 285" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="17" y="47" width="206" height="238" rx="65" fill="#F0F0F0"/><rect x="102" y="171" width="53" height="13" rx="6.5" fill="#CACACA"/><rect y="47" width="240" height="33" rx="12" fill="#CACACA"/><rect x="38" width="164" height="64" rx="12" fill="#CACACA"/><rect x="53" y="96" width="43" height="16" rx="8" fill="#CACACA"/><rect x="152" y="96" width="43" height="16" rx="8" fill="#CACACA"/></svg>
                        <div class='text-gray-400'>No Tasks here </div>
                    </div>
                    
                    
                    <div 
                    v-for='(item,index) in filter_array'
                    :key='index'
                    class='flex items-center gap-2'>
                        <input v-on:change='handle_change' v-bind:value='item' v-model='selected_tasks' type='checkbox' />
                        <span
                        v-html="item.title" 
                        v-bind:class="{ 'line-through':check_class(item),'text-gray-500':check_class(item) }" 
                        class='w-full p-2 border-b'></span>
                    </div>

                </div>
    `
})