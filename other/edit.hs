module Main where

import Control.Monad
import Data.List
import System.IO
import System.Directory

main = do files <- getDirectoryContents =<< getCurrentDirectory
          mapM_ formatPost $ filter (".text" `isSuffixOf`) files



formatPost :: String -> IO ()
formatPost str = do contents <- readFile str
                    let (yaml, content) = splitAt (maybe 0 id (elemIndex "---" $ tail (words contents)) + 2) (words contents)
                    writeFile ("NEW" ++ str) ((unlines $ tokenize yaml) ++ (unwords content))
                    


tokenize :: [String] -> [String]
tokenize l = let indices = findIndices ((':' ==) . last) l
                 pairs = (zip (0:indices) (indices ++ (((length l) - 1):[]))) ++ [((length l) - 1, length l)]
             in map (\(a, b) -> unwords $ take (b - a) $ drop a l) pairs
                 


