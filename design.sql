/*
Navicat MySQL Data Transfer

Source Server         : psy
Source Server Version : 50562
Source Host           : localhost:3306
Source Database       : design

Target Server Type    : MYSQL
Target Server Version : 50562
File Encoding         : 65001

Date: 2019-03-19 17:10:04
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `npc`
-- ----------------------------
DROP TABLE IF EXISTS `npc`;
CREATE TABLE `npc` (
  `npcHP` int(11) NOT NULL,
  `npcPower` int(11) NOT NULL,
  `npcDen` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of npc
-- ----------------------------
INSERT INTO `npc` VALUES ('50', '21', '10');

-- ----------------------------
-- Table structure for `player`
-- ----------------------------
DROP TABLE IF EXISTS `player`;
CREATE TABLE `player` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `checkPoint` int(11) NOT NULL,
  `grade` int(11) NOT NULL,
  `exp` int(11) NOT NULL,
  `HP` int(11) NOT NULL,
  `MP` int(11) NOT NULL,
  `power` int(11) NOT NULL,
  `denfise` int(11) NOT NULL,
  `gold` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of player
-- ----------------------------
INSERT INTO `player` VALUES ('1', '胖胖的小潘', '123456', '1', '1', '1', '100', '100', '20', '10', '1000');
INSERT INTO `player` VALUES ('2', '帅帅的小潘', '123456', '1', '1', '1', '100', '100', '20', '10', '1000');

-- ----------------------------
-- Table structure for `skill`
-- ----------------------------
DROP TABLE IF EXISTS `skill`;
CREATE TABLE `skill` (
  `no` int(11) NOT NULL AUTO_INCREMENT,
  `skillHP` int(11) NOT NULL,
  `skillMP` int(11) NOT NULL,
  `skillTime` int(11) NOT NULL,
  `skillImg` int(11) NOT NULL,
  `skillGrade` int(11) NOT NULL,
  `skillArea` int(11) NOT NULL,
  PRIMARY KEY (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of skill
-- ----------------------------
INSERT INTO `skill` VALUES ('1', '50', '20', '5', '123', '3', '0');
