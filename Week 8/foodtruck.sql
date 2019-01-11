-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 11, 2019 at 04:03 PM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `foodtruck`
--
CREATE DATABASE IF NOT EXISTS `foodtruck` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `foodtruck`;

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE IF NOT EXISTS `bookings` (
  `bookingId` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `truckname` varchar(255) DEFAULT NULL,
  `bookingDate` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`bookingId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`bookingId`, `username`, `truckname`, `bookingDate`) VALUES
(1, 'kalyan', 'Dosa Place', '2019-01-26'),
(2, 'kalyan', 'Minerva Xpress', '2019-01-05'),
(5, 'kalyan', 'Kebabs Truck', '2019-04-10'),
(6, 'kalyan', 'The Spitfire BBQ Truck', '2019-01-01');

-- --------------------------------------------------------

--
-- Table structure for table `foodtruck`
--

CREATE TABLE IF NOT EXISTS `foodtruck` (
  `foodtruckId` int(11) NOT NULL AUTO_INCREMENT,
  `foodtruckName` varchar(250) NOT NULL,
  `foodtruckarea` varchar(250) NOT NULL,
  `foodtruckImage` varchar(500) NOT NULL,
  `foodtruckType` varchar(200) NOT NULL,
  PRIMARY KEY (`foodtruckId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `foodtruck`
--

INSERT INTO `foodtruck` (`foodtruckId`, `foodtruckName`, `foodtruckarea`, `foodtruckImage`, `foodtruckType`) VALUES
(1, 'Dosa Place', 'Lingampally', 'https://pbs.twimg.com/profile_images/910507477686456322/R8JVPFbu_400x400.jpg', 'Veg / Non Veg'),
(2, 'The Kingz Landing', 'Kothaguda', 'https://www.calpolydining.com/img/gallery/Central-Coaster/Central-Coaster-medium.jpg', 'Veg'),
(3, 'The Spitfire BBQ Truck', 'Tarnaka', 'https://pbs.twimg.com/profile_images/781616919820570624/MrxKiI2T.jpg', 'Non Veg'),
(4, 'Creamstruck', 'S R Nagar', 'https://media2.fdncms.com/boiseweekly/imager/maple-grove-road-and-fairview-avenue-boise/u/slideshowthumb/2415891/lillystacos.jpg', 'Veg'),
(5, 'Rollarappa', 'Kukatpally', 'https://mobilenom.imgix.net/images/paperclip/truck_infos/155/avatars/original.jpg', 'Non veg, Veg'),
(6, 'Minerva Xpress', 'Kondapur', 'http://www.theloadedburger.com/wp-content/uploads/2017/04/truck_loadedburger1.jpg', 'Veg / Non Veg'),
(7, 'Le Bistro', 'Begumpet', 'https://b.zmtcdn.com/data/reviews_photos/e16/3eb6372555b8a7aed1cb751cbf703e16_1526324350.jpg', 'Veg'),
(8, 'Creamy Up', 'Banjara Hills', 'https://hips.hearstapps.com/del.h-cdn.co/assets/cm/15/10/54f63c51a718a_-_comida-truck-xl.jpg', 'Veg'),
(9, 'Kebabs Truck', 'Shamshabad', 'https://b.zmtcdn.com/data/pictures/3/18570763/d6a5750470942935815243bf94953dac_featured_v2.jpg', 'Non Veg');

-- --------------------------------------------------------

--
-- Table structure for table `knex_migrations`
--

CREATE TABLE IF NOT EXISTS `knex_migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `knex_migrations`
--

INSERT INTO `knex_migrations` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, 'contacts.js', 1, '2019-01-08 15:13:51');

-- --------------------------------------------------------

--
-- Table structure for table `knex_migrations_lock`
--

CREATE TABLE IF NOT EXISTS `knex_migrations_lock` (
  `index` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `is_locked` int(11) DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `knex_migrations_lock`
--

INSERT INTO `knex_migrations_lock` (`index`, `is_locked`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'kalyan', 'kalyan'),
(2, 'krishna', 'krishna'),
(3, 'venkata', 'venkata');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
