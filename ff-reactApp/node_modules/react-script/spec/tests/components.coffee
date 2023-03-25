
describe "ReactScript", ->
	
	it "should create elements from components", ->
		class Foo extends React.Component
			render: -> E ".foo", @props.message
		
		generate '<div class="foo">Hello World!</div>',
			from: E Foo, message: "Hello World!"
	
	it "should support components that wrap children (without props)", ->
		class Window extends React.Component
			render: -> E ".window", @props.children
		class Header extends React.Component
			render: -> E ".header", @props.children
		
		generate '''
			<div class="window">
				<div class="header">
					<h1>Hello World!</h1>
				</div>
				<div class="window-content">
					<p>Hello World!</p>
				</div>
			</div>
			''',
			from:
				E Window, # {},
					E Header, # {},
						E "h1", "Hello World!"
					E ".window-content",
						E "p", "Hello World!"
	
	it "should NOT apply transformations to props passed to components", ->
		class Foo extends React.Component
			render: ->
				# it should not turn {data: {foo: bar}} into {"data-foo": bar}
				unless @props.data?.type is "kung"
					throw new Error "@props.data should be {type: 'kung'}; @props = #{JSON.stringify @props}"
				# it should not turn {class: {foo: bar}} into {className: "#{bar}"}
				unless @props.class?.foo is "bar"
					throw new Error "@props.class should be {foo: 'bar'}; @props = #{JSON.stringify @props}"
				# it should not turn {ariaLabel: bar} into {"aria-label": bar}
				unless @props.ariaLabel is "Hello World! This is a test!"
					throw new Error "@props.ariaLabel should be 'Hello World! This is a test!'; @props = #{JSON.stringify @props}"
				E ".foo", class: "#{@props.data.type}-fu", @props.children
		
		generate '<div class="kung-fu foo">Hello World!</div>',
			from: E Foo,
				data: type: "kung"
				class: foo: "bar"
				ariaLabel: "Hello World! This is a test!"
				"Hello World!"

	it "should work with the prop 'length' and not think it's an array", ->
		class Ruler extends React.Component
			render: ->
				if @props.length isnt 12
					throw new Error "@props.length should be 12; @props = #{JSON.stringify @props}"
				E ".ruler", data: length: @props.length
		
		generate '<div data-length="12" class="ruler"></div>',
			from: E Ruler, length: 12
