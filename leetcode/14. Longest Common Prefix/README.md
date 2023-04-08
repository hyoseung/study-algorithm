- https://leetcode.com/problems/longest-common-prefix/
- Runtime: 69 ms
- Memory Usage: 42.3 MB

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // 정렬 로직을 통해 제일 짧은 문자열이 첫번째에 위치
    strs.sort(function(a, b)  {
        if(a.length > b.length) return 1;
        if(a.length === b.length) return 0;
        if(a.length < b.length) return -1;
    });

    let prefix = '';
    const first = strs[0];
    for(let i=0; i<first.length; i++) {
        let exist = true;
        const str = prefix + first[i];
        for(let j=1; j<strs.length; j++) {
            if (!strs[j].startsWith(str)) {
                exist = false;
                break;
            }
        }

        if(!exist) break;

        prefix += first[i];
    }

    return prefix
};
```