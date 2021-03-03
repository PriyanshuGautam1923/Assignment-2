	var nm=prompt("Enter your name in short form");
	var table=document.getElementsByTagName("table")[0];
	var tr=document.getElementsByTagName("tr");
	var input=document.querySelector("input");
	var t=document.querySelector("#t");
	var x=document.querySelectorAll(".x");
	var e=document.querySelectorAll(".e");
	var c=document.querySelectorAll(".c");
	var a=document.querySelectorAll(".a");
	t.textContent= nm + "'s To-Do List";
	//var ul=document.querySelector("#ul");
	for(var i=0;i<tr.length;i++)
	{
		c[i].addEventListener("click",function(event){
		this.classList.toggle("line");
		event.stopPropagation()
		});
	}
	
	for(var i=0;i<x.length;i++)
	{
		remove(x[i],tr[i]);
		edit(e[i],c[i],input);
		impo(a[i],tr[i])

	}
	
	input.addEventListener("keypress",function(q){
		if(q.which === 13)
		{
			i++;
			var ToDoText=this.value;
			addatodo(table,ToDoText,i);
			this.value="";
		}
	});
	function remove(element,e,)
	{
		element.addEventListener("click",function(){e.remove();})
	}
	function edit(element,e,it)
	{
		element.addEventListener("click",function(){
		var ToDoText=it.value;
		e.textContent=ToDoText;
		input.value="";
		})
	}
	function impo(q,w)
	{
		q.addEventListener("click",function(event){
			w.classList.toggle("imp");
			event.stopPropagation();
		})
	}
	function addatodo(table,text)
	{
		var row = table.insertRow(0);
		var cell1= row.insertCell(0);
		var cell2= row.insertCell(1);
		var cell3= row.insertCell(2);
		var cell4= row.insertCell(3);
		var btn1=document.createElement("BUTTON");
		var btn2=document.createElement("BUTTON");
		var btn3=document.createElement("BUTTON");
		var text1 = document.createTextNode("X");
		var text2 = document.createTextNode(text);
		var text3 = document.createTextNode("Edit");
		var text4 = document.createTextNode("Important");
		btn1.appendChild(text1);
		btn2.appendChild(text3);
		btn3.appendChild(text4);
		cell1.appendChild(btn1);
		cell2.appendChild(text2);
		cell3.appendChild(btn2);
		cell4.appendChild(btn3);
		row.addEventListener("click",function(event){
		this.classList.toggle("line");
		event.stopPropagation();
		});
		remove(btn1,row);
		edit(btn2,cell2,input);
		impo(cell4,row);
		cell1.setAttribute("class","v");
	}
	