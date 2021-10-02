Vue.component('header',
{
    props:['text'],
    data: function ()
    {
        return {
        }
    },
    methods:
    {

    },
    template:`
                <div class='flex '>
                {{text}}
                </div>
    `
})