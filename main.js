let getGrade =(s1, s2, s3) => 
   (s1+s2+s3)/3 > 90 ? "A" 
  : (s1+s2+s3)/3 >= 80 ? "B"
  : (s1+s2+s3)/3 >= 70? "C" 
  : (s1+s2+s3)/3 >= 60? "D" 
  : "F"
  

  /*

  8kyu- Grasshopper - Grade book

  Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

