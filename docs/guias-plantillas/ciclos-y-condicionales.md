# ciclos y condicionales

otra de las ventajas la momento de trabaja con motores de plantillas es el uso de ciclos y condicionales

``` ejs
<% if (user) { %>
  <h2><%= user.name %></h2>
<% } %>

<ul>
  <% users.forEach(function(user){ %>
    <%- include('user/show', {user: user}); %>
  <% }); %>
</ul>
```

``` handlebars
{{#if isActive}}
  <img src="star.gif" alt="Active">
{{else}}
  <img src="cry.gif" alt="Inactive">
{{/if}}

<ul class="people_list">
  {{#each people}}
    <li>{{this}}</li>
  {{/each}}
</ul>
```

``` pug
//- condicionales
- var friends = 10
case friends
  when 0
    p you have no friends
  when 1
    p you have a friend
  default
    p you have #{friends} friends
    
- var user = {description: 'foo bar baz'}
- var authorised = false
#user
  if user.description
    h2.green Description
    p.description= user.description
  else if authorised
    h2.blue Description
    p.description.
      User has no description,
      why not add one...
  else
    h2.red Description
    p.description User has no description

- var friends = 1
case friends
  when 0: p you have no friends
  when 1: p you have a friend
  default: p you have #{friends} friends

//- ciclos
- for (var x = 0; x < 3; x++)
  li item

- var list = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"]
each item in list
  li= item
```

``` mustache
{{! conditionals }}
{{#repo}}
  <b>{{name}}</b>
{{/repo}}
{{^repo}}
  No repos :(
{{/repo}}

{{! loops }}
<ul>
  {{#cities}}
    <li>{{name}}</li>
  {{/cities}}
</ul>
```