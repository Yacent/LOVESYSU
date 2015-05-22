# coding=utf-8
#-*-coding:utf-8-*- 

import pymongo

conn = pymongo.MongoClient("localhost", 27017)
db = conn['sysucourse']