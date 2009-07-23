// Around-advices allows argument manipulation (remove)
(function() {

	testcase("Test case for issue #2 - Around-advices allows argument manipulation (remove)", function() {

		function Thing() {}
		
		Thing.prototype.doSomething = function() { 
			return Array.prototype.slice.call(arguments).join(',');
		}
		
		var aspects = jQuery.aop.around( {target: Thing, method: 'doSomething' }, 
			function(inv) { 
				inv.arguments = inv.arguments.splice(inv.arguments.length-1, 1);
				return inv.proceed();
			} 
		); 

		var thing = new Thing();
		var result = thing.doSomething("arg1", "arg2", "arg3");

		if (aspects.length > 0)
			for (var i in aspects)
				aspects[i].unweave();
		else
			aspects.unweave();

		assertAreEqual("arg1,arg2", result, "Around-advices allows argument manipulation (remove)");

	});

})();
