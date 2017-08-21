CKEditor doNothing Plugin
=====================

This plugin do nothing when certain configured key combinations pressed.

It is useful if you want to prevent enter key being pressed.

The original idea and source are from this [thread](https://ckeditor.com/forums/CKEditor-3.x/Disable-Enter-Key).

Installation
------------

1. Clone/copy this repository contents in a new "plugins/doNothing" folder in your CKEditor installation.
2. Enable the "doNothing" plugin in the CKEditor configuration file (config.js):

    config.extraPlugins = 'doNothing';

Now you need to configure CKEitor to prevent which keys are to be prevented. For example, these configuration prevents Enter and Shift + Enter keys.

    config.keystrokes = [
      [ 13 /*Enter*/, 'doNothing'],
      [ CKEDITOR.SHIFT + 13 /*Shift-Enter*/, 'doNothing']
    ];
