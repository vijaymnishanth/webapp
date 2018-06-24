insert into yarnType values(1,'NW','NW');
insert into shade values(1,'NW','NW');
insert into count values(1,'NW','NW');

DROP TABLE IF EXISTS `galaxy`.`dyeingordersummary`;
USE `galaxy`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `galaxy`.`dyeingordersummary` AS select `do`.`dyeingOrderId` AS `dyeingOrderId`,`do`.`customer` AS `customer`,`do`.`description` AS `description`,`do`.`dyeingOrderNo` AS `dyeingOrderNo`,`galaxy`.`count`.`count` AS `count`,`galaxy`.`shade`.`shadeNo` AS `shadeNo`,`galaxy`.`shade`.`shadeColour` AS `shadeColour`,`do`.`orderDate` AS `orderDate`,`do`.`quantity` AS `quantity`,sum(coalesce(`dor`.`receivedQuantity`,0)) AS `received`,(`do`.`quantity` - sum(coalesce(`dor`.`receivedQuantity`,0))) AS `Balance` from (((`galaxy`.`dyeingorder` `do` left join `galaxy`.`dyeingorderreceived` `dor` on((`do`.`dyeingOrderId` = `dor`.`dyeingOrderId`))) join `galaxy`.`count` on((`galaxy`.`count`.`countId` = `do`.`countId`))) join `galaxy`.`shade` on((`galaxy`.`shade`.`shadeId` = `do`.`shadeId`))) group by `do`.`dyeingOrderId`;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;