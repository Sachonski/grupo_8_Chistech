-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: chistech
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'quesos blandos'),(2,'quesos azules'),(3,'quesos frescos'),(4,'quesos corteza'),(5,'quesos duros');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `packaging`
--

DROP TABLE IF EXISTS `packaging`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `packaging` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pack` varchar(100) NOT NULL,
  `value` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packaging`
--

LOCK TABLES `packaging` WRITE;
/*!40000 ALTER TABLE `packaging` DISABLE KEYS */;
INSERT INTO `packaging` VALUES (0,'horma',0),(1,'fraccionado',1);
/*!40000 ALTER TABLE `packaging` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `image` varchar(49) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `packaging_id` int(11) DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_FK` (`category_id`),
  KEY `products_FK_1` (`packaging_id`),
  CONSTRAINT `products_FK` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `products_FK_1` FOREIGN KEY (`packaging_id`) REFERENCES `packaging` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,'Mascarpone','Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',397,'queso-brie-laboheme-920x920.png',0,0,4,30),(3,'Parmesano','Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',540,'queso-pecorino-18-meses-920x920.png',1,1,3,0),(4,'Feta','Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',904,'EB37B83A-D5E4-4D60-91AC-5B6164F36348-1024x683.png',1,0,4,0),(5,'Cheddar','Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',588,'C35AADD3-CAE1-4532-9937-615F2B8546D4-768x512.png',0,0,5,10),(6,'Gouda','Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',930,'queso-tetilla-920x920.png',0,0,4,5),(7,'Queso azul','Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',1263,'queso-sbrinz-18-meses-920x920.png',0,1,1,0),(8,'Parmesano','Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',1349,'QA-003-caja3leches-920x920.png',1,1,5,0),(9,'Brie','Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',1115,'Background3.png',1,1,4,0),(10,'Mascarpone','Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',1022,'5fe7de1b-5bcb-4aa9-9b1b-6a7944458d97-768x512.png',0,0,2,0),(11,'Emmental','Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',640,'queso-pecorino-12-meses-920x920.png',1,0,5,0),(12,'Queso azul','Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',862,'queso-cremoso-920x920.png',0,1,3,0),(13,'Queso azul','Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',431,'queso-gouda.png',0,1,4,0),(14,'Roquefort','Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',259,'EB37B83A-D5E4-4D60-91AC-5B6164F36348-1024x683.png',0,1,2,0),(15,'Feta','Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',943,'queso-sbrinz-18-meses-920x920.png',0,0,3,0),(16,'Roquefort','Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',1473,'queso-blanco-danes-920x920.png',0,1,2,0),(17,'Gouda','Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',1299,'queso-halloumi-1-920x920.png',0,0,4,0),(18,'Brie','Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',424,'queso-mozzarella-polpetta-920x920.png',0,0,1,0),(19,'Parmesano','Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',942,'queso-halloumi-1-920x920.png',1,0,4,10),(20,'Feta','Donec ut dolor.',905,'queso-mozzarella-polpetta-920x920.png',1,1,2,10),(45,'queso 14','queso azul fraccionado',1000,'1646919199052_queso-piramide-cabra-920x920.png',1,0,1,10),(47,'queso','queso 15 vendido en horma',5000,'1646919199052_4UV7.gif',1,0,5,5),(48,'quesooo','queso mas largo para validar',1000,'1647193945121_hola.png',1,1,2,10),(49,'queso','queso con nombre muy largo',1000,'1646919199052_4UV7.gif',1,1,1,10);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `total` decimal(10,0) NOT NULL,
  `invoice` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sales_FK` (`user_id`),
  KEY `sales_FK_1` (`product_id`),
  CONSTRAINT `sales_FK` FOREIGN KEY (`id`) REFERENCES `users` (`id`),
  CONSTRAINT `sales_FK_1` FOREIGN KEY (`id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (14,'2022-03-19 16:07:36',0,0,1,0,'1 2022-03-19T16:07:36.702Z'),(15,'2022-03-19 16:07:36',0,0,1,0,'1 2022-03-19T16:07:36.702Z'),(18,'2022-03-19 16:14:08',0,0,1,0,'1 2022-03-19T16:14:08.688Z'),(19,'2022-03-19 16:14:08',0,0,1,0,'1 2022-03-19T16:14:08.688Z');
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `user_name` varchar(50) DEFAULT `email`,
  `birth` date NOT NULL,
  `email` varchar(50) NOT NULL,
  `avatar` varchar(50) DEFAULT NULL,
  `password` varchar(50) NOT NULL,
  `admin` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0: user // 1: admin',
  PRIMARY KEY (`id`),
  UNIQUE KEY `User email` (`email`),
  UNIQUE KEY `User name` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Diana actualizado','Adrover','diana123','1999-12-19','diana@adrover.com','1647566739596_pngegg(2).png','$2a$10$1VzxVNllCHjc3qp3FoU8xO9Qs3J0UhT6lXek3ndQZ9/',1),(2,'Nicolas','Cano','nicolas95','1995-12-08','nicolas@hotmail.com','1647008117527_pngegg.png','$2a$10$zFrDGJhsiUybPXx4jJ4ur.Skn/ChzxwB9GYXMza/fqj',1),(5,'Asa','Asa','asa12345','1222-12-12','asa@asa.com','1647008117527_pngegg.png','$2a$10$A3s7RMu/UOL7zp9KXjVp7unYUMTfnGt67t3KfzlCOVP',0),(7,'Juan','Carlos','Juan1234','1222-12-12','juan@carlos.com','1647008117527_pngegg.png','$2a$10$v5YGa4JM9tMLp4UuqTnWCeX3i1wdPN4dcBWHQDgE6QJ',0),(8,'Carlos','Ezequiel','Carlos1234','1222-12-12','carlos@carlos.com','1647008117527_pngegg.png','$2a$10$B4Vn93N5R1XmLhudU96fSOziGvFTH.1i4Bxd6f23q0t',0),(9,'Alejandro','Sascha','Ale123','1222-12-12','ale@ale.com','1647008117527_pngegg.png','$2a$10$FP1oy67UzJP0W8fM61peweA.vjHKBO142Q3CR011GhY',1),(12,'rgert','erterte','54565','2022-03-17','kfjadsf@gmail.com','1647008117527_pngegg.png','$2a$10$btjSqGzJnkEiDHdADl1f2eJkNSLdiJK.AdKtmudbeJq',0),(13,'Pedro','Sanchez','pepeS','2022-03-25','pepe@sanchez.com','1647008117527_pngegg.png','$2a$10$k/jRVvMFoiSuR9H5Zlbmo.xkmpB.yjXkz/W5lCopUml',1),(14,'Pancho','Perez','panchito','2022-03-26','panchito@parez.com','1647008117527_pngegg.png','$2a$10$RpS6s2D1XohQ3ZeYh/7kX.5LM1BVvVQvuojQPhH0UAe',1),(15,'ultimo','usuario','ultimo','2022-03-25','ultimo@usuario.com','1647008117527_pngegg.png','$2a$10$cTmuBxUXxqij4rY6mCVe8emDrLo.TeP11FUEUH4ATfC',1),(17,'juanargerg','frgrgrg','aergerg','2022-03-23','ergr@dfbbf.com','1647008117527_pngegg.png','$2a$10$ksvpEbev4ujpJXHODuMfHOFvx6kDWEZ2F1k5e2bZmE/',1),(18,'wervwerv','werbwer','qwerbewr','2022-03-20','rfawgfwagf@hotmail.com','1647008117527_pngegg.png','$2a$10$0hTO0b2iZN8KWimgTJgQyeCkLOhoGd/4SXUMV13AVEx',1),(19,'retewrtq','rtbqrterwbt','qertbqerterb','2022-03-08','rtbwrt@gmail.com','1647008117527_pngegg.png','$2a$10$41ZdAqree1DlNtEGVZuNuu7Q1R4rKRErMD1qbnCV1dK',1),(20,'Nuevo','Usuario','nuevoU','2022-03-21','nuevo@gmail.com','1647008117527_pngegg.png','$2a$10$kbHtkzTvaOUgbDQP//FbGuTh.IaEjE0.HA7LpHpmz82',0),(24,'UsuarioAvatar','Avatar prueba registro','avatarReg','2022-03-17','registro@gmail.com','1647008870189_pngegg(5).png','$2a$10$D.TIV9RK7edPNoOKWKo6HO7m3PhBT6MdGvTwXsnLDPK',0),(25,'usuarioRegistro','Apellido','kjdf65456','2022-03-10','usuario21321@gmail.com','1647193945121_pngegg(1).png','$2a$10$dgcCtt4Wzy6ZRc5jMYo3PuJSJYZZv/sEY2IZry89Pgq',1),(26,'anaaa','ana','hhuhb','1222-12-12','sefWEF@dsvsdv.com',NULL,'$2a$10$M9ibtzPl.IqTTKJNFcBVRuL5fYna33g8U6zpb6pqZFG',0),(28,'anaaa','ana','anaaaNueva','1222-12-12','nuevo@dsvsdv.com',NULL,'$2a$10$7BMf0fDNnlSZr2OT4qY85O9ZSSfaWbZUhRhJY5XSZmj',1),(30,'Gaston','Falabella','gaston123','2022-03-03','gaston@falabella.com','1647639564528_pngegg(4).png','$2a$10$PF5ODjzAoUUefYRA8gH20.N58ra5Bd7Qik7mmNcwD1M',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'chistech'
--

--
-- Dumping routines for database 'chistech'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-19 17:48:17
