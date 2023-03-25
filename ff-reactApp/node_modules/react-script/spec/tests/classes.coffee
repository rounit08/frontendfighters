
describe "ReactScript", ->
	
	it "should let you specify multiple classes", ->
		generate '<div class="classy classington"></div>',
			from: E ".classy.classington"
	
	it "should let you specify classes like attributes", ->
		generate '<div class="class-name class classy classington"></div>',
			from: E ".classy.classington",
				className: "class-name"
				class: "class"
	
	it "should handle lists of classes", ->
		generate '<div class="foo bar baz qux fubar"></div>',
			from: E ".fubar",
				className: "foo bar"
				class: ["baz", "qux"]
	
	it "could support plural classes/classNames and even classList", ->
		generate '<div class="food barf foo bar baz qux quux fubar"></div>',
			from: E ".fubar",
				className: "food"
				class: "barf"
				classNames: ["foo", "bar"]
				classes: ["baz", "qux"]
				classList: [[["quux"]]]
	
	context "to support conditional classes", ->
		foo = yes
		bar = no
		it "should ignore void values", ->
			generate '<b></b>',
				from: E "b", class: ("bar" if bar)
			generate '<b class="foo"></b>',
				from: E "b", class: ["foo" if foo, "bar" if bar]
		it "should handle object syntax", ->
			# obsoleting React.addons.classSet
			generate '<b class="bar"></b>',
				from: E "b", class: {foo: no, bar: yes}
			generate '<b class="foo"></b>',
				from: E "b", class: {foo, bar}
		it "should obsolete https://github.com/JedWatson/classnames", ->
			generate '<b class="foo baz"></b>',
				from: E "b", class: [{foo}, [[{bar}]], "baz"]
