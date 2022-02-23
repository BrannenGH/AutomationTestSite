"use strict";(self.webpackChunk_cognizant_softvision_automation_test_site=self.webpackChunk_cognizant_softvision_automation_test_site||[]).push([[744],{5474:function(n,t,e){e.d(t,{s:function(){return i}});var o=e(7294),i=function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];(0,o.useEffect)((function(){var n=t.map((function(n){var t=document.createElement("script");return t.innerHTML=n,document.body.appendChild(t),t}));return function(){n.forEach((function(n){return document.body.removeChild(n)}))}}))}},8731:function(n,t,e){e.r(t);var o=e(7294),i=e(8127),d=e(5474),a=['\nfunction allowDrop(ev) {\n  ev.preventDefault();\n}\nfunction drag(ev) {\n  ev.dataTransfer.setData("text", ev.target.id);\n}\nfunction drop(ev) {\n  ev.preventDefault();\n  var data = ev.dataTransfer.getData("text");\n  ev.target.appendChild(document.getElementById(data));\n}\n$(document).ready(function () {\n  $("#disabledField").children().prop(\'disabled\', true);\n})\n$(document).ready(function () {\n  $("#loading-div-background").css({ opacity: 0.8 });\n  $("#loading-div").css({ opacity: 1.0 });\n  $("#loading-div-background").hide();\n  $("#loading-div").hide();\n  \n});\n\n$(document).ready(function () {\n  var rightClickSpace = document.getElementById("rightclickspace");\n  rightClickSpace.addEventListener("contextmenu", function (event) {\n    event.preventDefault();\n    var ctxMenu = document.getElementById("rightclickmenu");\n    ctxMenu.style.display = "block";\n    ctxMenu.style.left = (event.pageX) + "px";\n    ctxMenu.style.top = (event.pageY) + "px";\n  }, false);\n  // Had to update from \'body\' to \'__gatsby\' due to gatsby requirement\n  var pageBody = document.getElementById("___gatsby");\n  pageBody.addEventListener("click", function (event) {\n    var ctxMenu = document.getElementById("rightclickmenu");\n    ctxMenu.style.display = "";\n    ctxMenu.style.left = "";\n    ctxMenu.style.top = "";\n  }, false);\n});\n','\nfunction ShowProgressAnimation() {\n  $("#loading-div-background").show();\n  $("#loading-div").show();\n}\nfunction HideProgressAnimation() {\n  $("#loading-div-background").hide();\n  $("#loading-div").hide();\n}\nfunction OpenDialog() {\n  $("#dialog-message").dialog({\n    modal: true,\n    buttons: {\n      Ok: function () {\n        $(this).dialog("close");\n      }\n    }\n  });\n};\n\n$(function () {\n  $("#datepicker").datepicker({\n    showOn: "button",\n    buttonImage: "/AutomationTestSite/Content/Images/calendar.gif",\n    buttonImageOnly: true,\n    buttonText: "Select date"\n  });\n});\n$(function () {\n  $("#slider").slider({\n    min: 1,\n    max: 10,\n    value: 2,\n    slide: function (event, ui) {\n      $("#sliderNumber").val(ui.value);\n    }\n  });\n  $("#sliderNumber").val($("#slider").slider("value"));\n});\n','$(function () {\n  $("#draggable").draggable();\n  $("#droppable").droppable({\n      drop: function (event, ui) {\n          $(this).find("p").html("<div id=\\"DROPPED\\">Dropped</div>");\n      }\n  });\n  $("#droppable").droppable({\n      out: function (event, ui) {\n          $(this).find("p").html("<div id=\\"OUT\\">Out</div>");\n      }\n  });\n  $("#droppable2").droppable({\n      drop: function (event, ui) {\n          $(this).find("p").html("<div id=\\"DROPPED\\">Dropped</div>");\n      }\n  });\n  $("#droppable2").droppable({\n      out: function (event, ui) {\n          $(this).find("p").html("<div id=\\"OUT\\">Out</div>");\n      }\n  });\n});\n'];t.default=function(n){return d.s.apply(void 0,a),o.createElement(i.A,{title:"Automation",dangerouslySetInnerHTML:{__html:'\n<style type="text/css">\n#rightclickmenu{\n  display:none;\n  z-index:100;\n  position:absolute;\n  border:1px solid;\n  background-color:white;\n  width:100px; \n  text-align:center;\n}\n#rightclickspace{\n  width:100px;\n  height:100px;\n  background-color:green;\n  border:5px solid black;\n}\n#loading-div-background {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: gray;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n\n#loading-div {\n  width: 300px;\n  height: 200px;\n  background-color: darkgray;\n  color: black;\n  text-align: center;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -150px;\n  margin-top: -100px;\n  z-index: 2;\n}\n\n#div1, #div2 {\n  float: left;\n  width: 140px;\n  height: 55px;\n  margin: 0px 0px 0px 20px;\n  padding: 0px;\n  border: 1px solid #aaaaaa;\n}\n\n#HTML5 {\n  margin: 0px;\n  padding: 10px;\n}\n\n#html4 {\n  height: 220px;\n  margin: 0px;\n  padding: 10px;\n}\n\n#draggable {\n  width: 50px;\n  height: 50px;\n  padding: 0.5em;\n  float: left;\n  margin: 10px 10px 10px 0;\n  border: 1px solid #aaaaaa;\n}\n\n#droppable, #droppable2 {\n  width: 150px;\n  height: 150px;\n  padding: 0.5em;\n  float: left;\n  margin: 10px;\n  border: 1px solid #aaaaaa;\n}\n\n#slider{\n  width:200px;\n}\n\n</style>\n\n<h2>Elements to be automated</h2>\n<ul style="list-style-type:none;padding:0px;margin:0px;">\n<li id="ErrorPageLink"><a href="/AutomationTestSite/NotYetImplemented">500 Error page</a></li>\n<li id="AsyncPageLink"><a href="/AutomationTestSite/Automation/AsyncPage">Async page</a></li>\n<li id="SwaggerPageLink"><a href="/AutomationTestSite/Swagger">Swagger API</a></li>\n</ul>\n\n<div id="ItemsToAutomate">\n<br />\n<button id="showDialog1" onclick="ShowProgressAnimation();">Show dialog</button>\n<br />\n<br />\n<button id="showDialog2" onclick="OpenDialog()">Show dialog 2</button>\n<br />\n<br />\n<button onclick="alert(\'Simple Javascript Alert\')" id="javascriptAlertButton">Javascript Alert</button>\n<br />\n<br />\n<button onclick="confirm(\'Simple Javascript Alert\')" id="javascriptConfirmAlertButton">Alert with confirm</button>\n<br />\n<br />\n<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">\nBootstrap Modal\n</button>\n\n\n<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\n<div class="modal-dialog" role="document">\n<div class="modal-content">\n<div class="modal-header">\n<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n<h4 class="modal-title" id="myModalLabel">Modal title</h4>\n</div>\n<div class="modal-body">\n...\n</div>\n<div class="modal-footer">\n<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n<button type="button" class="btn btn-primary">Save changes</button>\n</div>\n</div>\n</div>\n</div>\n\n\n\n<div id="loading-div" class="ui-corner-all">\n<img id="LoadingImage" src="/AutomationTestSite/Content/Images/loading.gif" alt="Loading.." height="20" />\n<h2 id="PleaseWaitText" style="color:gray;font-weight:normal;">Please wait....</h2>\n<button id="CloseButtonShowDialog" onclick="HideProgressAnimation()" value="Close" style="height:50px;width:100px;color:black">Close</button>\n</div>\n\n<div id="dialog-message" title="Download complete" style="display:none;">\n<p>\n<span class="ui-icon ui-icon-circle-check" style="float:left; margin:0 7px 50px 0;"></span>\nYour files have downloaded successfully into the My Downloads folder.\n</p>\n<p>\nCurrently using <b>36% of your storage space</b>.\n</p>\n</div>\n\n<div id="HTML5">\n<p id="html5Text" style="width: 100%;font-weight: bold">HTML 5</p>\n<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">\n<img src="/AutomationTestSite/Content/Images/dragAndDrop.gif" draggable="true" ondragstart="drag(event)" id="draggablleImageHTML5" alt="W3Schools" />\n</div>\n<div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)">\n</div>\n</div>\n\n\n<br />\n<br />\n\n\n<div id="html4">\n<p id="html4Text" style="width: 100%;font-weight: bold">HTML 4</p>\n<div id="draggable" class="ui-widget-content ui-draggable ui-draggable-handle" style="position: relative;">\n<p>Drag</p>\n</div>\n<div id="droppable" class="ui-widget-header ui-droppable">\n<p>Drop here</p>\n</div>\n<div id="droppable2" class="ui-widget-header ui-droppable">\n<p>Drop here</p>\n</div>\n</div>\n\n<br />\n<br />\n<label>Date Picker</label>\n<br />\n<p>Date: <input type="text" id="datepicker"></p>\n\n<br />\n<br />\n\n\n<p>\n<label for="amount">Slider Number:</label>\n<input type="text" id="sliderNumber" readonly style="border:0; color:#f6931f; font-weight:bold;">\n</p>\n<div id="slider"></div>\n\n\n\n<br />\n<br />\n\n<div id="Checkboxes">\n<input id="Checkbox1" type="checkbox" name="Checkbox1" value="Checkbox1" />Checkbox 1<br />\n<input id="Checkbox2" type="checkbox" name="Checkbox2" value="Checkbox2" />Checkbox 2 <br />\n</div>\n<br />\n<div class="radioButtons">\n<form>\n<input id="MaleRadio" type="radio" name="sex" value="male" checked>Male\n<br>\n<input id="FemaleRadio" type="radio" name="sex" value="female">Female\n</form>\n</div>\n<div id="Dropdown" class="control-group position">\n<p><strong><label>Names</label></strong></p>\n<div class="controls">\n<select id="namesDropdown" class="input-xlarge" name="names">\n<option value="1">Joe</option>\n<option value="two">Jack</option>\n<option value="3">Jill</option>\n<option value="four">Rose</option>\n<option value="5">John</option>\n<option value="six">Emily</option>\n<option value="7">Ashley</option>\n</select>\n</div>\n</div>\n<br />\n<div id="TextFields" class="control-group">\n<p><strong>First name:</strong> <input name="firstname" type="text" /></p>\n<p><strong>Last name:</strong> <input name="lastname" type="text" /></p>\n</div>\n\n<div id="disabledField">\n<input name="disabledfield" type="text" value="Disabled" />\n</div>\n<br />\n<div id="UploadFile" class="control-group">\n<p><strong><label class="control-label" for="photo">Upload Image</label></strong></p>\n<p><input id="photo" class="input-file" name="photo" type="file" /></p>\n</div>\n<div id="Dropdown" class="control-group">\n<p><strong><label>Computer Parts</label></strong></p>\n<div class="controls">\n<select id="computerParts" class="input-xlarge" multiple="multiple" name="computerParts">\n<option value="one">Motherboard</option>\n<option value="two">Power Supply</option>\n<option value="three">Hard Drive</option>\n<option value="four">Monitor</option>\n<option value="five">Mouse</option>\n<option value="six">Keyboard</option>\n</select>\n</div>\n</div>\n\n<div id="rightclicktestbox" class="control-group">\n<br />\n<p><strong>Context Menu Box</strong></p>\n<p>Right-click inside green box to show context menu</p>\n<div id="rightclickmenu"><b id="RightClickSaveText">Save</b></div>\n<div id="rightclickspace">\n</div>\n</div>\n\n<table id="FoodTable" class="tsc_table_s13" style="width: 100%;" summary="Table 1" border="1">\n<caption><strong>Clothing Table</strong></caption>\n<thead>\n<tr>\n<th style="text-align: justify;" scope="col">Number of items</th>\n<th scope="col">T-Shirts</th>\n<th scope="col">Sweaters</th>\n<th scope="col">Shorts</th>\n<th scope="col">Jeans</th>\n\n</tr>\n</thead>\n<tbody>\n<tr>\n<th scope="row">Matt</th>\n<td>1</td>\n<td>2</td>\n<td>0</td>\n<td>5</td>\n</tr>\n<tr class="odd">\n<th scope="row">Cole</th>\n<td>12</td>\n<td>12</td>\n<td>2</td>\n<td>0</td>\n</tr>\n<tr>\n<th scope="row">Troy</th>\n<td>0</td>\n<td>21</td>\n<td>6</td>\n<td>5</td>\n</tr>\n<tr class="odd">\n<th scope="row">Chance</th>\n<td>2</td>\n<td>0</td>\n<td>4</td>\n<td>5</td>\n</tr>\n</tbody>\n<tfoot>\n<tr>\n<th scope="row">Total of items</th>\n<td>15</td>\n<td>35</td>\n<td>12</td>\n<td>15</td>\n</tr>\n</tfoot>\n</table>\n\n\n<table id="FlowerTable" class="tsc_table_s13" style="width: 100%;" summary="Sample Table" border="1">\n<caption><strong>Flower Table</strong></caption>\n<thead>\n<tr>\n<th style="text-align: justify;" scope="col">Flowers</th>\n<th scope="col">Height</th>\n<th scope="col">Width</th>\n<th scope="col">Date Received</th>\n<th scope="col">Color</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<th scope="row">Roses</th>\n<td>10 in</td>\n<td>12 in</td>\n<td>10/12/2015</td>\n<td>Red</td>\n<td><a href="#">Buy</a></td>\n</tr>\n<tr class="odd">\n<th scope="row">Daisies</th>\n<td>15 ft</td>\n<td>6 ft</td>\n<td>9/2/15</td>\n<td>Yellow</td>\n<td><a href="#">Buy</a></td>\n</tr>\n<tr>\n<th scope="row">Tulips</th>\n<td>5 in</td>\n<td>5 in</td>\n<td>10/02/2015</td>\n<td>Purple</td>\n<td><a href="#">Buy</a></td>\n</tr>\n<tr class="odd">\n<th scope="row">Roses</th>\n<td>10 in</td>\n<td>12 in</td>\n<td>10/12/2015</td>\n<td>Red</td>\n<td><a href="#">Buy</a></td>\n</tr>\n</tbody>\n</table>\n</div>'}})}}}]);
//# sourceMappingURL=component---src-pages-automation-tsx-7b1628faeb059c54cdd8.js.map