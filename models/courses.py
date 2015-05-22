# coding=utf-8
#-*-coding:utf-8-*- 

from db import db
from comments import Comment

import random
import os.path
import re
import zhon.pinyin
import sys
reload(sys)
sys.setdefaultencoding('utf8')







def is_chinese(uchar):
        """判断一个unicode是否是汉字"""
        if uchar >= u'\u4e00' and uchar<=u'\u9fa5':
                return True
        else:
                return False

class PinYin(object):
    def __init__(self, dict_file='/var/www/word.data'):
        self.word_dict = {}
        self.dict_file = dict_file
        print os.path.exists(self.dict_file)


    def load_word(self):
        if not os.path.exists(self.dict_file):
            raise IOError("NotFoundFile")

        with file(self.dict_file) as f_obj:
            for f_line in f_obj.readlines():
                try:
                    line = f_line.split('    ')
                    self.word_dict[line[0]] = line[1]
                except:
                    line = f_line.split('   ')
                    self.word_dict[line[0]] = line[1]


    def hanzi2pinyin(self, string=""):
        result = []
        if not isinstance(string, unicode):
            string = string.decode("utf-8")

        for char in string:
            if not is_chinese(char):
              result.append(char.encode("utf-8"))
              continue
            key = '%X' % ord(char)
            result.append(self.word_dict.get(key, char).split()[0][:-1].lower())

        return result


    def hanzi2pinyin_split(self, string="", split=""):
        result = self.hanzi2pinyin(string=string)
        if split == "":
            return result
        else:
            return split.join(result)


def tran(s):
  test = PinYin()
  test.load_word()
  return test.hanzi2pinyin(string=s)





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

def search_py(str, al, arr, cri, py_cri):
    list1 = py2py(str)
    for item in al:
        if item["status"] == 1:
            if py_match(list1, item[py_cri]) or item[cri].lower().find(str.lower()) > -1:
                arr.append(Course(item["_id"], item["name"], item["teacher"], item["category"], item["cmtids"], item["status"], item["count"], item["sum"]))
    return arr

def search_py_all(str, al, arr):
    list1 = py2py(str)
    for item in al:
        if item["status"] == 1:
            if py_match(list1, item['py_name']) or item['name'].lower().find(str.lower()) > -1:
                arr.append(Course(item["_id"], item["name"], item["teacher"], item["category"], item["cmtids"], item["status"], item["count"], item["sum"]))
            elif py_match(list1, item['py_teacher']) or item['teacher'].lower().find(str.lower()) > -1:
                arr.append(Course(item["_id"], item["name"], item["teacher"], item["category"], item["cmtids"], item["status"], item["count"], item["sum"]))
    return arr



