# coding=utf-8

import os.path
import tornado.web
import re

class BaseHandler(tornado.web.RequestHandler):
    """docstring for BaseHandler"""
    def get_current_user(self):
        return self.get_secure_cookie("user")

    def is_mobile(self):
    	ua_str = self.request.headers['User-Agent']
    	ismobile = re.search(r'Mobile', ua_str)
    	return ismobile
