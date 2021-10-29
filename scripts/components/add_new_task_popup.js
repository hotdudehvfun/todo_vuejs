Vue.component('add_new_task_popup',
    {
        props: ['visible'],
        data: function () {
            return {
                new_task_text:'',
            }
        },
        computed:
        {
            get_tag_title:function()
            {
                return this.$parent.tag_in_focus.title;
            },
            get_tag_icon:function()
            {
                return this.$parent.tag_in_focus.icon;
            },            
        },
        methods:
        {
            add_new_task: function ()
            {
                if (app.tag_in_focus != null && this.new_task_text.length > 0) {
                    let tag = app.tag_in_focus.title.toString()
                    let text = document.querySelector("#new_task_text")
                    let t = new Task(text.innerHTML.trim(), tag)
                    app.task_array.push(t)
                    app.save()
                    app.show_add_new_task_popup = false;
                }
            },
            close: function ()
            {
                this.$parent.show_add_new_task_popup = false;
            },
            handle_keypress_on_task_content:function()
            {
              let text=document.querySelector("#new_task_text")
              this.new_task_text=text.innerText;     
            },
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
        v-if='visible'
        class="w-full absolute flex flex-col bottom-0 bg-gray-100 rounded shadow-xl overflow-hidden p-2">

            <div 
            v-bind:class=[get_theme()]
            class='flex items-center p-2'>
                <span class="material-icons text-2xl">{{get_tag_icon}}</span>
                <div
                class='capitalize flex text-2xl font-bold  p-2'>
                    {{get_tag_title}}
                </div>
            </div>

            <div
            id='new_task_text'
            contenteditable="true"
            class="w-full p-2 rounded bg-white max-h-64 min-h-8 overflow-y-scroll overflow-x-hidden" 
            placeholder="Task content..."
            v-on:keypress="handle_keypress_on_task_content()"
            ></div>
        
            <div class="flex justify-between p-2">
                <span
                v-on:click='close'
                class="cursor-pointer bg-red-50 rounded-full p-2 text-red-500 bold">Cancel</span>
                <span
                v-if='new_task_text.length>0' 
                v-on:click='add_new_task'
                class="cursor-pointer bg-green-50 rounded-full p-2 text-green-500 bold">Done</span>
            </div>
        </div>
        `
    })