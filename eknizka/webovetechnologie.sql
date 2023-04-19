-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hostiteľ: 127.0.0.1
-- Čas generovania: St 19.Apr 2023, 13:36
-- Verzia serveru: 10.4.27-MariaDB
-- Verzia PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databáza: `webovetechnologie`
--

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `formular`
--

CREATE TABLE `formular` (
  `ID` int(11) NOT NULL,
  `meno` text NOT NULL,
  `priezvisko` text NOT NULL,
  `vek` int(11) NOT NULL,
  `pribuzenstvo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Sťahujem dáta pre tabuľku `formular`
--

INSERT INTO `formular` (`ID`, `meno`, `priezvisko`, `vek`, `pribuzenstvo`) VALUES
(5, 'habsjhdga', 'asnbdajhdf', 12, 'otec'),
(6, 'habsjhdga', 'asnbdajhdf', 222, 'otec'),
(7, 'habsjhdga', 'asnbdajhdf', 4543, 'otec'),
(8, 'habsjhdga', 'asnbdajhdf', 255, 'brat');

--
-- Kľúče pre exportované tabuľky
--

--
-- Indexy pre tabuľku `formular`
--
ALTER TABLE `formular`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT pre exportované tabuľky
--

--
-- AUTO_INCREMENT pre tabuľku `formular`
--
ALTER TABLE `formular`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
