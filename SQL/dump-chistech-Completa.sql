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
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `image` varchar(49) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `packaging_id` int(11) DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_FK` (`category_id`),
  KEY `products_FK_1` (`packaging_id`),
  CONSTRAINT `products_FK` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `products_FK_1` FOREIGN KEY (`packaging_id`) REFERENCES `packaging` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Brie','Proin at turpis a pede posuere nonummy. Integer non velit.',1263,'queso-halloumi-1-920x920.png',0,0,2),(2,'Mascarpone','Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',397,'queso-brie-laboheme-920x920.png',0,0,4),(3,'Parmesano','Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',540,'queso-pecorino-18-meses-920x920.png',1,1,3),(4,'Feta','Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',904,'EB37B83A-D5E4-4D60-91AC-5B6164F36348-1024x683.png',1,0,4),(5,'Cheddar','Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',588,'C35AADD3-CAE1-4532-9937-615F2B8546D4-768x512.png',0,0,5),(6,'Gouda','Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',930,'queso-tetilla-920x920.png',0,0,4),(7,'Queso azul','Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',1263,'queso-sbrinz-18-meses-920x920.png',0,1,1),(8,'Parmesano','Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',1349,'QA-003-caja3leches-920x920.png',1,1,5),(9,'Brie','Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',1115,'Background3.png',1,1,4),(10,'Mascarpone','Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',1022,'5fe7de1b-5bcb-4aa9-9b1b-6a7944458d97-768x512.png',0,0,2),(11,'Emmental','Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',640,'queso-pecorino-12-meses-920x920.png',1,0,5),(12,'Queso azul','Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',862,'queso-cremoso-920x920.png',0,1,3),(13,'Queso azul','Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',431,'queso-gouda.png',0,1,4),(14,'Roquefort','Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',259,'EB37B83A-D5E4-4D60-91AC-5B6164F36348-1024x683.png',0,1,2),(15,'Feta','Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',943,'queso-sbrinz-18-meses-920x920.png',0,0,3),(16,'Roquefort','Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',1473,'queso-blanco-danes-920x920.png',0,1,2),(17,'Gouda','Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',1299,'queso-halloumi-1-920x920.png',0,0,4),(18,'Brie','Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',424,'queso-mozzarella-polpetta-920x920.png',0,0,1),(19,'Parmesano','Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',942,'queso-halloumi-1-920x920.png',1,0,4),(20,'Feta','Donec ut dolor.',905,'queso-mozzarella-polpetta-920x920.png',1,1,2),(21,'Brie','In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',666,'4d2d80b9-4bfc-4e2f-90fe-84389da30c99-768x557.png',1,1,4),(22,'Mozzarella','Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',336,'queso-gouda.png',0,0,4),(23,'Cheddar','Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',464,'C2F84B43-D143-4EBA-A307-FC41C1A8A229-768x511.png',1,0,4),(24,'Mozzarella','Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',444,'4d2d80b9-4bfc-4e2f-90fe-84389da30c99-768x557.png',1,0,5),(25,'Roquefort','Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',745,'semiblandos.jpg',1,0,5),(26,'Roquefort','Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',864,'QA-003-caja3leches-920x920.png',1,1,2),(27,'Roquefort','Duis mattis egestas metus.',1211,'queso-gouda.png',0,0,1),(28,'Parmesano','Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',459,'queso-brie-laboheme-920x920.png',1,0,5),(29,'Feta','Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',1426,'queso-blanco-danes-920x920.png',1,0,1),(30,'Mascarpone','Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',1193,'B1EA2786-1E01-4C7F-8ECA-F647031E037A-768x512.png',1,0,3),(31,'Brie','Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',324,'queso-piramide-cabra-920x920.png',0,0,2),(32,'Queso azul','Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',1287,'surtidos2.jpg',1,0,5),(33,'Gouda','Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',377,'queso-cremoso-920x920.png',1,0,1),(34,'Brie','Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',893,'queso-provoleta-920x920.png',1,1,4),(35,'Brie','Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',458,'queso-blanco-danes-920x920.png',0,1,4),(36,'Brie','Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',1230,'quesos-duros.jpg',1,1,3),(37,'Roquefort','Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',819,'queso-pecorino-12-meses-920x920.png',1,1,4),(38,'Brie','Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',541,'queso-canestrato-stagionato-920x920.png',0,0,5),(39,'Parmesano','Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',456,'queso-sbrinz-cabra-920x920.png',0,1,4),(40,'Roquefort','Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.',1385,'chistech.png',1,0,5);
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
  PRIMARY KEY (`id`),
  KEY `sales_FK` (`user_id`),
  KEY `sales_FK_1` (`product_id`),
  CONSTRAINT `sales_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `sales_FK_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `user_name` varchar(50) DEFAULT `email`,
  `birth` date NOT NULL,
  `email` varchar(50) NOT NULL,
  `avatar` varchar(13) DEFAULT NULL,
  `password` varchar(50) NOT NULL,
  `admin` varbinary(100) NOT NULL DEFAULT '0' COMMENT '0: user // 1: admin',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Emili','Bridle','ebridle0','1948-07-06','ebridle0@usatoday.com','pngegg(5).png','FvCwyATx','0'),(2,'Alberta','Blaxton','ablaxton1','2000-02-04','ablaxton1@bravesites.com','pngegg(5).png','0dgqGZMdXG4','1'),(3,'Eveleen','Hortop','ehortop2','1987-04-27','ehortop2@fda.gov','pngegg.png','oN1KzC','1'),(4,'Lefty','De Hooch','ldehooch3','1969-04-17','ldehooch3@youtu.be','pngegg(1).png','IkcRl5Jl','0'),(5,'Brander','McCluskey','bmccluskey4','1995-07-06','bmccluskey4@discuz.net','pngegg(3).png','D8N6F3DLj','0'),(6,'Nikola','Gong','ngong5','1960-01-01','ngong5@state.gov','pngegg(6).png','NTYVTjjHFZ','0'),(7,'Beatrix','Jeacop','bjeacop6','1998-08-29','bjeacop6@chicagotribune.com','pngegg(3).png','4D5Axl2','0'),(8,'Dniren','Grogono','dgrogono7','1942-10-20','dgrogono7@ovh.net','pngegg(1).png','lmbCoRDF','1'),(9,'Constantin','Spandley','cspandley8','1993-10-11','cspandley8@independent.co.uk','pngegg(2).png','GYwXkc','1'),(10,'Mair','Paten','mpaten9','1953-11-22','mpaten9@xing.com','pngegg.png','npJESyzM','0'),(11,'Chelsie','Sconce','csconcea','1966-01-26','csconcea@amazon.co.uk','pngegg(6).png','QWOnkk','0'),(12,'Judd','Gonnet','jgonnetb','1961-09-18','jgonnetb@nifty.com','pngegg.png','CD2ULkoYO','0'),(13,'Dorolice','Harbert','dharbertc','1960-06-15','dharbertc@yahoo.com','pngegg(2).png','X7I5E7','0'),(14,'Elfie','Loseke','eloseked','1966-03-18','eloseked@netvibes.com','pngegg.png','N3QXVqdKMN6','0'),(15,'Purcell','Lowden','plowdene','1993-10-08','plowdene@bigcartel.com','pngegg(1).png','XbHcLyo9CH','0'),(16,'Claudette','Halleybone','challeybonef','1978-07-18','challeybonef@japanpost.jp','pngegg(5).png','CWobAgUfAC1','1'),(17,'Cammy','Fasham','cfashamg','1994-09-20','cfashamg@weebly.com','pngegg(5).png','M8n6yblwCT','1'),(18,'Orsa','Pulham','opulhamh','1993-08-15','opulhamh@archive.org','pngegg(2).png','mtmMHkwQ','0'),(19,'Jarrod','Ough','joughi','1993-04-21','joughi@fotki.com','pngegg(1).png','zh9qd2Lb2','0'),(20,'Dukie','Fenge','dfengej','1969-05-09','dfengej@toplist.cz','pngegg(5).png','gEPOQl26xM','0');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

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

-- Dump completed on 2022-01-30 15:56:43
