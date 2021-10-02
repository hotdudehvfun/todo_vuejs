Vue.component('menu_tabs',
{
    data: function ()
    {
        return {
          selected_tab: 1,
          tab_names:["File","Home","View","Help"],
        }
    },
    methods:
    {
        set_selected_tab:function(i)
        {
            this.selected_tab=i;
            console.log(this.selected_tab)
        }        
    },
    template:`
                <div class='flex flex-col'>
                    
                    <div class='flex'>
                        <div
                        v-for="(title,index) in tab_names"
                        @click="set_selected_tab(index)"
                        v-bind:class="{'bg-blue-500 text-white border-b-2 border-blue-700':selected_tab==index}"
                        class='hover:bg-blue-400 hover:text-white p-2'>
                            {{title}}
                        </div>
                    </div>
                    
                    <div class="flex gap-2">
                        <file_tab v-if="selected_tab==0"></file_tab>
                        <home_tab v-if="selected_tab==1"></home_tab>
                        <view_tab v-if="selected_tab==2"></view_tab>
                        <help_tab v-if="selected_tab==3"></help_tab>
                        
                    </div>
                </div>
    `
})