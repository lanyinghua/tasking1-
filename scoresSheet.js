/**
 * Created by root on 7/11/17.
 */
let scoreArr=[
    ["张三", "95", "80", "75", "80"],
    ["李四", "80", "70", "85", "90"]
];
function score(scoreArr){
    let  scoreSheet={};
    for (let item of scoreArr){
        scoreSheet.push({
            nameofsheet:item[0],
            chinese:parseInt(item[1]),
            english:parseInt(item[2]),
            math:parseInt(item[3]),
            programming:parseInt(item[4]),
            }
        )
    }

    return scoreSheet;
}
score(scoreArr);

function nameArray(scoreArr){
    let nameArr=[];
    for (let item of scoreArr){
        nameArr.push({
                name:item[0],
            }
        )
    }
    return nameArr;
}
function scoreSheet() {
    nameArray(scoreArr);
}

function scoreSum(scoreSheet){
    let summary=[];
    for (let item of scoreSheet){
        summary.push(
            item.chinese+item.english+item.math+item.programming
        )
    }
    return summary;
}



function averNum(scoreSheet){
    let average=[];
    for (let item of scoreSheet){
         average.push(
             (item.chinese+item.english+item.math+item.programming)/(scoreSheet.length-1)
         )
    }
    return average;
}

function average() {
    averNum(scoreSheet);
}

function summaryMid(summary) {
    summary.reverse();
    let length=summary.length;
    if (length%2 !==0 ){
        let i=(length-1)/2;
        return summary[i];
    }else{
        let j=length/2;
        return summary[j];
    }
}


function totAver(average) {
    let totalAver=0;
    for (let i=0 ;i<=average.length; i++){
        totalAver+=average[i]
    }
    return totalAver;
}

function print(scoreSheet) {
    let str = `score sheet
name|math|chinese|english|programming|average|sum
================================================
`;
    for (let item of scoreSheet) {
        str += `name|${item.nameofsheet}|${item.math}|${item.chinese}|${item.english}|${item.programming}|${averNum(scoreSheet)}|${scoreSum(scoreSheet)}
`;
    }
    str +='================================================';
    str +=`average of whole class: ${totAver(average)}
medium of sum :${summaryMid}
`;
    console.log(str)
}
print(scoreSheet);