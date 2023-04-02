Before React:

HTML+CSS+JS => DOM(documentObjectModel)

After React:

Code => React Diffing Algorithm => Virtual DOM => DOM

example:
See the switch board in your room, it has many switches and you have many electrical appliances connected to them.
Now, suppose light bulb and fan both are ON,
but you want to switch off FAN.
So what you will do? Will blast the transformer? or Will disconnect the whole electricity supply of the house?
NO(I mean in your case may be YES, but here I am taling about Humans '><' ) we will toggle the switch to make the fan OFF

Same is with react, the diffing algo checks where to implement the changes and virtual DOM changes that and then updates only that changed element in real DOM rather than updating the whole DOM.

and we can use one switch for switching off the FAN because there are one switch for a particular appliance.

Same we can do the VIRTUAL DOM because React runs on component based system, so one component is not dependent on the other
