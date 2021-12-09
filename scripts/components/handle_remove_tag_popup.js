Vue.component('handle_remove_tag_popup',
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
            this.$parent.show_handle_remove_tag_popup = false;
        },
        delete_list:function()
        {
            console.log("delete",this.$parent.tag_in_focus)
            let pos = this.$parent.tag_array.indexOf(this.$parent.tag_in_focus)
            this.$parent.tag_array.splice(pos,1)
            this.$parent.show_handle_remove_tag_popup = false;
            //also remove all 

        },
        hide:function()
        {
            console.log("hide",this.$parent.tag_in_focus)
        },
        
    },
    template:`
            <div 
            v-if='visible'
            class="w-90% ml-5% absolute flex flex-col bottom-0 bg-gray-100 rounded shadow-xl">
            
            <div class="p-4">
                Are you sure you want to delete this List?
            </div>
            
            <div class="flex flex-col p-2 gap-2">
                <span
                v-on:click='delete_list'
                class="flex cursor-pointer bg-red-50 rounded-full p-2 text-red-500 bold items-center">
                <span class="material-icons">delete</span>  
                Yes, Delete List Permanently!
                </span>
                
                <span
                v-on:click='hide'
                class="flex cursor-pointer bg-blue-50 rounded-full p-2 text-blue-500 bold items-center">
                <span class="material-icons">description</span>  
                No, Hide this List
                </span>
                
                <span
                v-on:click='cancel'
                class="flex cursor-pointer bg-green-50 rounded-full p-2 text-green-500 bold items-center">
                <span class="material-icons">cancel</span>  
                Cancel
                </span>
            </div>
            </div>
    `
})