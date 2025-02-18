-- @block
CREATE TABLE IF NOT EXISTS `session` (
  `session_id` varchar(32) NOT NULL DEFAULT '',
  `session_data` text NOT NULL,
  `session_time` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`session_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- @block
SHOW TABLES LIKE 'session';