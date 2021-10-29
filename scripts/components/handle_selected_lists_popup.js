Vue.component('handle_selected_lists_popup',
{
    props:['visible'],
    data: function ()
    {
        return {
        }
    },
    methods:
    {
        
        cancel:function()
        {
            this.$parent.show_handle_selected_tasks_popup = false;
            this.$parent.selected_tasks=[]
        }
    },
    template:`
            <div 
            v-if='visible'
            class="w-90% ml-5% absolute flex flex-col bottom-0 bg-gray-100 rounded shadow-xl">
            
            <div class="p-4">
                What to do with {{this.$parent.selected_tasks.length}} selected task(s)?
            </div>
            
            <div class="flex flex-col p-2 gap-2">
                <span
                v-on:click=''
                class="flex cursor-pointer bg-red-50 rounded-full p-2 text-red-500 bold items-center">
                <span class="material-icons">delete</span>  
                Delete
                </span>
                
                <span
                v-on:click=''
                class="flex cursor-pointer bg-blue-50 rounded-full p-2 text-blue-500 bold items-center">
                <span class="material-icons">description</span>  
                Move to Other List
                </span>
                
                <span
                v-on:click='cancel'
                class="flex cursor-pointer bg-red-50 rounded-full p-2 text-red-500 bold items-center">
                <span class="material-icons">cancel</span>  
                Cancel
                </span>
            </div>
            </div>
    `
})