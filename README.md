# CircleMenu Alloy Widget

## Overview

The `CircleMenu` widget allows to create circular menus with even-more-circular submenus.

## Manifest

- version: 0.1 (beta)
- github: https://github.com/davidecassenti/com.appcelerator.circlemenu
- author: Davide Cassenti
- platforms: iOS, Android, MobileWeb

## Adding the ModalWindow widget to your Titanium project
- In your application `config.json` file, you must include the dependency:

```
"dependencies": {
    "com.appcelerator.circlemenu": "0.1"
}
```

- Create the directory `app/widgets` - if it doesn't already exist
- Copy the widget folder inside `app/widgets`


## Sample code

```
index.xml
```

```
<Alloy>
	<Window class="container">
		<Widget id="menu" src="com.appcelerator.circlemenu" />
	</Window>
</Alloy>
```

```
index.tss
```

```
".container": {
	backgroundColor:"black"
}
```

```
index.js
```

```
$.index.open();

$.menu.init({
	size: 100,
	borderWidth: 10,
	backgroundColor: 'yellow',
	borderColor: 'red',
	distance: 50,
	title: "Menu",
	x: 60,
	y: 60,
	minAngle: 0,
	maxAngle: 90
});

$.menu.add({
	size: 60,
	borderWidth: 5,
	backgroundColor: 'pink',
	borderColor: 'white',
	title: "Sub 1",
	click: function() {
		alert("Sub 1");
	}
});

$.menu.add({
	size: 60,
	borderWidth: 5,
	backgroundColor: 'red',
	borderColor: 'white',
	title: "Sub 2",
	click: function() {
		alert("Sub 2");
	}
})

$.menu.add({
	size: 60,
	borderWidth: 5,
	backgroundColor: 'green',
	borderColor: 'white',
	title: "Sub 3",
	click: function() {
		alert("Sub 3");
	}
});

$.menu.add({
	size: 60,
	borderWidth: 5,
	backgroundColor: 'blue',
	borderColor: 'white',
	title: "Sub 4",
	click: function() {
		alert("Sub 4");
	}
});
```