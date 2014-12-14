Compile spacebars templates from string
=======================================

`meteor add mpowaga:string-template`

###Using template###

You can compile your string with `compileString` template.

e.g.

```
<template name="welcome">
  {{#with data}}
    {{{compileString template}}}
  {{/with}}
</template>
```

```
Template.welcome.helpers({
  data: function() {
    var message = Session.get('message');
    return { message: message };
  },

  template: function() {
    return 'Welcome: <b>{{message}}</b>'
  }
})
```
###Using function###

Alternatively you can compile your string on client side code with `StringTemplate.compile`.

e.g.

```
StringTemplate.compile('Welcome {{message}}', { message: 'to Miami' });
// "Welcome to Miami"
```
