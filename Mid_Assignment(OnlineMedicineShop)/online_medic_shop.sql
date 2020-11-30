-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2020 at 07:40 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `online_medic_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `medicineinfo`
--

CREATE TABLE `medicineinfo` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `vendorName` text NOT NULL,
  `price` float NOT NULL,
  `segmentation` text NOT NULL,
  `genre` text NOT NULL,
  `amount` int(11) NOT NULL,
  `availability` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `medicineinfo`
--

INSERT INTO `medicineinfo` (`id`, `name`, `vendorName`, `price`, `segmentation`, `genre`, `amount`, `availability`) VALUES
(2, 'somethingSpacial', 'something', 200, 'something', 'something', 22, 'available'),
(3, 'something ', 'something', 200, 'something', 'something', 22, 'available'),
(4, 'something ', 'something', 200, 'something', 'something', 22, 'available'),
(5, 'something ', 'something', 200, 'something', 'something', 22, 'available'),
(6, 'something ', 'something', 200, 'something', 'something', 22, 'available');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `userName` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `userType` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `userName`, `email`, `password`, `userType`, `createdAt`, `image`) VALUES
(5, 'shahriar', 'shahriar', 'shahriar@gmail.com', '123', 'customer', '2020-11-02 13:09:53', 'user.jpg'),
(8, 'isha', 'isha', 'isha@gmail.com', '123', 'admin', '2020-11-29 15:41:29', 'user2.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `medicineinfo`
--
ALTER TABLE `medicineinfo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `medicineinfo`
--
ALTER TABLE `medicineinfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
