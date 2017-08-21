'use strict';

( function() {
  var pluginName = 'doNothing';
  var doNothingCmd =
    {
        exec : function( editor )
        {
            return;
        }
    };
  CKEDITOR.plugins.add( pluginName, {
    //icons: 'abbr',
    init: function( editor ) {
        editor.addCommand( pluginName, doNothingCmd );
    }
  });
})();
