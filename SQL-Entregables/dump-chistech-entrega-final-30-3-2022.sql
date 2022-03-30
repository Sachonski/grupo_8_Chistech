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
INSERT INTO `category` VALUES (1,'Quesos Blandos'),(2,'Quesos Azules'),(3,'Quesos Frescos'),(4,'Quesos Corteza'),(5,'Quesos Duros');
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
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,'Mascarpone','Mascarpone es un queso crema italiano muy popular, originario de las regiones de Piamonte y Lombardía. Es un tipo de queso que tiene mucha presencia en la cocina italiana y más allá de sus fronteras. Su suave textura aporta una sutil ligereza a muchos platos y postres, como el famoso tiramisú de café, un postre que atrae precisamente por su deliciosa crema de queso mascarpone',397,'1648524545097_mascarpone.jpg',1,1,1,30),(3,'Parmesano','Algunos platos en la cocina atribuyen su éxito y aceptación única y exclusivamente a un ingrediente especial, este es el caso del queso parmesano, un elemento básico para dar el toque perfecto a muchos platos, especialmente a pastas, lasañas y pastichos. Este queso italiano es uno de los más populares y típicos que evoca el ingrediente esencial en la cocina. Su fama indiscutible más allá de sus fronteras lo ha convertido en uno de los quesos más codiciados.',540,'1648524545097_parmesano.jpg',1,1,1,0),(5,'Cheddar','Cuando hablamos de queso cheddar, lo más común es imaginar una hamburguesa, una salsa de queso fundido o un queso en fetas de consistencia semi-blanda. ¡Qué tristeza! El consumismo ha desprestigiado a tal punto a uno de los quesos más increíbles del mundo. El verdadero cheddar es un queso semi-duro de un sabor excepcional. Tiene cientos de años de historia y millones de fanáticos',588,'C35AADD3-CAE1-4532-9937-615F2B8546D4-768x512.png',1,0,1,10),(6,'Gouda','El queso gouda es considerado el mejor queso holandés y uno de los más populares del mundo, un queso cuyas técnicas de elaboración se han venido perfeccionando durante siglos para satisfacer los más ambiciosos paladares. Claro, el Gouda es uno de los quesos favoritos de los argentinos.',930,'1648524545097_gouda.jpg',1,1,1,25),(7,'Queso azul','Entre los diferentes tipos de productos lácteos, hay un tipo de queso que se destaca en términos de sabor, lo que le ha hecho ser merecedor de una importante preferencia dentro del gusto del público. La combinación de tonos picantes y salados en sus diferentes variaciones, complace a los más diversos paladares del mundo, quienes le consideran un acompañante perfecto de bebidas y cocteles; se trata del queso de vena azul, mejor conocido como queso azul, un producto que muchos se refieren como una exquisitez.',1263,'1648524545097_azul.jpg',1,1,2,10),(8,'Gorgonzola','Gorgonzola es un queso italiano de vetas azules y verdes originario de la región de Milán en Lombardía. Su origen es incierto pero data de finales de los años 800. Parece que en la antigüedad el queso se llamaba “stracchino” (queso blando), cuya palabra proviene de “stracco” que significa “cansado”.',1349,'QA-003-caja3leches-920x920.png',1,0,2,5),(9,'Brie','La historia del queso Brie es tan rica e interesante que evoca pensamientos de sofisticación y elegancia. Con su suave y pegajoso centro, ya sea servido con frutas sencillas o en una elegante fondue, en salsas o verduras, el Brie es sencillamente ideal. Conoce todo lo concerniente al queso Brie, “el rey de los quesos”.La historia del queso Brie es tan rica e interesante que evoca pensamientos de sofisticación y elegancia. Con su suave y pegajoso centro, ya sea servido con frutas sencillas o en una elegante fondue, en salsas o verduras, el Brie es sencillamente ideal. Conoce todo lo concerniente al queso Brie, “el rey de los quesos”.',1115,'Background3.png',1,1,2,0),(10,'Philadelphia','El queso crema es un tipo de queso que ha sido muy popular y ha calado satisfactoriamente en muchos hogares, gracias a su exquisito sabor, su gran practicidad para untar y la variedad de usos que se le puede dar en la cocina. Sin embargo, la marca Philadelphia se considera líder en este rubro de quesos; es una marca de queso crema americana que desde su creación se ha convertido en la norma para la fabricación de queso crema en todo el mundo. Conoce más acerca de la interesante historia del queso Philadelphia.',1022,'1648524545097_philadelphia.jpg',1,0,2,0),(11,'Provolone','El provolone es un queso italiano hecho de leche de vaca, cuyos orígenes se encuentran en el sur de Italia. Hoy en día, la mayor producción de este queso tiene lugar en la región del Valle del Po, particularmente en Lombardía y Véneto. El queso provolone resulta un excelente acompañante de vinos tintos encorpados y viejos. En la mesa, puede ser servido con chutneys calientes, panes, y por supuesto en recetas de pasta.',640,'1648524545097_provolone.jpg',1,1,3,0),(14,'Roquefort','Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',259,'EB37B83A-D5E4-4D60-91AC-5B6164F36348-1024x683.png',1,0,3,0),(17,'Mozzarella','rancia es la cuna por excelencia de los quesos, más de mil variedades se cuentan en su gran trayectoria, los cuales se clasifican según su tipicidad y las características que se definen por el clima, suelo y subsuelo; por el ganado y por las tradiciones agrícolas. De esta manera, Francia es hoy la cuna de uno de los quesos más famosos del mundo, el queso Roquefort, un queso azul que nació en un lugar extraordinario, donde se cruzan las posibilidades caprichosas de la formación de la tierra.',1299,'1648524545097_mozzarella.jpg',1,1,3,0),(50,'Queso Fetas','El queso feta es sin duda, el buque insignia de los productos lácteos griegos y el más conocido de la gastronomía griega en el mundo. Este queso es el epítome del queso de mesa, los griegos lo comen a todas las horas, todos los días',455,'1648524545097_feta.jpg',1,1,3,0),(51,'Queso Edam','Uno de los quesos de Holanda por excelencia es el Edam. Por su sabor, pero también por su historia (fue uno de los quesos más populares según cantidad de consumo mundial en siglos pasados), su preferencia entre reyes y su gran adaptación al mercado moderno',785,'1648524545097_edam.png',1,0,4,25),(52,'Manchego','Origen es español, puntualmente de la zona de la mancha, de ahí su nombre.\r\nde pasta prensada, con poca elasticidad y su color blanco marfil son sus características.\r\nsu sabor es suave y ligeramente ácido.',755,'1648524545097_manchego.png',1,0,4,10),(53,'Horma al Oregano','Queso semiduro de leche pasteurizada extraida de razas (holando argentino y jersey)\r\n\r\nProviniente de tambo con alimetación únicamente a pasto y fermentos naturales seleccionados\r\n\r\nSaborizado al oregano \r\n\r\nSin colorantes ni conservantes\r\nSin colorantes ni conservantes',1750,'1648524545097_oregano.png',1,0,4,0),(54,'Cheddar Ingles','Queso de pasta dura, firme y lisa, cerosa y de color uniforme,  pálido y sabor agrio, era originalmente producido en la villa de cheddar (inglaterra)\r\n\r\nPosee en su interior las nueces y whisky maserado, los cuales hacen un sabor especial\r\n\r\nRealizado con leche pasteurizada, sin colorantes ni conservantes.',750,'1648524545097_Variete.png',1,1,4,15),(55,'Queso Estacionado','Este tipo de queso duro madura uniformemente a través de su masa y del secado, lo que explica la formación de una corteza sólida en el exterior. Debido a su textura firme, el queso duro se puede rallar o cortar en lonjas finas, lo que hace desplegar mejor su aroma.',840,'1648524545097_Queso Estacionado.png',1,1,5,35),(56,'Queso Nuez','La misma simbiosis que se logra entre la oveja y el nogal, se alcanza también con la nuez y el queso, dando lugar al queso tierno con nueces. Con 10 días de secado mantiene la frescura y ligereza de la leche y el sabor y dulzor de la nuez. Un producto ideal para combinar en ensaladas y postres',650,'1648524545097_Queso Nuez.jpg',1,0,5,0),(57,'Queso Pimentado','Queso elaborado con leche fresca pasteurizada, ordeñada diariamente en nuestra explotación ganadera. Su textura característica y el sabor suave al paladar del queso , son contrastados con con los aromas y sabores de la pimienta negra.',1000,'1648524545097_Queso Pimentado.png',1,1,5,0),(58,'Cheddar Belga','El cheddar es un queso pálido de sabor agrio, originalmente producido en la villa de Cheddar, en Somerset, Inglaterra (de ahí su nombre).',740,'1648524545097_Queso.png',1,1,5,5);
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
  KEY `sales_FK_1` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (14,'2022-03-19 16:07:36',0,0,1,0,'1 2022-03-19T16:07:36.702Z'),(15,'2022-03-19 16:07:36',0,0,1,0,'1 2022-03-19T16:07:36.702Z'),(18,'2022-03-19 16:14:08',0,0,1,0,'1 2022-03-19T16:14:08.688Z'),(19,'2022-03-19 16:14:08',0,0,1,0,'1 2022-03-19T16:14:08.688Z'),(41,'2022-03-19 22:48:46',5,3,1,540,'5 2022-03-19T22:48:46.112Z'),(42,'2022-03-19 22:48:46',5,45,1,900,'5 2022-03-19T22:48:46.112Z'),(43,'2022-03-19 22:48:46',5,4,1,904,'5 2022-03-19T22:48:46.112Z'),(44,'2022-03-19 22:52:31',5,3,1,540,'5 2022-03-19T22:52:31.924Z'),(45,'2022-03-19 22:52:31',5,8,1,1349,'5 2022-03-19T22:52:31.924Z'),(46,'2022-03-19 22:53:44',5,3,1,540,'5 2022-03-19T22:53:44.400Z'),(47,'2022-03-19 22:53:44',5,3,1,540,'5 2022-03-19T22:53:44.400Z'),(48,'2022-03-19 22:53:44',5,3,1,540,'5 2022-03-19T22:53:44.400Z'),(49,'2022-03-20 18:07:08',5,9,1,1115,'5 2022-03-20T18:07:08.780Z'),(50,'2022-03-20 18:07:08',5,4,1,904,'5 2022-03-20T18:07:08.780Z'),(51,'2022-03-20 18:07:08',5,49,1,900,'5 2022-03-20T18:07:08.780Z'),(52,'2022-03-20 18:07:08',5,3,1,540,'5 2022-03-20T18:07:08.780Z'),(53,'2022-03-20 18:07:08',5,8,1,1349,'5 2022-03-20T18:07:08.780Z'),(54,'2022-03-20 18:07:08',5,8,1,1349,'5 2022-03-20T18:07:08.780Z'),(55,'2022-03-20 18:07:08',5,9,1,1115,'5 2022-03-20T18:07:08.780Z'),(56,'2022-03-20 18:08:00',1,49,1,900,'1 2022-03-20T18:08:00.468Z'),(57,'2022-03-20 18:08:00',1,47,1,4750,'1 2022-03-20T18:08:00.468Z'),(58,'2022-03-20 18:08:00',1,45,1,900,'1 2022-03-20T18:08:00.468Z'),(59,'2022-03-20 18:08:00',1,47,1,4750,'1 2022-03-20T18:08:00.468Z'),(60,'2022-03-29 20:52:37',9,55,1,546,'9 2022-03-29T20:52:37.893Z'),(61,'2022-03-29 20:52:37',9,5,1,529,'9 2022-03-29T20:52:37.893Z'),(62,'2022-03-29 20:54:24',9,55,1,546,'9 2022-03-29T20:54:24.528Z'),(63,'2022-03-29 20:58:43',9,10,1,1022,'9 2022-03-29T20:58:43.997Z');
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
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Diana ','Adrover','diana123','1999-12-19','diana@adrover.com','1647566739596_pngegg(2).png','$2a$10$1VzxVNllCHjc3qp3FoU8xO9Qs3J0UhT6lXek3ndQZ9/',1),(2,'Nicolas','Cano','nicolas95','1995-12-08','nicolas@hotmail.com','1647008117527_pngegg.png','$2a$10$zFrDGJhsiUybPXx4jJ4ur.Skn/ChzxwB9GYXMza/fqj',1),(5,'Maria','Perez','asa12345','1222-12-12','asa@asa.com','1647008117527_pngegg.png','$2a$10$A3s7RMu/UOL7zp9KXjVp7unYUMTfnGt67t3KfzlCOVP',0),(7,'Juan','Carlos','Juan1234','1222-12-12','juan@carlos.com','1647008117527_pngegg.png','$2a$10$v5YGa4JM9tMLp4UuqTnWCeX3i1wdPN4dcBWHQDgE6QJ',0),(8,'Carlos','Ezequiel','Carlos1234','1222-12-12','carlos@carlos.com','1647008117527_pngegg.png','$2a$10$B4Vn93N5R1XmLhudU96fSOziGvFTH.1i4Bxd6f23q0t',0),(28,'Ana','Gomez','Anita123','1222-12-12','nuevo@dsvsdv.com',NULL,'$2a$10$7BMf0fDNnlSZr2OT4qY85O9ZSSfaWbZUhRhJY5XSZmj',0),(30,'Gaston','Falabella','gaston123','2022-03-03','gaston@falabella.com','1647639564528_pngegg(4).png','$2a$10$PF5ODjzAoUUefYRA8gH20.N58ra5Bd7Qik7mmNcwD1M',0),(31,'Juan','Carlos','juancarlitos','2022-03-29','juancarlos123@gmail.com','no image','$2a$10$2xJdyZXkFqb8/nVk4y0sRuHO3iwzJE0cx8yWYDqEAWb',0),(32,'Alberto','Lopez','albertolopez','2022-03-17','eltioalberto@gmail.com','1648588411140_pngegg(1) - copia.png','$2a$10$NkbRsLb3dgHZEONEZYTaEumuxU/Q3MOvQWXriFPkKX/',0),(33,'Alejandro','Telatnik','Ale91','2022-03-09','ale@gmail.com','1648588411140_pngegg(4) - copia.png','$2a$10$9WWh0n2htNi0yB.m1xUMG.M.o6K4n.Oigg5fqTsltwJ',1);
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

-- Dump completed on 2022-03-29 18:38:40
