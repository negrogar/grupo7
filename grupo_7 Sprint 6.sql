-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-07-2020 a las 00:38:55
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `grupo_7`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `id_compra` int(11) NOT NULL,
  `ds_comprador` varchar(25) COLLATE latin1_spanish_ci NOT NULL,
  `ds_correo` varchar(25) COLLATE latin1_spanish_ci NOT NULL,
  `ds_tarjeta` varchar(55) COLLATE latin1_spanish_ci NOT NULL,
  `ds_producto` varchar(25) COLLATE latin1_spanish_ci NOT NULL,
  `dn_cantidad` int(11) NOT NULL,
  `dn_preciounit` int(11) NOT NULL,
  `dt_fecha` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ds_usuario` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `compras`
--

INSERT INTO `compras` (`id_compra`, `ds_comprador`, `ds_correo`, `ds_tarjeta`, `ds_producto`, `dn_cantidad`, `dn_preciounit`, `dt_fecha`, `ds_usuario`) VALUES
(1, 'Mauricio Freri', 'luism.frieri@gmail.com', '1212355466546544', 'Acelga Atada', 1, 53, '2020-07-12 00:00:00', 0),
(2, 'Karina Lizarraga', 'karina.l@hotmail.com', '2463657856685', 'Acelga Atada', 2, 53, '2020-07-12 00:00:00', 0),
(3, 'Karina Lizarraga', 'karina.l@hotmail.com', '2463657856685', 'Tomates', 1, 102, '2020-07-12 00:00:00', 0),
(4, 'Karina Lizarraga', 'karina.l@hotmail.com', '2463657856685', 'Maple de Huevo', 1, 250, '2020-07-12 00:00:00', 0),
(5, 'Tobias Garreton', 'tobi123@gmail.com', '44355446656546', 'Portobello', 1, 230, '2020-07-13 00:00:29', 0),
(6, 'Tobias Garreton', 'tobi123@gmail.com', '44355446656546', 'Palta', 1, 110, '2020-07-13 00:00:29', 0),
(7, 'Cristian Vaccari', 'cris123@hotmail.com.ar', '555555666666', 'Portobello', 2, 230, '2020-07-13 00:02:14', 0),
(8, 'Cristian Vaccari', 'cris123@hotmail.com.ar', '555555666666', 'Palta', 4, 110, '2020-07-13 00:02:14', 0),
(9, 'Cristian Vaccari', 'cris123@hotmail.com.ar', '555555666666', 'Brocoli', 1, 88, '2020-07-13 00:02:14', 0),
(10, 'Cristian Vaccari', 'cris123@hotmail.com.ar', '555555666666', 'Tomates', 1, 102, '2020-07-13 00:02:14', 0),
(11, 'Vaeria Coronel', 'valecoronel@yahoo.com.ar', '0000100001', 'Berenjena', 1, 77, '2020-07-13 00:48:45', 0),
(12, 'Vaeria Coronel', 'valecoronel@yahoo.com.ar', '0000100001', 'Papa Lavada', 1, 36, '2020-07-13 00:48:45', 0),
(13, 'Patricio Gonzalez', '', '', 'Berenjena', 3, 77, '2020-07-13 00:51:10', 0),
(14, 'Patricio Gonzalez', '', '', 'Papa Lavada', 1, 36, '2020-07-13 00:51:10', 0),
(15, 'Patricio Gonzalez', '', '', 'Kale', 1, 44, '2020-07-13 00:51:10', 0),
(16, '', '', '', 'Berenjena', 1, 77, '2020-07-13 00:52:34', 0),
(17, '', '', '', 'Palta', 1, 110, '2020-07-13 00:52:34', 0),
(18, '', '', '', 'Palta', 1, 110, '2020-07-13 00:52:50', 0),
(19, '', '', '', 'Berenjena', 1, 77, '2020-07-13 00:52:50', 0),
(20, 'Mauricio Freri', 'luism.frieri@gmail.com', '2463657856685', 'Acelga Atada', 4, 53, '2020-07-13 01:00:21', 0),
(21, 'Mauricio Freri', 'luism.frieri@gmail.com', '2463657856685', 'Portobello', 1, 230, '2020-07-13 01:00:21', 0),
(22, '', '', '', 'Acelga Atada', 4, 53, '2020-07-13 01:01:26', 0),
(23, '', '', '', 'Portobello', 1, 230, '2020-07-13 01:01:26', 0),
(24, '', '', '', 'Acelga Atada', 4, 53, '2020-07-13 01:03:38', 0),
(25, '', '', '', 'Portobello', 1, 230, '2020-07-13 01:03:38', 0),
(26, '', '', '', 'Acelga Atada', 4, 53, '2020-07-13 01:05:13', 0),
(27, '', '', '', 'Portobello', 1, 230, '2020-07-13 01:05:13', 0),
(28, '', '', '', 'Acelga Atada', 4, 53, '2020-07-13 01:05:37', 0),
(29, '', '', '', 'Portobello', 1, 230, '2020-07-13 01:05:37', 0),
(30, '', '', '', 'Brocoli', 1, 88, '2020-07-13 01:07:17', 0),
(31, '', '', '', 'Tomates', 1, 102, '2020-07-13 01:07:17', 0),
(32, '', '', '', 'Brocoli', 1, 88, '2020-07-13 01:07:51', 0),
(33, '', '', '', 'Tomates', 1, 102, '2020-07-13 01:07:51', 0),
(34, '', '', '', 'Brocoli', 1, 88, '2020-07-13 01:08:09', 0),
(35, '', '', '', 'Tomates', 1, 102, '2020-07-13 01:08:09', 0),
(36, '', '', '', 'Acelga Atada', 1, 53, '2020-07-13 01:09:36', 0),
(37, '', '', '', 'Berenjena', 1, 77, '2020-07-13 01:09:36', 0),
(38, '', '', '', 'Acelga Atada', 1, 53, '2020-07-13 01:10:06', 0),
(39, '', '', '', 'Berenjena', 1, 77, '2020-07-13 01:10:06', 0),
(40, '', '', '', 'Acelga Atada', 1, 53, '2020-07-13 01:10:40', 0),
(41, '', '', '', 'Berenjena', 1, 77, '2020-07-13 01:10:40', 0),
(42, 'Mauricio Freri', 'luism.frieri@gmail.com', '2463657856685', 'Acelga Atada', 1, 53, '2020-07-13 01:13:43', 0),
(43, 'Mauricio Freri', 'luism.frieri@gmail.com', '2463657856685', 'Kale', 1, 44, '2020-07-13 01:13:43', 0),
(44, 'Karina Lizarraga', 'karina.l@hotmail.com', '2463657856685', 'Acelga Atada', 1, 53, '2020-07-13 01:19:18', 0),
(45, 'Vanesa Pappolla', 'vanepappolla@gmail.com', '4444455555', 'Tomates', 1, 102, '2020-07-13 01:23:36', 0),
(46, 'Mauricio Freri', 'luism.frieri@gmail.com', '2463657856685', 'Tomates', 3, 102, '2020-07-13 01:26:41', 0),
(47, 'Mauricio Freri', 'luism.frieri@gmail.com', '2463657856685', 'Papa Lavada', 4, 36, '2020-07-13 01:26:41', 0),
(48, '', '', '', 'Brocoli', 1, 88, '2020-07-13 21:09:17', 0),
(49, '', '', '', 'Tomates', 1, 102, '2020-07-13 21:09:17', 0),
(50, '', '', '', 'Tomates', 1, 102, '2020-07-13 21:23:15', 0),
(51, '', '', '', 'Berenjena', 1, 77, '2020-07-13 21:23:15', 0),
(52, 'Mauricio Freri', 'luism.frieri@gmail.com', '2463657856685', 'Tomates', 1, 102, '2020-07-13 21:54:58', 0),
(53, '', '', '', 'Acelga Atada', 1, 53, '2020-07-13 23:10:16', 0),
(54, '', '', '', 'Acelga Atada', 1, 53, '2020-07-13 23:17:08', 0),
(55, 'Mauricio Freri', 'luism.frieri@gmail.com', '2463657856685', 'Kale', 1, 44, '2020-07-13 23:20:10', 0),
(56, 'Mauricio Freri', 'luism.frieri@gmail.com', '2463657856685', 'Kale', 1, 44, '2020-07-13 23:20:33', 0),
(57, 'Mauricio Freri', 'luism.frieri@gmail.com', '2463657856685', 'Kale', 1, 44, '2020-07-13 23:21:06', 0),
(58, 'Patricio Gonzalez', 'patito@gmail.com', '44355446656546', 'Papa Lavada', 1, 36, '2020-07-13 23:30:18', 0),
(59, 'Mauricio Freri', 'luism.frieri@gmail.com', '2463657856685', 'Tomates', 1, 102, '2020-07-13 23:50:38', 0),
(60, 'Karina Lizarraga', 'karina.l@hotmail.com', '0000100001', 'Papa Lavada', 1, 36, '2020-07-13 23:52:08', 0),
(61, 'Tobias Garreton', 'tobi123@gmail.com', '2463657856685', 'Tomates', 1, 102, '2020-07-13 23:55:08', 0),
(62, 'Karina Lizarraga', 'karina.l@hotmail.com', '3243466546547', 'Berenjena', 1, 77, '2020-07-13 23:56:51', 0),
(63, 'Mauricio Freri', 'luism.frieri@gmail.com', '2463657856685', 'Papa Lavada', 1, 36, '2020-07-14 00:07:04', 0),
(64, 'Mauricio Freri', 'luism.frieri@gmail.com', '2463657856685', 'Acelga Atada', 1, 53, '2020-07-14 00:07:04', 0),
(65, '', '', '', 'Papa Lavada', 3, 36, '2020-07-14 00:08:39', 0),
(66, '', '', '', 'Acelga Atada', 2, 53, '2020-07-14 00:08:39', 0),
(67, 'Vaeria Coronel', 'valecoronel@yahoo.com.ar', '0000100001', 'Papa Lavada', 3, 36, '2020-07-14 00:10:26', 0),
(68, 'Vaeria Coronel', 'valecoronel@yahoo.com.ar', '0000100001', 'Acelga Atada', 2, 53, '2020-07-14 00:10:26', 0),
(69, 'Vaeria Coronel', 'valecoronel@yahoo.com.ar', '0000100001', 'Kale', 1, 44, '2020-07-14 00:10:26', 0),
(70, 'Mauricio Freri', 'luism.frieri@gmail.com', '2463657856685', 'Papa Lavada', 5, 36, '2020-07-14 00:12:42', 0),
(71, 'Mauricio Freri', 'luism.frieri@gmail.com', '2463657856685', 'Acelga Atada', 4, 53, '2020-07-14 00:12:42', 0),
(72, 'Mauricio Freri', 'luism.frieri@gmail.com', '2463657856685', 'Kale', 3, 44, '2020-07-14 00:12:42', 0),
(73, 'Patricio Gonzalez', 'patito@gmail.com', '0000100001', 'Papa Lavada', 5, 36, '2020-07-14 00:16:31', 0),
(74, 'Patricio Gonzalez', 'patito@gmail.com', '0000100001', 'Kale', 3, 44, '2020-07-14 00:16:31', 0),
(75, 'Patricio Gonzalez', 'patito@gmail.com', '0000100001', 'Acelga Atada', 4, 53, '2020-07-14 00:16:31', 0),
(76, 'Cristian Vaccari', 'cris123@hotmail.com.ar', '', 'Papa Lavada', 1, 36, '2020-07-14 00:18:55', 0),
(77, 'Cristian Vaccari', 'cris123@hotmail.com.ar', '', 'Acelga Atada', 4, 53, '2020-07-14 00:18:55', 0),
(78, 'Cristian Vaccari', 'cris123@hotmail.com.ar', '', 'Kale', 3, 44, '2020-07-14 00:18:55', 0),
(79, 'Mauricio Freri', 'luism.frieri@gmail.com', '2463657856685', 'Papa Lavada', 7, 36, '2020-07-14 00:24:36', 0),
(80, 'Mauricio Freri', 'luism.frieri@gmail.com', '2463657856685', 'Acelga Atada', 2, 53, '2020-07-14 00:24:36', 0),
(81, 'Mauricio Freri', 'luism.frieri@gmail.com', '2463657856685', 'Kale', 1, 44, '2020-07-14 00:24:37', 0),
(82, 'Vaeria Coronel', 'valecoronel@yahoo.com.ar', '2463657856685', 'Tomates', 1, 102, '2020-07-14 00:26:47', 0),
(83, 'Mauricio Freri', 'luism.frieri@gmail.com', '2463657856685', 'Tomate Perita', 1, 125, '2020-07-14 21:23:01', 0),
(84, 'Mauricio Freri', 'luism.frieri@gmail.com', '2463657856685', 'Papa Lavada', 1, 36, '2020-07-14 21:23:01', 0),
(85, 'Karina Lizarraga', 'karina.l@hotmail.com', '0000100001', 'Acelga Atada', 1, 53, '2020-07-14 21:24:56', 0),
(86, 'Karina Lizarraga', 'karina.l@hotmail.com', '0000100001', 'Maple de Huevo', 1, 250, '2020-07-14 21:24:56', 0),
(87, 'Vaeria Coronel', 'valecoronel@yahoo.com.ar', '3243466546547', 'Lechuga Morada', 1, 36, '2020-07-14 21:26:49', 0),
(88, 'Patricio Gonzalez', 'patito@gmail.com', '12435655757', 'Berenjena', 1, 77, '2020-07-15 02:43:43', 0),
(89, 'Cristian Vaccari', 'cris123@hotmail.com.ar', '0000100001', 'Berenjena', 1, 77, '2020-07-15 02:53:24', 0),
(90, 'Cristian Vaccari', 'cris123@hotmail.com.ar', '0000100001', 'Tomates', 1, 102, '2020-07-15 02:53:24', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `ds_nombre` varchar(25) COLLATE latin1_spanish_ci NOT NULL,
  `ds_descripcion` varchar(255) COLLATE latin1_spanish_ci NOT NULL,
  `dn_precio` int(11) NOT NULL,
  `dn_descuento` int(11) NOT NULL,
  `ds_categoria` varchar(25) COLLATE latin1_spanish_ci NOT NULL,
  `image` varchar(55) COLLATE latin1_spanish_ci NOT NULL,
  `ds_usuario_creador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `ds_nombre`, `ds_descripcion`, `dn_precio`, `dn_descuento`, `ds_categoria`, `image`, `ds_usuario_creador`) VALUES
