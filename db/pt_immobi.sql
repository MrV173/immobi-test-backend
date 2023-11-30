-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2023 at 10:09 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pt_immobi`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `token` text DEFAULT NULL,
  `status` varchar(255) DEFAULT 'pending',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `gender`, `phone`, `token`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'ibnu', 'ibnu@gmail.com', '$2b$10$BabG3DBWl0vQtcszcOcH0.mMtrBFXH12IwVixMz/BQ9K6WA4eQDyy', 'male', '08123123123', NULL, 'active', '2023-11-29 12:58:45', '2023-11-29 18:43:19'),
(2, 'ibnu hakim', 'ibnu@gmail.com', '$2b$10$.PzyIUfhXIl8RTWOYxYMzu4cA4HI2OhY8rxXze0nQP5Nj0cDB.mg2', 'male', '08123123123', NULL, 'pending', '2023-11-29 15:03:33', '2023-11-29 15:03:33'),
(3, 'winter', 'ibnu@gmail.com', '$2b$10$flvI6WUIFSpziPQftTg2iuUzYUIm1FCRAUMF9XDEybS8EttKeQ/.q', 'male', '08123123123', NULL, 'pending', '2023-11-29 15:20:02', '2023-11-29 15:20:02'),
(4, 'IBNU', 'ibnu@gmail.com', '$2b$10$erxeP24tjlaBuhNOCEwccexVt3UDb0ycn1j8gEdafRjxQuBu.ylUu', 'Male', '', NULL, 'pending', '2023-11-29 15:51:35', '2023-11-29 15:51:35'),
(6, 'winter', 'ibnu@gmail.com', '$2b$10$KPvM1AIJbe6xBkddXADdbuebq./VNmGqALCL7UVkQuc4eI2xzED8m', 'male', '08123123123', NULL, 'pending', '2023-11-29 17:58:04', '2023-11-29 17:58:04'),
(8, 'karina', 'karina@gmail.com', '$2b$10$TmWBkAUUzvSnBHXnT8ZRU.2pC5rWOn.Cd3pHPsYAi9LsdwQrKSjli', 'Male', '08121212', NULL, 'active', '2023-11-29 18:21:27', '2023-11-29 18:36:01'),
(9, 'winter aespa', 'winteraespa@gmail.com', '$2b$10$cYohss8m8IY7EMpCpDZ.yeCg58qrIwPQcpAQgiih99qlTA4OITcbG', 'Female', '08123123123', NULL, 'active', '2023-11-29 18:40:01', '2023-11-29 18:40:46'),
(10, 'Ningning', 'ning@gmail.com', '$2b$10$RFiWj7pu1u3mk/erOhXLC.IGNk./2V./ho7/N3UJ6K1E5Xti/gcy2', 'Female', '08123123123', NULL, 'active', '2023-11-29 18:43:43', '2023-11-29 18:44:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
