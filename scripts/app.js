//task class
/*
TODO:
    [] smart text inside tasks
    [] pull data from online server

*/


class Task {
  
  constructor(title,tag)
  {
    if(title==undefined)
      title=""
    this.title = title.trim();
    this.tags=[]
    this.tags.push(tag)
    this.created_on = Date.now();
    this.completed_on = null;
    //if scheduled
    this.scheduled_on = null;

    //true or false
    this.is_completed = false;
    this.is_favourite = false;
  }
}


class Tags {
  
  constructor(title,theme,icon)
  {
    if(title==undefined)
      title=""
    this.title = title.trim();
    //index based theme
    this.theme = theme;
    this.icon = icon;
    this.created_on = Date.now();
  }

}

var app = new Vue(
  {    
    el:"#app",
    data:
    {
        original_title:"My Lists",
        title:"My Lists",
        icon:"opacity",
        task_array:[],
        tag_array:[],
        show_add_new_tag_popup:false,
        view_what:'tags',
        tag_in_focus:null,
        tags_holder_translate_class:"-translate-x-0",
        tags_holder_scale_class:"scale-100",
        tasks_holder_translate_class:"-translate-x-0",
        show_add_new_task_popup:false,
        new_task_text:'',
        selected_tasks:[],
        show_handle_selected_tasks_popup:false,
        show_pull_data_popup:false,
        themes:
            {
                blue:["bg-blue-50 text-blue-500",'bg-blue-500'],
                red:["bg-red-50 text-red-500",'bg-red-500'],
                yellow:["bg-yellow-50 text-yellow-500",'bg-yellow-500'],
                green:["bg-green-50 text-green-500",'bg-green-500'],
                purple:["bg-purple-50 text-purple-500",'bg-purple-500'],
                indigo:["bg-indigo-50 text-indigo-500",'bg-indigo-500'],
                pink:["bg-pink-50 text-pink-500",'bg-pink-500'],
            },
    },
    created:function()
    {
      this.get_local_data()
    },
    methods:
    {
      save:function()
      {
        //save tags
        localStorage.tags=JSON.stringify(this.tag_array)
        //save tasks
        localStorage.tasks=JSON.stringify(this.task_array)
                
      },
      purge:function()
      {
        localStorage.clear();
      },
      get_local_data:function()
      {
        //get tags
        if(localStorage.tags!=undefined)
        {
          this.tag_array=JSON.parse(localStorage.tags)
        }else{
          this.tag_array=[]
        }

        //get tasks
        if(localStorage.tasks!=undefined)
        {
          this.task_array=JSON.parse(localStorage.tasks)
        }else{
          this.task_array=[]
        }
      },
      handle_back_button:function()
      {
        //update class to animate tags and tasks
        this.tags_holder_translate_class="translate-x-0"
        this.tags_holder_scale_class="scale-100" 
        this.tasks_holder_translate_class="translate-x-0"
        this.view_what='tags'
        this.title=this.original_title
        this.icon="opacity"
      },
      toggle_add_task_popup:function(){
        this.show_add_new_task_popup=!this.show_add_new_task_popup
        console.log(this.show_add_new_task_popup)
      },
      remove_tag_with_contents:function()
      {
        console.log(this.tag_in_focus)
      },
      
    }
})