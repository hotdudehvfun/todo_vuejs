Vue.component('home_tab',
{
    template:`
    <div class="flex flex-row p-1" ng-if='tabs.tab_to_show==1'>
          
    <!-- clipboard -->
    <div class="flex flex-col p-2">
      <div class="grid grid-cols-2 text-blue-500">
        <div class="hover:bg-gray-100 p-1 rounded" title="Copy">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5.5 9.5A.5.5 0 016 9h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5z"></path><path d="M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z"></path><path d="M9.5 1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h3zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z"></path></svg>
        </div>
        
        <div class="hover:bg-gray-100 p-1 rounded" title="Cut">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4" viewBox="0 0 16 16"><path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 11-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 11-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm7 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"></path></svg>
        </div>

        <div class="flex justify-center hover:bg-gray-100 p-1 rounded col-span-2" title="Paste">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4" viewBox="0 0 16 16" id="clipboard-plus"><path fill-rule="evenodd" d="M8 7a.5.5 0 01.5.5V9H10a.5.5 0 010 1H8.5v1.5a.5.5 0 01-1 0V10H6a.5.5 0 010-1h1.5V7.5A.5.5 0 018 7z"></path><path d="M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z"></path><path d="M9.5 1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h3zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z"></path></svg>
        </div>
        
      </div>
      <span class="text-xs text-center">Clipboard</span>
    </div>
    <!-- clipboard -->

    <!-- vert sep -->
    <div class="w-3/2px bg-gray-200"></div>


    <!-- image tools -->
    <div class="flex flex-col p-2">
      
      <div class="grid grid-cols-2">

        <div class="hover:bg-gray-100 p-1 rounded" title="Selection">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4" viewBox="0 0 16 16" id="app"><path d="M11 2a3 3 0 013 3v6a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h6zM5 1a4 4 0 00-4 4v6a4 4 0 004 4h6a4 4 0 004-4V5a4 4 0 00-4-4H5z"></path></svg>
        </div>
        

        <div class="hover:bg-gray-100 p-1 rounded" title="Resize">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4" viewBox="0 0 16 16" id="bounding-box-circles"><path d="M2 1a1 1 0 100 2 1 1 0 000-2zM0 2a2 2 0 013.937-.5h8.126A2 2 0 1114.5 3.937v8.126a2 2 0 11-2.437 2.437H3.937A2 2 0 111.5 12.063V3.937A2 2 0 010 2zm2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2.004 2.004 0 011.437-1.437V3.937A2.004 2.004 0 0112.063 2.5H3.937A2.004 2.004 0 012.5 3.937zM14 1a1 1 0 100 2 1 1 0 000-2zM2 13a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2z"></path></svg>
        </div>

        <div class="hover:bg-gray-100 p-1 rounded" title="Crop">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4" viewBox="0 0 16 16" id="crop"><path d="M3.5.5A.5.5 0 014 1v13h13a.5.5 0 010 1h-2v2a.5.5 0 01-1 0v-2H3.5a.5.5 0 01-.5-.5V4H1a.5.5 0 010-1h2V1a.5.5 0 01.5-.5zm2.5 3a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v8a.5.5 0 01-1 0V4H6.5a.5.5 0 01-.5-.5z"></path></svg>
        </div>

        <div class="hover:bg-gray-100 hover:text-blue-500 p-1 rounded flex gap-2" title="Rotate">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4" viewBox="0 0 16 16" id="arrow-clockwise"><path fill-rule="evenodd" d="M8 3a5 5 0 104.546 2.914.5.5 0 01.908-.417A6 6 0 118 2v1z"></path><path d="M8 4.466V.534a.25.25 0 01.41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 018 4.466z"></path></svg>
        </div>
      </div>
      
      <span class="text-xs text-center">Image</span>
    </div>
    <!-- image tools end -->

    <!-- vert sep -->
    <div class="w-3/2px bg-gray-200"></div>


    <!-- drawing tools -->
    <div class="flex flex-col p-2">
      
      <div class="grid grid-cols-3">

        <div class="hover:bg-gray-100 hover:text-blue-500 p-1 rounded" title="Pencil">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4" viewBox="0 0 16 16" id="pencil"><path d="M12.146.146a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-10 10a.5.5 0 01-.168.11l-5 2a.5.5 0 01-.65-.65l2-5a.5.5 0 01.11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 015 12.5V12h-.5a.5.5 0 01-.5-.5V11h-.5a.5.5 0 01-.468-.325z"></path></svg>
        </div>
        

        <div class="hover:bg-gray-100 hover:text-blue-500 p-1 rounded" title="Paint Bucket">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4" viewBox="0 0 16 16" id="paint-bucket"><path d="M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a2.972 2.972 0 00-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 001.993 0H14v-.057a1.01 1.01 0 00-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4.322 4.322 0 00-.211-.434c-.349-.626-.92-1.36-1.627-2.067-.707-.707-1.441-1.279-2.068-1.627-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219l-.217.216zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.283 3.283 0 01-.131-.673c.091.061.204.15.337.274zm.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 10.682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088c.054.12.115.243.183.365.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626.122.068.244.13.365.183l-4.861 4.862a.571.571 0 01-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46-.66-.66-1.168-1.32-1.46-1.846-.147-.265-.225-.47-.251-.607a.573.573 0 01-.01-.068l3.048-3.047zm2.87-1.935a2.44 2.44 0 01-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.497 3.497 0 00-1.066.091 11.27 11.27 0 01-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z"></path></svg>
        </div>

        <div class="hover:bg-gray-100 hover:text-blue-500 p-1 rounded" title="Insert Text">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4" viewBox="0 0 16 16" id="fonts"><path d="M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479L12.258 3z"></path></svg>
        </div>

        <div class="hover:bg-gray-100 hover:text-blue-500 p-1 rounded flex gap-2" title="Earser">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4" viewBox="0 0 16 16" id="eraser"><path d="M8.086 2.207a2 2 0 012.828 0l3.879 3.879a2 2 0 010 2.828l-5.5 5.5A2 2 0 017.879 15H5.12a2 2 0 01-1.414-.586l-2.5-2.5a2 2 0 010-2.828l6.879-6.879zm2.121.707a1 1 0 00-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 000-1.414l-3.879-3.879zM8.746 13.547L3.453 8.254 1.914 9.793a1 1 0 000 1.414l2.5 2.5a1 1 0 00.707.293H7.88a1 1 0 00.707-.293l.16-.16z"></path></svg>
        </div>
        

        <div class="hover:bg-gray-100 hover:text-blue-500 p-1 rounded flex gap-2" title="Pen Tool">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4" viewBox="0 0 16 16" id="vector-pen"><path fill-rule="evenodd" d="M10.646.646a.5.5 0 01.708 0l4 4a.5.5 0 010 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 01-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 015.43 3.377l3.313-.828L10.646.646zm-1.8 2.908l-3.173.793a.5.5 0 00-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 00.34-.357l.794-3.174-3.6-3.6z"></path><path fill-rule="evenodd" d="M2.832 13.228L8 9a1 1 0 10-1-1l-4.228 5.168-.026.086.086-.026z"></path></svg>
        </div>

        <div class="hover:bg-gray-100 hover:text-blue-500 p-1 rounded flex gap-2" title="Color Picker">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4" viewBox="0 0 16 16" id="eyedropper"><path d="M13.354.646a1.207 1.207 0 00-1.708 0L8.5 3.793l-.646-.647a.5.5 0 10-.708.708L8.293 5l-7.147 7.146A.5.5 0 001 12.5v1.793l-.854.853a.5.5 0 10.708.707L1.707 15H3.5a.5.5 0 00.354-.146L11 7.707l1.146 1.147a.5.5 0 00.708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 000-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path></svg>
        </div>
        
        <div class="hover:bg-gray-100 hover:text-blue-500 p-1 rounded flex gap-2" title="Brush">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4" viewBox="0 0 16 16" id="brush"><path d="M15.825.12a.5.5 0 01.132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 01-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 01-3.078.132 3.659 3.659 0 01-.562-.135 1.382 1.382 0 01-.466-.247.714.714 0 01-.204-.288.622.622 0 01.004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 01.596.04zM4.705 11.912a1.23 1.23 0 00-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 01-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 00.126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 001.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04l.007-.005a.031.031 0 01-.007.004zm3.582-3.043l.002.001h-.002z"></path></svg>
        </div>
        
        <div class="hover:bg-gray-100 hover:text-blue-500 p-1 rounded flex gap-2" title="Shapes">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4" viewBox="0 0 16 16" id="heptagon-half"><path d="M7.779.052a.5.5 0 01.442 0l6.015 2.97a.5.5 0 01.267.34l1.485 6.676a.5.5 0 01-.093.415l-4.162 5.354a.5.5 0 01-.395.193H4.662a.5.5 0 01-.395-.193L.105 10.453a.5.5 0 01-.093-.415l1.485-6.676a.5.5 0 01.267-.34L7.779.053zM8 15h3.093l3.868-4.975-1.383-6.212L8 1.058V15z"></path></svg>
        </div>
      </div>
      <span class="text-xs text-center">Image</span>
    </div>
    <!-- drawing tools end -->

    <!-- vert sep -->
    <div class="w-3/2px bg-gray-200"></div>


    <!-- pen size -->
    <div class="flex flex-col p-2">
        <select onchange="handle_pencil_size_change(this)">
            <option v-for="item in [1,2,3,4,5,6,7,8,9,10]" :value="item">
              {{item}}
            </option>
            <!-- <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option> -->

        </select>
        <span class="text-xs text-center">Pen Size</span>
      </div>
      <!-- pen size end -->

    <!-- vert sep -->
    <div class="w-3/2px bg-gray-200"></div>



        <!-- color picker -->
        <div class="flex flex-col p-2">
      
            <color_picker></color_picker>
          </div>
          <!-- color picker end -->
      
          <!-- vert sep -->
          <div class="w-3/2px bg-gray-200"></div>






  </div>
    `
})