(20, 'Brocoli', 'Viene de Italia', 88, 5, '2', '1593387223365.jpg', 3),
(21, 'Acelga Atada', 'Para rellenar lo que quieras', 53, 4, '1', 'Acelga-Atada.jpg', 1),
(23, 'Maple de Huevo', 'Fritos es lo mejor que hay!', 250, 10, '3', '1593388195942.jpg', 1),
(24, 'Kale', 'Es algo exótico!', 44, 15, '3', '1593392614244.jpg', 2),
(25, 'Chauchas', 'Facil de pelar y ricas para comer!', 28, 2, '3', '1593455227959.jpg', 0),
(26, 'Palta', 'Se usa para todo!', 110, 12, '3', '1593463081076.jpg', 0),
(27, 'Tomates', 'Para la salsa!', 102, 3, '2', '1593473341341.jpg', 1),
(28, 'Berenjena', 'Ideal para el escabeche!', 77, 0, '2', '1593473489277.jpg', 2),
(29, 'Papa Lavada', 'Fritas es lo mejor que hay!', 36, 2, '2', '1593473870219.jpg', 4),
(30, 'Portobello', 'Son hongos poderosos!', 230, 12, '3', '1593556920693.jpg', 1),
(31, 'Pimenton Rojo', 'Es muy picante', 78, 5, '2', '1594748906708.jpg', 0),
(32, 'Ajo', 'Sirve para darle sabor!', 12, 1, '3', '1594750451350.jpg', 3),
(33, 'Lechuga Morada', 'Es mejor que la verde! ', 36, 5, '2', '1594752580739.jpg', 1),
(34, 'Tomate Perita', 'Sirve para la salsa del Domingo y el 29!', 135, 10, '1', '1594759929507.jpg', 1),
(35, 'Calabaza', 'Tamaño familiar! ', 120, 5, '3', '1594761036753.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(15) NOT NULL,
  `ds_nombre` varchar(15) COLLATE latin1_spanish_ci NOT NULL,
  `ds_apellido` varchar(15) COLLATE latin1_spanish_ci NOT NULL,
  `ds_email` varchar(55) COLLATE latin1_spanish_ci NOT NULL,
  `ds_password` varchar(15) COLLATE latin1_spanish_ci NOT NULL,
  `avatar` varchar(25) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `ds_nombre`, `ds_apellido`, `ds_email`, `ds_password`, `avatar`) VALUES
(1, 'Cristian', 'Vaccari', 'cris55@hotmail.com', '010101', '1593316204504.jpg'),
(2, 'Valeria', 'Coronel', 'v.coronel@hotmail.com.ar', 'Valen2020', '1593316496765.jpg'),
(3, 'Tobias', 'Garreton', 'tobi1010@hotmail.com.ar', '888888', '1593316543917.jpg'),
(4, 'Martin', 'Dorrego', 'dorregom@gmail.com', '258963', '1593368333627.jpg'),
(5, 'Hernan', 'Lopez', 'hernanlopez@gmail.com', '123456789', '1593463319671.jpg'),
(6, 'Patricio', 'Gonzalez', 'pato1000@hotmail.com', '$2b$10$lmq.pd4X', '1593975619721.jpg'),
(7, 'Marcos', 'Shanahan', 'marquitos22@yahoo.com.ar', '$2b$10$ROUkP0lE', '1593976791557.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id_compra`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `id_compra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
