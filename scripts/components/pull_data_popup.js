Vue.component('pull_data_popup',
{
    props:['visible'],
    data: function ()
    {
        return {
            tags:[],
            tasks:[],
            selected_tags:[],
            raw_path:"https://raw.githubusercontent.com/hotdudehvfun/todo_vuejs/main/scripts/todo_data"
        }
    },
    mounted:function()
    {
        let tags_url=this.raw_path+'/all_tags.json'
        let that=this;
        fetch(tags_url)
            .then(response => response.json())
            .then((data)=>
                {
                   // console.log(data)
                    that.tags=data
                });
        let tasks_url=this.raw_path+"/all_tasks.json"
        fetch(tasks_url)
        .then(response => response.json())
        .then((data)=>
            {
                //console.log(data)
                that.tasks=data
            });
    },
    methods:
    {
        close:function()
        {
            this.$parent.show_pull_data_popup = false;
            this.selected_tags=[]
        },
        get_theme:function(theme)
        {
            // console.log(this.$parent.themes[theme])
            return this.$parent.themes[theme][0]
        },
        get_task_count:function(tag)
        {
            let count=0
            this.tasks.forEach(task =>
            {
                count+=task.tags.filter(x => x==tag).length;
            });
            // console.log(count)
            return count;
        },
        tag_already_exists:function(title)
        {
            for (let i = 0; i < app.tag_array.length; i++)
            {
                const item = app.tag_array[i];    
                if(item.title.trim().toLocaleLowerCase()==title.trim().toLocaleLowerCase())
                {
                    return true    
                }
            }
            return false
        },
        download:function()
        {
            //selected tags will be saved in local storage
            //if tag conflict > append tasks at end
            // console.log(app.tag_array)
            let that=this
            let tags_added=[]
            this.selected_tags.forEach((tag)=>
            {
                if(!that.tag_already_exists(tag.title))
                {
                    let tag_obj=new Tags(tag.title,tag.theme,tag.icon)
                    app.tag_array.push(tag_obj)
                }
                //whether tag already exists or not push it if selected
                //task will be added
                tags_added.push(tag.title)
            })
            //tags added now add tasks also
            let task_added_count=0
            tags_added.forEach((tag_title)=>{
                this.tasks.forEach((item)=>
                {
                    if(item.tags.indexOf(tag_title)!=-1)
                    {
                        //add this task to task array
                        let task_obj= new Task(item.title,tag_title)
                        app.task_array.push(task_obj)
                        task_added_count++
                    }
                })
            });
            app.save();
            console.log("Saved");
            alert("Lists Downloaded")
            this.close()
        },
        select_tag:function()
        {
            //selected tags contains observers 
            //console.log(this.selected_tags)
        },
        check_class:function(id)
        {
            //console.log('running check class')
            //return -1!=this.selected_tags.indexOf(id);
        }
    },
    template:`
                <div 
                v-if='visible'
                style='backdrop-filter: blur(5px);'
                class="w-full h-full top-0 left-0 absolute flex flex-col rounded shadow-xl p-4">
                    <div class='w-full h-full flex flex-col p-2 bg-blue-100'>
                        
                        <div 
                        class='text-xl text-blue-500 bg-white p-2 rounded'>
                            Lists Available Online
                        </div>
                        
                        <div class='flex flex-col wrap w-full h-full overflow-auto p-2 gap-2'>
                            
                            <div
                            v-on:click="" 
                            v-for='(item,index) in tags'
                            :key='index'
                            :class="[get_theme(item.theme)]"
                            class="rounded flex items-center gap-2 p-2">
                                <input v-on:change='select_tag' v-bind:value='item' v-model='selected_tags' type='checkbox' />
                                <span class="material-icons">{{item.icon}}</span>    
                                <span 
                                    class='capitalize w-full p-2'>{{item.title}}
                                </span>
                                <span
                                class='rounded-full p-2 text-sm'>
                                    {{get_task_count(item.title)}}
                                </span>
                            </div>


                        </div>
                        
                        <div class="flex justify-between p-2">
                            <span
                            v-on:click='close'
                            class="cursor-pointer bg-red-50 rounded-full p-2 text-red-500 bold">Cancel</span>
                            
                            <span
                            v-if="selected_tags.length>0"
                            v-on:click='download'
                            class="cursor-pointer bg-green-50 rounded-full p-2 text-green-500 bold">Download</span>
                            
                        </div>

                    </div>
                </div>


    `
})