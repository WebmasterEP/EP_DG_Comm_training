odoo.define('ep_dg_comm.editor.snippets.options', function(require) {
    'use strict';


    var options = require('web_editor.snippets.options');

    options.registry.container_3d = options.Class.extend({


        selectCount: function(previewMode, value, $opt) {
            this._updateSpeed(value - this.$target.children().length);
        },

        _updateSpeed: function(count) {
            if (!count) {
                return;
            }
            
            var speed = this.$target.children().length + count;
            this.$target.attr('data-speed',speed);
            console.log(speed);
            this.speed = speed;
        },
        _setActive: function() {
            this._super.apply(this, arguments);
            this.$el.find('[data-select-count]').removeClass('active').filter('[data-select-count=' + (this.speed || this.$target.data('speed')) + ']').addClass('active');
        },
        cleanForSave: function() {
            this._super();
            this.$target.find('canvas').remove();
        },
    });
});
