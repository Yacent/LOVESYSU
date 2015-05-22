# coding=utf-8
#-*-coding:utf-8-*- 

import os.path
import pymongo
import re
import zhon.pinyin
import sys
reload(sys)
sys.setdefaultencoding('utf8')

conn = pymongo.MongoClient("localhost", 27017)
db = conn['sysucourse']

coll = db['course']

al = coll.find()

#将正则表达式编译成Pattern对象
#使用Pattern匹配文本，获得匹配结果，无法匹配时将返回None

def py2py(s):
    return re.findall(zhon.pinyin.syllable, s, re.IGNORECASE)

def py_match(list1, list2):
    len_short = len(list1)
    if len_short == 0:
        return False
    len_long = len(list2)
    flag = 0
    for i in xrange(len_long - len_short+1):
        for j in xrange(len_short):
            if list1[j] == list2[i+j]:
                flag = flag + 1
            else:
                flag=0
                break
        if flag == len_short:
            return True

def search_py(str):
    list1 = py2py(str)
    for i in al:
        if py_match(list1, i['py_name']) or i['name'].lower().find(str.lower()) > -1:
            print i['name']


search_py('我是Linux');

'''def mm(s):
    res = []
    tag = 0
    i = len(s)
    while (i > 0):
        pattern = re.compile(r'[^aoeiuv]?h?[iuv]?(ai|ei|ao|ou|er|ang?|eng?|ong|a|o|e|i|u|ng|n)?')
        match = pattern.match(s)
        tag = match.end()-match.start()
        #res.append(s[0:1])
        if pattern.search(s):
            res.append(match.group()) #全拼
        s = s[tag:]
        i -= tag
    return res


 dd = mm('pinyinfangan')
 for i in dd:
     print i

 print re.findall(zhon.word.syllable, 'pinyinfangan', re.IGNORECASE)'''