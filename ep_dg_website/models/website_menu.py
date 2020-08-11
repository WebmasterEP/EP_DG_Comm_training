from odoo import api, fields, models

class WebsiteMenu(models.Model):
    _inherit = 'website.menu'
    is_bottom_menu = fields.Boolean(default=False)
