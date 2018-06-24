-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema galaxy
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema galaxy
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `galaxy` DEFAULT CHARACTER SET utf8 ;
USE `galaxy` ;

-- -----------------------------------------------------
-- Table `galaxy`.`count`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `galaxy`.`count` (
  `countId` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `count` VARCHAR(255) NULL DEFAULT NULL,
  `countDesc` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`countId`))
ENGINE = MyISAM
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `galaxy`.`dyeingorder`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `galaxy`.`dyeingorder` (
  `dyeingOrderId` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `customer` VARCHAR(255) NULL DEFAULT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `dyeingOrderNo` VARCHAR(255) NULL DEFAULT NULL,
  `orderDate` DATE NULL DEFAULT NULL,
  `quantity` BIGINT(20) NULL DEFAULT NULL,
  `countId` BIGINT(20) NOT NULL,
  `shadeId` BIGINT(20) NOT NULL,
  PRIMARY KEY (`dyeingOrderId`),
  INDEX `FK6hyx36u3oxrkux6xbug0i55n5` (`countId` ASC),
  INDEX `FK1uoq8rjxhq4vdnrr1wrl07v8c` (`shadeId` ASC))
ENGINE = MyISAM
AUTO_INCREMENT = 19
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `galaxy`.`dyeingorderreceived`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `galaxy`.`dyeingorderreceived` (
  `dorId` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `dyeingChallanNo` VARCHAR(255) NULL DEFAULT NULL,
  `dyeingOrderId` BIGINT(20) NULL DEFAULT NULL,
  `receivedDate` DATE NULL DEFAULT NULL,
  `receivedQuantity` BIGINT(20) NULL DEFAULT NULL,
  PRIMARY KEY (`dorId`))
ENGINE = MyISAM
AUTO_INCREMENT = 31
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `galaxy`.`shade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `galaxy`.`shade` (
  `shadeId` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `shadeColour` VARCHAR(255) NULL DEFAULT NULL,
  `shadeNo` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`shadeId`))
ENGINE = MyISAM
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `galaxy`.`supplier`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `galaxy`.`supplier` (
  `suppilerId` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `supplierDesc` VARCHAR(255) NULL DEFAULT NULL,
  `supplierName` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`suppilerId`),
  UNIQUE INDEX `UK_oqikdnpthno4kh26lnydvkong` (`supplierName` ASC))
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `galaxy`.`testtable`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `galaxy`.`testtable` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `galaxy`.`token`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `galaxy`.`token` (
  `tokenId` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `created` DATETIME NULL DEFAULT NULL,
  `expired` DATETIME NULL DEFAULT NULL,
  `lastUsed` DATETIME NULL DEFAULT NULL,
  `token` VARCHAR(255) NULL DEFAULT NULL,
  `tokenKey` VARCHAR(255) NULL DEFAULT NULL,
  `userId` BIGINT(20) NULL DEFAULT NULL,
  PRIMARY KEY (`tokenId`))
ENGINE = MyISAM
AUTO_INCREMENT = 42
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `galaxy`.`undyedyarndyeing`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `galaxy`.`undyedyarndyeing` (
  `uydId` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `dyeingDeliveryChallanNo` VARCHAR(255) NULL DEFAULT NULL,
  `purchaseDate` DATE NULL DEFAULT NULL,
  `quantity` BIGINT(20) NULL DEFAULT NULL,
  `countId` BIGINT(20) NOT NULL,
  `yarnTypeId` BIGINT(20) NOT NULL,
  PRIMARY KEY (`uydId`),
  INDEX `FKgdo3x5g2ig25xm3flryovef70` (`countId` ASC),
  INDEX `FKruescv1jfwixjfde9iuqjfe82` (`yarnTypeId` ASC))
ENGINE = MyISAM
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `galaxy`.`undyedyarnpurchase`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `galaxy`.`undyedyarnpurchase` (
  `uypId` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `purchaseDate` DATE NULL DEFAULT NULL,
  `quantity` BIGINT(20) NULL DEFAULT NULL,
  `supplier` VARCHAR(255) NULL DEFAULT NULL,
  `countId` BIGINT(20) NOT NULL,
  `yarnTypeId` BIGINT(20) NOT NULL,
  `challanNo` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`uypId`),
  UNIQUE INDEX `UKfmi04q1afx4oer24bkryd6un` (`yarnTypeId` ASC, `countId` ASC, `supplier` ASC, `purchaseDate` ASC, `quantity` ASC),
  INDEX `FKp48up3hacnix58aexmdc37o2` (`countId` ASC))
ENGINE = MyISAM
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `galaxy`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `galaxy`.`user` (
  `userId` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `role` VARCHAR(255) NULL DEFAULT NULL,
  `userName` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE INDEX `UK_hl8fftx66p59oqgkkcfit3eay` (`userName` ASC))
ENGINE = MyISAM
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `galaxy`.`yarncount`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `galaxy`.`yarncount` (
  `yarnCountId` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `yarnCountDesc` VARCHAR(255) NULL DEFAULT NULL,
  `yarnCountName` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`yarnCountId`),
  UNIQUE INDEX `UK_brc6wvh4ho9819yvy32iadagw` (`yarnCountName` ASC))
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `galaxy`.`yarntype`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `galaxy`.`yarntype` (
  `yarnTypeId` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `yarnType` VARCHAR(255) NULL DEFAULT NULL,
  `yarnTypeDesc` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`yarnTypeId`),
  UNIQUE INDEX `UK_jtqec1cc7sgv6xfurl1ilx3nk` (`yarnType` ASC))
ENGINE = MyISAM
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;

USE `galaxy` ;

-- -----------------------------------------------------
-- Placeholder table for view `galaxy`.`dyeingordersummary`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `galaxy`.`dyeingordersummary` (`dyeingOrderId` INT, `customer` INT, `description` INT, `dyeingOrderNo` INT, `count` INT, `shadeNo` INT, `shadeColour` INT, `orderDate` INT, `quantity` INT, `received` INT, `Balance` INT);

-- -----------------------------------------------------
-- View `galaxy`.`dyeingordersummary`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `galaxy`.`dyeingordersummary`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `galaxy`.`dyeingordersummary` AS select `do`.`dyeingOrderId` AS `dyeingOrderId`,`do`.`customer` AS `customer`,`do`.`description` AS `description`,`do`.`dyeingOrderNo` AS `dyeingOrderNo`,`galaxy`.`count`.`count` AS `count`,`galaxy`.`shade`.`shadeNo` AS `shadeNo`,`galaxy`.`shade`.`shadeColour` AS `shadeColour`,`do`.`orderDate` AS `orderDate`,`do`.`quantity` AS `quantity`,sum(coalesce(`dor`.`receivedQuantity`,0)) AS `received`,(`do`.`quantity` - sum(coalesce(`dor`.`receivedQuantity`,0))) AS `Balance` from (((`galaxy`.`dyeingorder` `do` left join `galaxy`.`dyeingorderreceived` `dor` on((`do`.`dyeingOrderId` = `dor`.`dyeingOrderId`))) join `galaxy`.`count` on((`galaxy`.`count`.`countId` = `do`.`countId`))) join `galaxy`.`shade` on((`galaxy`.`shade`.`shadeId` = `do`.`shadeId`))) group by `do`.`dyeingOrderId`;

