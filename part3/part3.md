- The bug was that the arguments of the function were passed as strings, so using the `+` operator with them would cause concatenation, not addition. I would fix it by using `parseInt` to convert the strings to number form before adding them together.

**Network tab**

1. citylots.json
2. part2.js
3. 11.7 MB
4. 15.49 s
5. Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36
6. Apache
7. Tue, 26 Jan 2021 22:14:13 GMT
8. application/json
9. fetchData
