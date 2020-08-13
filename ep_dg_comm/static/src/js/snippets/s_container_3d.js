odoo.define('theme_example.s_container_3d_frontend', function(require) {
    'use strict';

    var sAnimation = require('website.content.snippets.animation');
    
    sAnimation.registry.container3d = sAnimation.Class.extend({
        selector: '.renderer-3d',
        start: function() {
            var scene = new THREE.Scene();
            var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            var container = this.$el.after()[0];
            var renderer = new THREE.WebGLRenderer({ alpha: true });
            var speed = this.$el.data('speed');
            container.appendChild(renderer.domElement);

            var geometry = new THREE.BoxGeometry(1, 1, 1);
            var material = new THREE.MeshPhongMaterial({
                color: 0x7777ff
            });
            var cube = new THREE.Mesh(geometry, material);

            var spotLight = new THREE.SpotLight(0xffffff);
            spotLight.position.set(100, 100, 100);
            spotLight.castShadow = true;
            spotLight.shadowMapWidth = 1024;
            spotLight.shadowMapHeight = 1024;
            spotLight.shadowCameraNear = 500;
            spotLight.shadowCameraFar = 4000;
            spotLight.shadowCameraFov = 30;

            scene.add(spotLight);
            scene.add(cube);
            camera.position.z = 1.5;

            function render() {
                requestAnimationFrame(render);

                cube.rotation.x += speed * 0.005;
                cube.rotation.y += speed * 0.005;

                renderer.render(scene, camera);
            }

            render();
            return this._super.apply(this, arguments);
        }
    });

});
