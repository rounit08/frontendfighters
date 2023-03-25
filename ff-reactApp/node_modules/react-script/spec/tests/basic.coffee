
describe "ReactScript", ->
	
	it "should create elements from CSS selectors", ->
		generate '
			<html>
				<head>
					<title>Hello World!</title>
				</head>
				<body>
					<h1 class="shiny">Hello World!</h1>
				</body>
			</html>
		', from:
			E "html",
				E "head", E "title", "Hello World!"
				E "body", E "h1.shiny", "Hello World!"
	
	it "should default to creating <div> elements", ->
		generate '
			<div class="test">
				<div>
					<div></div>
				</div>
			</div>
		', from:
			E ".test", E "", E()
	
	it "should allow arrays of arbitrary depth", ->
		generate '
			<div class="test">
				<div class="a"></div>
				<div class="b"></div>
				<div class="c"></div>
				<div class="d"></div>
				<div class="e"></div>
			</div>
		', from:
			E ".test",
				E ".a", key: "a"
				[E ".b", key: "b"]
				E ".c", key: "c"
				[[E ".d", key: "d"]]
				E ".e", key: "e"
	
	it "should fail loudly when it can't parse a selector", ->
		error_please /Unhandled/, ->
			E "um)#(E%"
	
	it "should handle boolean attributes", ->
		data_falsey = no
		data_truthy = yes
		generate '<div data-truthy="true"></div>',
			from: E "div", {data_falsey, data_truthy}
	
	it "should handle aria boolean attributes", ->
		aria_falsey = no
		aria_truthy = yes
		generate '<div aria-falsey="false" aria-truthy="true"></div>',
			from: E "div", {aria_falsey, aria_truthy}
	
	it "should handle null as well as undefined", ->
		data_falsey = null
		data_truthy = "true-dat"
		generate '<div data-truthy="true-dat"></div>',
			from: E "div", {data_falsey, data_truthy}
		generate '<div>true-dat</div>',
			from: E "div", data_falsey, data_truthy
	
	it "should transform variations to data-*", ->
		generate '<div data-xyzzy="Nothing happens." data-foo="bar" data-baz="quux" data-norf="777"></div>',
			from: E "div", "data-xyzzy": "Nothing happens.", data_foo: "bar", dataBaz: "quux", data: norf: 777
	
	it "should transform variations to aria-*", ->
		generate '<div aria-xyzzy="Nothing happens." aria-foo="bar" aria-baz="quux" aria-norf="777"></div>',
			from: E "div", "aria-xyzzy": "Nothing happens.", aria_foo: "bar", ariaBaz: "quux", aria: norf: 777
	
	it "should let you function", ->
		e = E "input", onChange: -> "ok"
		e.props.onChange()
	
	it.skip "could support selector attributes", ->
		generate '<input type="number" min="5" max="10" autofocus>',
			from: E "input[type=number][min=5][max=10][autofocus]"
	
	it.skip "could support using the child > selector", ->
		generate '<li><a href="http"></a></li>',
			from: E "li > a", href: "http"
		generate '<table><tbody><tr><td><div>Tables are annoying</div></td></tr></tbody></table>',
			from: E "table > tbody > tr > td > div", "Tables are annoying"
	
	it.skip "would tell you to use > if you try to use the descendent selector", ->
		error_please /descendent/, ->
			E ".inexplicit .arbitrary .undefined"
	
	it "should not give react warnings in normal usage", ->
		E ".foobar",
			E "ol.static",
				E "li", "Item A: an item"
				E "li", "Item B: another item"
				E "li", "Item C: also an item"
			E "ul.dynamic",
				for n in [1...3]
					E "li", key: n, "Item #{n}"
	
	it "should give react warnings if you're missing a key", ->
		error_please /Warning: Each child in an array or iterator should have a unique "key" prop/, ->
			E "ul",
				for n in [1...3]
					E "li", "Item #{n}"
