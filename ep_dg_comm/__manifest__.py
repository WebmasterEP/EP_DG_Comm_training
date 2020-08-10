# -*- encoding: utf-8 -*-
{
    'name': 'EP DG Comm',
    'category': 'Theme/EP_DG_Comm',
    'summary': 'EP DG Comm',
    'version': '0.1',
    'description': '',
    'depends': [
        'website',
        'website_event',
    ],
    'images': [
        'static/description/website_theme_screenshot.jpg', #image of theme
    ],

    'data': [

        # data
        'data/menu.xml',

        # assets
        'views/assets.xml',

        # layout

        #backend

        # pages
        'views/pages/homepage.xml',
        'views/pages/qweb_logic.xml',
        'views/pages/route_page.xml',
        'views/pages/event.xml',

        # generic views

    ],

}
