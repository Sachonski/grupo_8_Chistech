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
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'quesos blandos');
INSERT INTO `category` VALUES (2,'quesos azules');
INSERT INTO `category` VALUES (3,'quesos frescos');
INSERT INTO `category` VALUES (4,'quesos corteza');
INSERT INTO `category` VALUES (5,'quesos duros');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `packaging`
--

LOCK TABLES `packaging` WRITE;
/*!40000 ALTER TABLE `packaging` DISABLE KEYS */;
INSERT INTO `packaging` VALUES (0,'horma',0);
INSERT INTO `packaging` VALUES (1,'fraccionado',1);
/*!40000 ALTER TABLE `packaging` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Brie','Proin at turpis a pede posuere nonummy. Integer non velit.',1263,'queso-halloumi-1-920x920.png',0,0,2,20);
INSERT INTO `products` VALUES (2,'Mascarpone','Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',397,'queso-brie-laboheme-920x920.png',0,0,4,30);
INSERT INTO `products` VALUES (3,'Parmesano','Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',540,'queso-pecorino-18-meses-920x920.png',1,1,3,0);
INSERT INTO `products` VALUES (4,'Feta','Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',904,'EB37B83A-D5E4-4D60-91AC-5B6164F36348-1024x683.png',1,0,4,0);
INSERT INTO `products` VALUES (5,'Cheddar','Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',588,'C35AADD3-CAE1-4532-9937-615F2B8546D4-768x512.png',0,0,5,10);
INSERT INTO `products` VALUES (6,'Gouda','Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',930,'queso-tetilla-920x920.png',0,0,4,5);
INSERT INTO `products` VALUES (7,'Queso azul','Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',1263,'queso-sbrinz-18-meses-920x920.png',0,1,1,0);
INSERT INTO `products` VALUES (8,'Parmesano','Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',1349,'QA-003-caja3leches-920x920.png',1,1,5,0);
INSERT INTO `products` VALUES (9,'Brie','Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',1115,'Background3.png',1,1,4,0);
INSERT INTO `products` VALUES (10,'Mascarpone','Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',1022,'5fe7de1b-5bcb-4aa9-9b1b-6a7944458d97-768x512.png',0,0,2,0);
INSERT INTO `products` VALUES (11,'Emmental','Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',640,'queso-pecorino-12-meses-920x920.png',1,0,5,0);
INSERT INTO `products` VALUES (12,'Queso azul','Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',862,'queso-cremoso-920x920.png',0,1,3,0);
INSERT INTO `products` VALUES (13,'Queso azul','Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',431,'queso-gouda.png',0,1,4,0);
INSERT INTO `products` VALUES (14,'Roquefort','Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',259,'EB37B83A-D5E4-4D60-91AC-5B6164F36348-1024x683.png',0,1,2,0);
INSERT INTO `products` VALUES (15,'Feta','Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',943,'queso-sbrinz-18-meses-920x920.png',0,0,3,0);
INSERT INTO `products` VALUES (16,'Roquefort','Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',1473,'queso-blanco-danes-920x920.png',0,1,2,0);
INSERT INTO `products` VALUES (17,'Gouda','Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',1299,'queso-halloumi-1-920x920.png',0,0,4,0);
INSERT INTO `products` VALUES (18,'Brie','Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',424,'queso-mozzarella-polpetta-920x920.png',0,0,1,0);
INSERT INTO `products` VALUES (19,'Parmesano','Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',942,'queso-halloumi-1-920x920.png',1,0,4,10);
INSERT INTO `products` VALUES (20,'Feta','Donec ut dolor.',905,'queso-mozzarella-polpetta-920x920.png',1,1,2,10);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Diana','Adrover','diana123','1999-12-19','diana@adrover.com',NULL,'$2a$10$8xodQn64sj9KdFeco.RstuajpKwwrmVX8CGl251l5YD',1);
INSERT INTO `users` VALUES (2,'Nicolas','Cano','nicolas95','1995-12-08','nicolas@hotmail.com',NULL,'$2a$10$zFrDGJhsiUybPXx4jJ4ur.Skn/ChzxwB9GYXMza/fqj',1);
INSERT INTO `users` VALUES (5,'Asa','Asa','asa12345','1222-12-12','asa@asa.com',NULL,'$2a$10$A3s7RMu/UOL7zp9KXjVp7unYUMTfnGt67t3KfzlCOVP',0);
INSERT INTO `users` VALUES (6,'Ana','Carla','Ana12345','1222-12-12','ana@ana.com',NULL,'$2a$10$v/g3HpFpXxioWl5Wd32mTuu/S3mAf18EAChiGJzFWo3',0);
INSERT INTO `users` VALUES (7,'Juan','Carlos','Juan1234','1222-12-12','juan@carlos.com',NULL,'$2a$10$v5YGa4JM9tMLp4UuqTnWCeX3i1wdPN4dcBWHQDgE6QJ',0);
INSERT INTO `users` VALUES (8,'Carlos','Ezequiel','Carlos1234','1222-12-12','carlos@carlos.com',NULL,'$2a$10$B4Vn93N5R1XmLhudU96fSOziGvFTH.1i4Bxd6f23q0t',0);
INSERT INTO `users` VALUES (9,'Alejandro','Sascha','Ale123','1222-12-12','ale@ale.com',NULL,'$2a$10$FP1oy67UzJP0W8fM61peweA.vjHKBO142Q3CR011GhY',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-03 18:31:42
