(this.webpackJsonpto_do_application=this.webpackJsonpto_do_application||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(2),i=n.n(a),s=n(10),o=n.n(s),c=(n(16),n(3)),d=n(4),l=n(6),r=n(5),h=(n(17),n(7)),u=n(11),b=n(1),j=(n(18),n(8)),p=(n(19),n(24)),m=n(0),O=function(t){Object(l.a)(n,t);var e=Object(r.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={newTask:""},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleChange",value:function(t){this.setState(Object(j.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){if(t.preventDefault(),""!==this.state.newTask){var e=Object(h.a)(Object(h.a)({},this.state),{},{id:Object(p.a)(),completed:!1});this.props.createList(e),this.setState({newTask:""})}}},{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{className:"Todo-form",onSubmit:this.handleSubmit,children:[Object(m.jsx)("input",{type:"text",placeholder:"New Todo",id:"newTask",name:"newTask",value:this.state.newTask,onChange:this.handleChange}),Object(m.jsx)("button",{children:"Add Todo"})]})})}}]),n}(a.Component),g=(n(21),function(t){Object(l.a)(n,t);var e=Object(r.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={isEditing:!1,updatedTask:a.props.newList},a.handleRemove=a.handleRemove.bind(Object(b.a)(a)),a.toggleForm=a.toggleForm.bind(Object(b.a)(a)),a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleUpdate=a.handleUpdate.bind(Object(b.a)(a)),a.handleToggle=a.handleToggle.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleRemove",value:function(){this.props.removeItem(this.props.id)}},{key:"toggleForm",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleUpdate",value:function(t){t.preventDefault(),this.props.updateItem(this.props.id,this.state.updatedTask),this.toggleForm()}},{key:"handleChange",value:function(t){this.setState(Object(j.a)({},t.target.name,t.target.value))}},{key:"handleToggle",value:function(t){this.props.toggleItem(this.props.id)}},{key:"render",value:function(){return this.state.isEditing?Object(m.jsx)("div",{children:Object(m.jsxs)("form",{className:"Item-edit-form",onSubmit:this.handleUpdate,children:[Object(m.jsx)("input",{type:"text",value:this.state.updatedTask,name:"updatedTask",onChange:this.handleChange}),Object(m.jsx)("button",{children:"Save"})]})}):Object(m.jsxs)("div",{className:"Item",children:[Object(m.jsx)("li",{className:this.props.completed?"Item-task completed":"Item-task",onClick:this.handleToggle,children:this.props.newList}),Object(m.jsxs)("div",{className:"Item-buttons",children:[Object(m.jsx)("button",{onClick:this.toggleForm,children:Object(m.jsx)("i",{class:"fas fa-pen"})}),Object(m.jsx)("button",{onClick:this.handleRemove,children:Object(m.jsx)("i",{class:"fas fa-trash"})})]})]})}}]),n}(a.Component)),v=function(t){Object(l.a)(n,t);var e=Object(r.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={todoList:[]},a.create=a.create.bind(Object(b.a)(a)),a.remove=a.remove.bind(Object(b.a)(a)),a.update=a.update.bind(Object(b.a)(a)),a.toggleCompletion=a.toggleCompletion.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"create",value:function(t){this.setState({todoList:[].concat(Object(u.a)(this.state.todoList),[t])})}},{key:"remove",value:function(t){this.setState({todoList:this.state.todoList.filter((function(e){return e.id!==t}))})}},{key:"update",value:function(t,e){var n=this.state.todoList.map((function(n){return n.id===t?Object(h.a)(Object(h.a)({},n),{},{newTask:e}):n}));this.setState({todoList:n})}},{key:"toggleCompletion",value:function(t){var e=this.state.todoList.map((function(e){return e.id===t?Object(h.a)(Object(h.a)({},e),{},{completed:!e.completed}):e}));this.setState({todoList:e})}},{key:"render",value:function(){var t=this,e=this.state.todoList.map((function(e){return Object(m.jsx)(g,{newList:e.newTask,id:e.id,completed:e.completed,removeItem:t.remove,updateItem:t.update,toggleItem:t.toggleCompletion},e.id)}));return console.log(e),Object(m.jsxs)("div",{className:"ItemList",children:[Object(m.jsxs)("h1",{children:["Todo lists ",Object(m.jsx)("span",{children:"Simple React Todo List App"})]}),Object(m.jsx)("ul",{children:e}),Object(m.jsx)(O,{createList:this.create})]})}}]),n}(a.Component),f=function(t){Object(l.a)(n,t);var e=Object(r.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(v,{})})}}]),n}(a.Component),k=f,x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),s(t),o(t)}))};o.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root")),x()}],[[22,1,2]]]);
//# sourceMappingURL=main.10469578.chunk.js.map