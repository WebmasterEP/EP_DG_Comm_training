odoo.define('ep_dg_comm.s_cc_editor', function(require) {
    'use strict';

    var s_options = require('web_editor.snippets.options');

    s_options.registry.ccFx = s_options.Class.extend({
        selectClass: function(previewMode, value, $li) {
            this._super(previewMode, value, $li);
        }
    });
});
