var tableSize = 20
var table = document.createElement("table");
function createTbl()
{
	var row="";
	for(var j =0;j< tableSize;j++)
	{
		var clm="";
		for(var i =0;i< tableSize;i++)
			clm+="<td></td>";
		row += "<tr>"+clm+"</tr>";
	}
	return row;
}
table.innerHTML = createTbl();
document.body.innerHTML = "";
document.body.appendChild(table)

var sty = "td {height:15px;width:15px;} "
sty += "table{border: 5px solid red} "
sty += ".active{background-color:black} "
sty += ".food{background-color:#16f55b} "
dsty = document.createElement("style")
dsty.innerHTML = sty;
document.head.appendChild(dsty)

table = document.getElementsByTagName("table")[0]
document.getElementsByTagName("body")[0].setAttribute("onkeyup","keydir(event)")

function colorTbl(...tbl)
{
	table.children[0].children[tbl[0]].children[tbl[1]].setAttribute("class","active")
}
function uncolor(...tbl)
{
	table.children[0].children[tbl[0]].children[tbl[1]].removeAttribute("class")
}
function heart(...foodLoc)
{
	table.children[0].children[foodLoc[0]].children[foodLoc[1]].setAttribute("class","food");
}

timeFrame = 300

var let_i = [[1,1],[1,2],[1,3],[1,4],[1,5],[2,3],[3,3],[4,3],[5,3],[5,2],[5,4],[5,1],[5,5]]
ji=-1;
var si = setInterval(function(){colorTbl(let_i[++ji][0],let_i[ji][1])},timeFrame);
setTimeout(function() {clearInterval(si);}, let_i.length*timeFrame);

var let_h = [[7,7],[7,8],[8,9],[7,10],[7,11],[8,6],[8,12],[9,6],[9,12],[10,7],[10,11],[11,8],[11,10],[12,9]]
jh=-1;
var sh = setInterval(function(){colorTbl(let_h[++jh][0],let_h[jh][1])},timeFrame);
setTimeout(function() {clearInterval(sh);}, let_h.length*timeFrame);

var let_u = [[14,12],[15,12],[16,12],[17,12],[18,13],[18,14],[18,15],[17,16],[16,16],[15,16],[14,16]]
ju=-1;
var su = setInterval(function(){colorTbl(let_u[++ju][0],let_u[ju][1])},timeFrame);
setTimeout(function() {clearInterval(su);}, let_u.length*timeFrame);

function reverse()
{
	for(var i=0;i<20;i++)
	{
		for(var j=0;j<20;j++)
		{
			colorTbl(i,j)
		}
	}

	let_i.forEach((v,i)=>heart(v[0],v[1]))
	let_h.forEach((v,i)=>heart(v[0],v[1]))
	let_u.forEach((v,i)=>heart(v[0],v[1]))
}
function reverse2()
{
	for(var i=0;i<20;i++)
	{
		for(var j=0;j<20;j++)
		{
			uncolor(i,j)
		}
	}

	let_i.forEach((v,i)=>colorTbl(v[0],v[1]))
	let_h.forEach((v,i)=>colorTbl(v[0],v[1]))
	let_u.forEach((v,i)=>colorTbl(v[0],v[1]))
}
var largest = (let_i.length>let_h.length)?let_i.length:let_h.length
largest = (largest>let_u.length)?largest:let_u.length;

for(var times=1;times<=20;times++)
{
	if(times%2)
		setTimeout(function() {reverse2();}, ((largest*timeFrame)+(times*500)) );
	else
		setTimeout(function() {reverse();}, ((largest*timeFrame)+(times*500)) );
}
