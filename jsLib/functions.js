function uniq(arr){
  var obj = {}
  arr.forEach(function(d){
    obj[d] = 1
  })
  return Object.keys(obj)
}

function str2obj(str){
  str = str.replace(/translate\(/, "");
  str = str.replace(/\) scale\(/,",");
  str = str.replace(/\)/,"");
  var tempArr = str.split(",");
  return {"k":parseFloat(tempArr[2]),"x":parseFloat(tempArr[0]),"y":parseFloat(tempArr[1])}
}

function obj2str(obj){
  var tempStr = "translate(" + obj.x + "," + obj.y + ") scale(" + obj.k + ")"
  return tempStr
}

function generate_legend(colour_obj,attr){
  htmlString = "<hr><strong>Legend:</strong><br>"
  Object.keys(colour_obj[attr]).sort().forEach(function(d){
    htmlString += "<svg width=\"10\" height=\"10\"><rect width=\"10\" height=\"10\" style=\"fill:"+colour_obj[attr][d]+"\"/></svg> "+d+"<br>"
  })
  return htmlString
}
