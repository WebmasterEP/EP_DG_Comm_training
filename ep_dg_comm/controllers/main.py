# -*- coding: utf-8 -*-
from odoo import http, models, fields, _
from odoo.http import request

class Website(http.Controller):
    @http.route(['/route_page'], type='http', auth="public", website=True)
    def route_page(self):
        value = {'variable':[1,2,3]}
        return request.render('ep_dg_comm.qweb_route',value)
