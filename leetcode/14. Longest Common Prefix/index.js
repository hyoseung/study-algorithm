/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
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