
ReactScript = require "../react-script"
React = require "react"
{html: beautify} = require "js-beautify"

assert_html_structure = (actual, expected)->
	options =
		indent_with_tabs: yes
		indent_inner_html: yes
		unformatted: []
	
	actual = beautify actual, options
	expected = beautify expected, options
	if actual isnt expected
		e = new Error "HTML structure doesn't match"
		e.actual = actual
		e.expected = expected
		e.showDiff = yes
		throw e

generate = (expected_html, {from: tree})->
	generated_html = React.renderToStaticMarkup tree
	assert_html_structure generated_html, expected_html

error_please = (rgx, fn)->
	unless (typeof rgx is "string") or (rgx instanceof RegExp)
		throw new Error "First argument to error_please must be a RegExp or string"
	unless (typeof fn is "function")
		throw new Error "Second argument to error_please must be a function"
	show = (value)-> (try JSON.stringify value) ? value
	try
		do fn
	catch e
		if e instanceof Error
			if e.message?.match? rgx
				return
			else
				throw new Error "Error message (#{show e.message}) doesn't match #{rgx}"
		else
			throw new Error "Function threw #{typeof e} (#{show e})"
	throw new Error "Function didn't throw an error"


console_warn = console.warn
console.warn = ->
	console_warn.apply console, arguments
	throw new Error "console.warn: #{[].slice.apply(arguments).join(" ")}"

global.error_please = error_please
global.generate = generate
global.React = React
global.E = ReactScript
