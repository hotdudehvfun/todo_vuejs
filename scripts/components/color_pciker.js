Vue.component('color_picker',
{
    data: function ()
    {
        return {
          selected_color: 0,
          color_classes:
          [
            {primary:"bg-blue-500",selected:"border-blue-700",rgb:"#3b82f6"},
            {primary:"bg-yellow-500",selected:"border-yellow-700",rgb:"#f59e0b"},
            {primary:"bg-red-500",selected:"border-red-700",rgb:"#ef4444"},
            {primary:"bg-purple-500",selected:"border-purple-700",rgb:"#8b5cf6"},
            {primary:"bg-green-500",selected:"border-green-700",rgb:"#10b981"},
            {primary:"rainbow",selected:"border-gray-700",rgb:"white"},
          ],
        }
    },
    methods:
    {
        set_selected_color:function(i)
        {
            // console.log(paint.pencil)
            this.selected_color=i;
            paint.pencil.stroke_color=this.color_classes[i].rgb
        }        
    },
    template:`
            <div class="grid grid-cols-3">
                <div 
                @click="set_selected_color(index)"
                v-for="(item,index) in color_classes"
                v-bind:class="[item.primary,selected_color==index?item.selected:'']"
                class="w-6 h-6 rounded-full border-2"></div>
            </div>
    `
})