class Course(object):
    """ Course Infomations
        @param cid {num} The unique ID of the course.
        @param name {string} The name of the course.
        @param teacher {string} The teacher of the course.
        @param category {num} The number of category of the course. 
                1: General Electives
                2: Subject Electives
                3: General Requisites
                4: Subject Requisites
                5: PE Class
        @param cmtid {list} The comments id of the course.
        @param status {num} Replace the visibility of the course.
                0: Deleted. (But still save in DataBase)
                1: Visible.
        @param count {num} The number of people given ratings.
        @param sums {num} The total number of ratings.
    """
    def __init__(self, cid, name, teacher, category, cmtids, status, count, sums):
        self.__cid = cid
        self.__name = name
        self.__teacher = teacher
        self.__category = category
        self.__cmtids = cmtids
        self.__status = status
        self.__count = count
        self.__sums = sums

    @property
    def cid(self):
        return self.__cid

    @property
    def name(self):
        return self.__name

    @property
    def teacher(self):
        return self.__teacher

    @property
    def category(self):
        return self.__category

    @property
    def cmtids(self):
        return self.__cmtids

    @property
    def status(self):
        return self.__status

    @property
    def count(self):
        return self.__count

    @property
    def sums(self):
        return self.__sums

    @property
    def first_charac(self):
        return self.__name[0]

    def get_color(self):
        color_list = ['#26c6da', '#d4e157', '#78909c', '#bdbdbd', '#8d6e63', '#7e57c2', '#5c6bc0', '#738ffe', '#e84e40', '#ec407a', '#ab47bc', '#29b6f6', '#26a69a', '#ffa726', '#ff7043']
        return color_list[random.randint(0, 14)]


    def get_category_name(self):
        names = ["公选", "专选", "公必", "专必", "体育"]
        return names[self.category - 1]

    def get_comments(self):
        alist = []
        for i in self.cmtids:
            item = Comment.get_comment_by_cmtid(i)
            if item.status == 1:
                alist.append(item)
        alist = sorted(alist, key=lambda cmt : cmt.like-cmt.unlike, reverse=True)
        return alist

    def get_all_comments(self):
        alist = []
        for i in self.cmtids:
            alist.append(Comment.get_comment_by_cmtid(i))
        return alist

    def get_rating(self):
        if self.count == 0:
            return 0
        return int(self.sums/self.count)

    @staticmethod
    def insert_course(info):
        """
            _id: cid,
            count: The number of people given a rate.
            sum: The total number of rate.
        """
        cid = Course.get_next_sequence_value()
        db["course"].insert({
            "_id": cid,
            "teacher": info["teacher"],
            "name": info["name"],
            "py_name": tran(info["name"]),
            "py_teacher": tran(info['teacher']),
            "category": info["category"],
            "status": 1,
            "cmtids": [],
            "count": 0,
            "sum": 0
        })
        return cid

    @staticmethod
    def update_course(info):
        db["course"].find_and_modify(
            {"_id": info["cid"]},
            update={"$set": {
                "teacher": info["teacher"],
                "name": info["name"],
                "py_name": tran(info["name"]),
                "py_teacher": tran(info['teacher']),
                "category": info["category"],
                "status": info["status"],
                "sums": info["sums"],
                "count": info["count"]
            }}
        )

    @staticmethod
    def change_status(cid, status):
        db["course"].find_and_modify(
            {"_id": cid}, 
            update={"$set": {
                "status": status
            }}
        )

    @staticmethod
    def add_comment(cid, comment, author):
        cmtid = Comment.insert_comment(comment, author)
        item = db["course"].find_one({"_id": cid})
        alist = item["cmtids"]
        alist.append(cmtid)
        db["course"].find_and_modify(
            {"_id": cid},
            update={
                "$set":{
                    "cmtids": alist
                }
            }
        )
        return cmtid

    @staticmethod
    def add_rating(cid, rating):
        db["course"].find_and_modify(
            {"_id": cid},
            update={
                "$inc":{
                    "count": 1,
                    "sum": rating
                }
            }
        )

    @staticmethod
    def delete_course(cid):
        db["course"].remove({"_id": cid})

    @staticmethod
    def delete_course_by_status():
        db["course"].remove({"status": 0})

    @staticmethod
    def get_course_by_cid(cid):
        item = db["course"].find_one({"_id": int(cid)})
        return Course(item["_id"], item["name"], item["teacher"], item["category"], item["cmtids"], item["status"], item["count"], item["sum"])

    @staticmethod
    def get_all_courses():
        items = db["course"].find()
        items_list = []
        for item in items:
            items_list.append(Course(item["_id"], item["name"], item["teacher"], item["category"], item["cmtids"], item["status"], item["count"], item["sum"]))
        return items_list

    @staticmethod
    def get_random_courses():
        all_course = Course.get_all_courses()
        new_courses = random.shuffle(all_course)
        return all_course[:20]


    @staticmethod
    def get_course_by_cate_teac_name(cate, teac, name):
        item = db["course"].find_one({
            "category": cate,
            "teacher": teac,
            "name": name
        })
        if item:
            return Course(item["_id"], item["name"], item["teacher"], item["category"], item["cmtids"], item["status"], item["count"], item["sum"])
        else:
            return False

    @staticmethod
    def get_course_by_name(name):
        item = db["course"].find({"name": name})
        alist = []
        if item:
            for it in item:
                alist.append(Course(it["_id"], it["name"], it["teacher"], it["category"], it["cmtids"], it["status"], it["count"], it["sum"]))
            return alist
        return False

    @staticmethod
    def get_next_sequence_value():
        doc = db['counters'].find_and_modify({"_id": "product"}, update={"$inc":{"seqcount": 1}}, upsert=True)
        return doc['seqcount']

    @staticmethod
    def get_courses_by_keyword(keyword):
        items = db["course"].find()
        items_list = []
        search_py_all(keyword, items, items_list)

        return items_list

    @staticmethod
    def get_courses_by_title_keyword(keyword):
        items = db["course"].find()
        items_list = []
        search_py(keyword, items, items_list, 'name', 'py_name')

        return items_list

    @staticmethod
    def get_courses_by_teacher_keyword(keyword):
        items = db["course"].find()
        items_list = []
        search_py(keyword, items, items_list, 'teacher', 'py_teacher')

        return items_list
