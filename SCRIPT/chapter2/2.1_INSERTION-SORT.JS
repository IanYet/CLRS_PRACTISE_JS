
/**
 * 第一个for循环检查，保证前i-1个数据按照要求的顺序
 * 
 * while循环将第i个数据插入前面已经排好的数据中
 * 
 * @param {[number]} dataArray 
 */
function insertion_sort(dataArray){
    for(let i=1; i<dataArray.length; i++){
        let key = dataArray[i]
        let j = i - 1

        while(j >= 0 && dataArray[j] < key){
            [dataArray[j],dataArray[j+1]] = [dataArray[j+1],dataArray[j]]
            j = j - 1
        }

        console.log(dataArray)
    }

    return dataArray
}

console.log(insertion_sort([5,8,9,6,6,4,3]))