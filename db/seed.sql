INSERT INTO `employeeRoundUp_db`.`department` (`name`) VALUES ('Technology');
INSERT INTO `employeeRoundUp_db`.`department` (`name`) VALUES ('HR');
INSERT INTO `employeeRoundUp_db`.`department` (`name`) VALUES ('Marketing');
INSERT INTO `employeeRoundUp_db`.`department` (`name`) VALUES ('Engineering');
INSERT INTO `employeeRoundUp_db`.`department` (`name`) VALUES ('Development');

INSERT INTO `employeeRoundUp_db`.`role` (`title`, `salary`, `department_id`) VALUES ('Team Leader', '2000', '2');
INSERT INTO `employeeRoundUp_db`.`role` (`title`, `salary`, `department_id`) VALUES ('Assistant Leader', '2000', '3');
INSERT INTO `employeeRoundUp_db`.`role` (`title`, `salary`, `department_id`) VALUES ('Assistant Manager', '2000', '4');
INSERT INTO `employeeRoundUp_db`.`role` (`title`, `salary`, `department_id`) VALUES ('Sales Manager', '2000', '5');
INSERT INTO `employeeRoundUp_db`.`role` (`title`, `salary`, `department_id`) VALUES ('CEO', '2000', '1');


INSERT INTO `employeeRoundUp_db`.`employee` (`firstName`, `lastName`, `role_id`, `manager_id` ) VALUES ('charles', 'Leview', '2','1');
INSERT INTO `employeeRoundUp_db`.`employee` (`firstName`, `lastName`, `role_id`, `manager_id` ) VALUES ('Bruno', 'WHEN', '3','1');
INSERT INTO `employeeRoundUp_db`.`employee` (`firstName`, `lastName`, `role_id`, `manager_id` ) VALUES ('Krishna', 'DO', '6','1');
INSERT INTO `employeeRoundUp_db`.`employee` (`firstName`, `lastName`, `role_id`, `manager_id` ) VALUES ('Ali', 'HAS', '4','1');
INSERT INTO `employeeRoundUp_db`.`employee` (`firstName`, `lastName`, `role_id`, `manager_id` ) VALUES ('Austin', 'WAs', '5','1');